
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
        {this.state.myItems.map((item) => {
          return (
            <div>
              <Link className='items-link' 
            to={{
              pathname: `/items/${item._id}/details`,
              state: {
                id: item._id
              }
            }} >
               <div key={item._id}>
                 <p>{item.name}</p>
                 <p>{item.price} $</p>
                <ul>
                  {item.img.map(pic => {
                   return(
                     <li>
                      <img src={pic} alt="some stuff to stop error" width='300px'/>
                    </li>              
                )
              })}
            </ul>
          </div>
              </Link>
              {!this.state.myItems.includes(item._id) ? 
              <button  onClick={() => {
                this.handleClick(item._id)
              }}>BUY</button> : null}

            </div>
          )
        })}
      </>
    )
  }
}


export default withAuth(ListItem);






