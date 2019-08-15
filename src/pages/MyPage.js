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
      <div>
        {!loading && <><p>HEYYY{user.username}</p>
        {user.phone ? <p>{user.phone}</p> : <p>no</p>}
        </>}
        <Link to={`/myPage/${userId}/edit`}>Edit</Link>
      </div>
    );
  }
}
export default MyPage;
