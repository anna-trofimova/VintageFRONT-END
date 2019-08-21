import React, { Component } from 'react';
import authService from '../services/auth-service.js';

export const AuthContext = React.createContext();

class AuthProvider extends Component {
  state = {
    isLoggedIn: false,
    user: {},
    isLoading: true,
    shoppingCart: [],
  }

  userSignUp = (user) => {
    return authService.signup(user)
    .then((user) => {
      this.setState({
        isLoggedIn: true,
        user
      })
    })
  }

  userLogin = (user) => {
    return authService.login(user)
    .then((user) => {
      this.setState({
        isLoggedIn: true,
        user
      })
    }) 
  }

  userLogout = () => {
    return authService.logout()
    .then(() => {
      this.setState({
        isLoggedIn: false,
        user: {}
      })
    })
  }

  addToCart = (item) =>{
    const {shoppingCart} = this.state;
    this.setState({shoppingCart: [...shoppingCart, item]})
  }

  getMe = () => {
    return authService.me()
    .then(user => {
      this.setState({
        user,
        isLoggedIn: true,
        isLoading: false,
      })
    })
    .catch(() => {
      this.setState({
        isLoggedIn: false,
        user: {},
        isLoading: false,
      })
    })
  }
  
  componentDidMount() {
    this.getMe()
  }

  render() {
    const {user, isLoggedIn, isLoading} = this.state;
    return (
      <>
        {isLoading ? <p>Loading...</p> : (
            <AuthContext.Provider value={ 
              {
                user,
                isLoggedIn,
                login: this.userLogin,
                signup: this.userSignUp,
                logout: this.userLogout,
                cart: this.state.shoppingCart,
                addToCart: this.addToCart,
                getMe: this.getMe,
              }
            }>
              {this.props.children}
            </AuthContext.Provider>
          )}
      </>
    );
  }
}

export default AuthProvider;
