import React, { Component } from 'react';
import itemService from '../services/items-service';
import {Redirect} from "react-router-dom";
import FileComponent from '../components/FileComponent';
import withAuth from '../components/withAuth';


class CreateItem extends Component {
  state = {
    name:'',
    price: 0,
    img:[],
    description:'',
    category:[],
    year:'',
    redirect: false,
    createdItem: {}
  }


  getImage = (url) => {
    const {img} = this.state
    img.push(url)
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
    .then((r)=>{
      console.log(r)
      this.setState({
        redirect: true,
      })
      this.props.user.myItems.push(r._id)
  })
    .catch((error)=>
    console.log(error))
  };

  render() {
    return (
      <div>

        <form onSubmit={this.handleSubmit} className='createItem'>
          <label htmlFor='name' >Name:</label>
          <input id='name' type='text' name='name' value={this.state.name} onChange={this.handleChange}/>
          <label htmlFor='price'>Price:</label>
          <input id='price' type='number' name='price' value={this.state.price} onChange={this.handleChange} />
          <label htmlFor='year'>Year:</label>
          <input id='year' type='number' name='year' value={this.state.year}  onChange={this.handleChange}/>
          <label htmlFor='description'>Description:</label>
          <textarea id='description' rows='4' name='description' value={`${this.state.description}`} onChange={this.handleChange}  />
          
          <FileComponent getImage={this.getImage} />
          <button type='submit'>save</button>
        </form>
        { this.state.redirect ?  <Redirect to='/items' /> : null }       
      </div>
    )
  }
}

export default withAuth(CreateItem);
