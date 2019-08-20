
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import purchaseService from '../services/purchase-service';
import withAuth from '../components/withAuth';

class ListItem extends Component {

  handleChange = (id) => {
    purchaseService.buyItem(id)
    .then((data) => {
      this.props.addToCart(data)
    })
  }
  render(){
    const {item} = this.props;
    console.log(this.props)
    return (
      <>
      <Link to={{
          pathname: `/items/${item._id}`,
          state: {
            id: item._id
          }
        }}
      >
        <div key={item._id}>
         <p>{item.name}</p>
         <p>{item.price}</p>
         <p>{item.img}</p>
         
        </div>
        
      </Link>
      <button onClick={() => {
        this.handleChange(item._id)
        }}>BUY</button>
      </>
    )
  }
}

export default withAuth(ListItem);






