import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import withAuth from './withAuth.js';

class Navbar extends Component {
  render() {  
    if(this.props.isLoggedIn) {
      return (
        <nav className='nav'>
          <p onClick={this.props.logout}><img src="/img/icons8-logout-rounded-left-100.png" alt='logout-icon'/></p>
          <Link to='/myPage'><img src="/img/icons8-male-user-100.png" alt='user-icon'/></Link>
          <Link to='/items'><img src="/img/icons8-clothes-100.png" alt='clothes-icon'/></Link>
          <Link to='/purchases'><img src="/img/icons8-shopping-cart-100.png" alt='cart-icon'/></Link>
        </nav>
      )
    } else {
      return null
    }
  }
}

export default withAuth(Navbar);


