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
      <div>
        <h2>ITEM DETAILS PAGE</h2>
        {!this.state.loading && 
        <>
        <p>{item.name}</p>
        <img src={item.img} alt="some stuff to stop error" width='50px'/>
        </>}
      </div>
    )
  }
}
