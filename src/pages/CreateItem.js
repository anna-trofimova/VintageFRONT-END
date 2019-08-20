import React, { Component } from 'react';
import itemService from '../services/items-service';
import {Redirect} from "react-router-dom";
import FileComponent from '../components/FileComponent';

class CreateItem extends Component {
  state = {
    name:'',
    price: 0,
    img:'',
    description:'',
    category:[],
    year:'',
    redirect: false
  }


  getImage = (img) => {
    this.setState({
      img,
    })
  };


  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const {name, price, img, description, category, year} = this.state
    itemService.createItem({name, price, img, description, category, year})
    .then(()=>{
      this.setState({
        redirect:true
      })
  })
    .catch((error)=>
    console.log(error))
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='name' >name:</label>
          <input id='name' type='text' name='name' value={this.state.name} onChange={this.handleChange}/>
          <label htmlFor='price'>price:</label>
          <input id='price' type='number' name='price' value={this.state.price} onChange={this.handleChange} />
          <label htmlFor='description'>description:</label>
          <input id='description' type='text' name='description' value={this.state.description} onChange={this.handleChange}  />
          <label htmlFor='year'>year:</label>
          <input id='year' type='number' name='year' value={this.state.year}  onChange={this.handleChange}/>
          <FileComponent getImage={this.getImage}/>
          <button type='submit'>save</button>
        </form>
        { this.state.redirect ?  <Redirect to='/items' /> : null } 
        
      </div>
    )
  }
}

export default CreateItem;
