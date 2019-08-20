import React, { Component} from "react";
import {Link } from 'react-router-dom';
import myPageService from "../services/my-page-service";


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

  render() {
    const { user, loading,  userId} = this.state;
    console.log(userId)
    return (
      <div className='myPage-container'>
        {!loading && 
        <div class='my-information'> 
        <p>Hey {user.username} !</p>
        {user.phone ? <p>Phone: {user.phone}</p> : <p>no</p>}
        {user.email ? <p>Email: {user.email}</p> : <p>no</p>}
      
        {user.imageUrl ? <img src={user.imageUrl} alt="some stuff to stop error"/>: <p>no</p>}
        </div>}
      <div className='myPage-links'> 
        <Link to={`/myPage/${userId}/edit`}>Edit</Link>
        <Link to={`/items/create`}>Create a post</Link>
      </div>
      </div>
    );
  }
}
export default MyPage;
