import React, { Component } from 'react'
import purchaseService from '../services/purchase-service';
import withAuth from '../components/withAuth';

class PurchaseList extends Component {
  state = {
    purchaseList:[],
    loading: true,
    cart: []
  }

  componentDidMount(){
    console.log(this.props.cart)
    purchaseService.myPurchase()
      .then((purchaseList)=>{
        this.setState({
          purchaseList,
          loading: false,
          cart: [this.props.cart] 
        })
    })
      .catch((error)=>console.log(error))
  }
//onClick that takes the data from item and sets the state of item and showItem

//another method to take you back to all items
  render() {
    console.log("here")
    const {loading, purchaseList, cart} = this.state;
    return (
      <div>
        <h1>My Cart</h1>
        {!loading && this.props.cart.map(cart=>{
          const {price} = cart.itemFound
          console.log(cart.owner)
               return <p>price: {price}</p> 
        })
      }
        <h1>ITEMLS LIST</h1>
        {!loading && purchaseList.map(item => 
        <p>{item.price}</p>)}
      </div>
    )
  }
}
export default withAuth(PurchaseList);
