
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import purchaseService from '../services/purchase-service';
import withAuth from '../components/withAuth';

class ListItem extends Component {

  handleClick = (id) => {
    purchaseService.buyItem(id)
    .then((data) => {
      this.props.addToCart(data)
      this.props.updateList();
    })
  }
  render(){
    const {item} = this.props;
    console.log(this.props)
    return (
      <>
      <Link to={{
          pathname: `/items/${item._id}/details`,
          state: {
            id: item._id
          }
        }}
      >
        <div key={item._id}>
         <p>{item.name}</p>
         <p>{item.price}</p>
         <img src={item.img} alt="some stuff to stop error" width='50px'/>
         
        </div>
        
      </Link>
      <button onClick={() => {
        this.handleClick(item._id)
        }}>BUY</button>
      </>
    )
  }
}

export default withAuth(ListItem);






