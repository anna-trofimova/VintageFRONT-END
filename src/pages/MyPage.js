import React, { Component} from "react";
import {Link } from 'react-router-dom';
import myPageService from "../services/my-page-service";
import itemService from "../services/items-service";
import ListItem from "../components/ListItem"



class MyPage extends Component {
  state = {
    user: {},
    loading: true,
    userId: '',
    istOfItems:[],
  
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
      
    itemService.items()
      .then((listOfItems)=>{
        this.setState({
          listOfItems,
          loading: false,
        })
    })
      .catch((error)=>console.log(error))
  }

  render() {
    const { user, loading,  userId, listOfItems} = this.state;
    console.log(userId)
    return (
      <div className='myPage-container'>
        {!loading && 
        <div class='my-information'> 
        {user.imageUrl ? <img src={user.imageUrl} alt="some stuff to stop error" width='120px'/>: <p>no</p>}
        <p>Hey {user.username} !</p>
        {user.phone ? <p>Phone: {user.phone}</p> : <p>no</p>}
        {user.email ? <p>Email: {user.email}</p> : <p>no</p>}
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
