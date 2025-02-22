import React, { Component } from 'react';
import itemService from '../services/items-service';
import ListItem from "../components/ListItem"


class ItemsList extends Component {
  state = {
    listOfItems:[],
    loading: true,
    item: {},
    showItem:false
  }

  componentDidMount(){
    this.getAllItems();
  }

  getAllItems = () => {
    itemService.items()
      .then((listOfItems)=>{
        this.setState({
          listOfItems,
          loading: false,
        })
    })
      .catch((error)=>console.log(error))
  }

//onClick that takes the data from item and sets the state of item and showItem

//another method to take you back to all items
  render() {
    const {loading, listOfItems} = this.state;
    return (
      <div className='itemsPage'>
        <h1>ITEMS LIST</h1>
        {!loading && listOfItems.map(item => {

          if (!item.isBought) {
            return (<ListItem key={item._id} updateList={this.getAllItems} item={item}/>)
          }
        })
        }
      </div>
    )
  }
}

export default ItemsList;
