import React, { Component } from 'react'
import withAuth from '../components/withAuth';

class PurchaseList extends Component {
  state = {
    purchaseList:[],
    loading: true,
    cart: {
    myPurchase: [],
    }
  }
  componentDidMount() {
    this.props.getMe()
    .then(() => {
      const cart = this.props.user
      this.setState({cart:{
        myPurchase: cart.myPurchase,
      }})
    })
  }

  render() {
    const {cart} = this.state;
    // console.log(cart)
    return (
      <div className='my-cart'>
        <h1>My Cart</h1>
        {cart.myPurchase.length > 0 && cart.myPurchase.map(cart=>{
          const {price, name, img} = cart.itemId
          const {username, email, phone} = cart.ownerId
               return (
                 <section key={cart.itemId._id}>
                   <h3>Product's information</h3>
                   <img src={img} alt="no error" width='300px'/>
                   <p>Name: {name}</p>
                   <p>Price: {price}$</p>
                   <h3>Owner's contacts</h3>
                   <p>Name: {username}</p>
                   <p>Phone: {phone}</p>
                   <p>Email: {email}</p>
                 </section>
               )
        })
      }
      </div>
    )
  }
}
export default withAuth(PurchaseList);
