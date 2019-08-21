import React, { Component } from 'react'
import withAuth from '../components/withAuth';

class PurchaseList extends Component {
  state = {
    purchaseList:[],
    loading: true,
    myPurchase: [],
  }
  componentDidMount() {
    this.props.getMe()
    .then(() => {
      const cart = this.props.user
      this.setState({
        myPurchase: cart.myPurchase,
      })
    })
  }

  render() {
    const {myPurchase} = this.state;
    console.log(myPurchase)
    return (
      <div className='my-cart'>
        <h1>My Cart</h1>
        {myPurchase.length > 0 ? myPurchase.map(onePurchase=>{
          const {price, name, img} = onePurchase
          const {username, email, phone} = onePurchase.ownerId
               return (
                 <section key={onePurchase.itemId._id}>
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
      : null}
      </div>
    )
  }
}
export default withAuth(PurchaseList);
