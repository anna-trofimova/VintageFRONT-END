
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import purchaseService from '../services/purchase-service';
import withAuth from '../components/withAuth';

class ListItem extends Component {
  state = {
    myItems: this.props.user.myItems
  }

  componentDidMount(){
    console.log(this.props.user);
  }

  handleClick = (id) => {
    purchaseService.buyItem(id)
    .then((data) => {
      this.props.addToCart(data)
      this.props.updateList();
      const newArray = [...this.state.myItems]
      newArray.push(data)
      this.setState({
        myItems: newArray
      })
    })
  }
   
  render() {
    const {item} = this.props
    return(
      <>
      <Link className='items-link' to={{
        pathname: `/items/${item._id}/details`,
        state: {
          id: item._id
        }
      }} 
        >
          <div key={item._id}>
          <img src={item.img} alt="clothes pic" width='300px'/>
          <p>{item.name}</p>
          <p>{item.price} $</p>
          </div>     
      </Link>
      {!this.state.myItems.includes(item._id)  ?
      <button onClick={() => {
        this.handleClick(item._id)
      }}>BUY</button> : null}

      </>
    )
  }
}


export default withAuth(ListItem);






