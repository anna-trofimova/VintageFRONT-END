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
    return (
      <div>
        <h1>ITEM DETAILS PAGE</h1>
        {!this.state.loading && <p>{this.state.item.name}</p>}
      </div>
    )
  }
}
