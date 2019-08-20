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
    const {loading, purchaseList} = this.state;
    return (
      <div>
        <h1>My Cart</h1>
        {!loading && this.props.cart.map(cart=>{
          const {price, name, imageUrl} = cart.itemFound
          const {username, email, phone} = cart.owner
          console.log(cart.owner)
               return (
                 <>
                   <h3>Product's information</h3>
                   <img src={imageUrl} alt="no error"/>
                   <p>name: {name}</p>
                   <p>price: {price}</p>
                   <h3>Owner's contacts</h3>
                   <p>Name: {username}</p>
                   <p>Phone: {phone}</p>
                   <p>Email: {email}</p>
                 </>
               )
        })
      }
      </div>
    )
  }
}
export default withAuth(PurchaseList);
