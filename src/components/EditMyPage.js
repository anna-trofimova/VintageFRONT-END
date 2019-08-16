import React, { Component } from "react";
import myPageService from "../services/my-page-service";
import {Redirect} from "react-router-dom";


class EditMyPage extends Component {
  state = {
    username: "",
    email: "",
    phone: "",
    img: "",
    redirect: false
  };

  componentDidMount() {
    myPageService
      .myPage()
      .then(user => {
        const {username, email, phone, img} = user;
        this.setState({username, email, phone, img});
      })
      .catch(error => console.log(error));
  }


  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }
  handleSubmit = (event) => {
    //prevent the form default by using the event
    // destructure the state into an object

    event.preventDefault();
    const { username, email, phone, img} = this.state
    
    //take the id from the router -> it lives in props.match
    const {id} = this.props.match.params
 
    // use the myPageService to call a put to the backend, send the id and the updated state data
    myPageService
    .editMyPage(id,{username,email,phone,img})
    .then(user => {
      console.log(user)
      this.setState({
        redirect:true
      });
    })
    .catch(error => console.log(error));
    // redirect to /myPage
    
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='username' >Username:</label>
          <input id='username' type='text' name='username' value={this.state.username} onChange={this.handleChange}/>
          <label htmlFor='email'>Email:</label>
          <input id='email' type='email' name='email' value={this.state.email} onChange={this.handleChange} />
          <label htmlFor='phone'>Phone:</label>
          <input id='phone' type='number' name='phone' value={this.state.phone} onChange={this.handleChange} />
          <label htmlFor='img'>Image:</label>
          <input id='img' type='text' name='img' value={this.state.img} onChange={this.handleChange} />
          <button type='submit'>save</button>
        </form>
         { this.state.redirect ?  <Redirect to='/myPage' /> : null } 
      </div>
    );
  }
}

export default EditMyPage;
