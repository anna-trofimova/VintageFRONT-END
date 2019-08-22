import React, { Component} from "react";
import {Link } from 'react-router-dom';
import myPageService from "../services/my-page-service";
import itemService from "../services/items-service";
import withAuth from '../components/withAuth'

class MyPage extends Component {
  state = {
    user: {},
    loading: true,
    userId: '',
  } 
  
  componentDidMount(){
    myPageService.myPage()
      .then((user)=>{this.setState({
        user, 
        loading: false,
        userId: user._id
      })
      })
      .catch((error)=>console.log(error))
  }

  handleDelete = (id) =>{
    itemService.deleteItem(id, this.props.user._id)
    .then(() => {
      myPageService.myPage()
      .then(user => {
        this.setState({
          user
        })
      })
    })
  }

  render() {
    const { user, loading,  userId} = this.state;
    return (
    
      <div className='myPage-container' >
        <div className='myInfo-container'>
        {!loading && 
        <div className='my-information'> 
        {user.imageUrl ? <img src={user.imageUrl} alt="profile img" width='120px'/>: <p>no</p>}
        <p>Hey {user.username} !</p>
        {user.phone ? <p>Phone: {user.phone}</p> : <p>Phone: no</p>}
        {user.email ? <p>Email: {user.email}</p> : <p>Email: no</p>}
        </div>
      }

      <div className='myPage-links'> 
        <Link to={`/myPage/${userId}/edit`} className='linkMypage'>Edit</Link>
        <Link to={`/items/create`} className='linkMypage'>Create a post</Link>
      </div> 
      </div>

      <div>
      {!loading &&
      <>
        {user.myItems.length > 0 ? user.myItems.map((item, index) => {
          return (
            <div key={index} className='myPost-info'>
              <img src={item.img} alt="clothes pic" width='300px'/>
              <h3>{item.name}</h3>
              <button onClick={() => this.handleDelete(item._id)}>DELETE</button>
            </div>)  
        }) : null}
      </>
      }
        </div>
      </div>
    );
  }
}
export default withAuth(MyPage);
