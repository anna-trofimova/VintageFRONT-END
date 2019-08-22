import React, { Component } from 'react'
import itemService from '../services/items-service';

export default class ItemDetails extends Component {
  state = {
    item:{},
    loading:true
}

  componentDidMount(){
    const id= this.props.match.params.id;
    
    itemService.itemDetails(id)
    .then((item)=>{
      this.setState({
        item,
        loading:false
      })
    })
    .catch((error)=>console.log(error))
  }
  render() {
    const {item} = this.state
    return (
      <div className='details-page-container'>
        <h1>ITEM DETAILS PAGE</h1>
        {!this.state.loading && 
        <div className='details-page'>
        <img src={item.img} alt="clothes pic" width='300px'/> 
        <h3>{item.name}</h3>
        <p>{item.price}$</p>
        <p>{item.year}</p>
        <p>{item.description}</p>       
        </div>}
      </div>
    )
  }
}
