import React, { Component } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import Navbar from './components/Navbar.js';
import PrivateRoute from './components/PrivateRoute.js';
import AnonRoute from './components/AnonRoute.js';

// import Private from './pages/Private';
import Signup from './pages/Signup';
import Login from './pages/Login';
import MyPage from './pages/MyPage';
import EditMyPage from './components/EditMyPage';
import ItemsList from './pages/ItemsList';
import CreateItem from './pages/CreateItem';
import ItemDetails from './pages/ItemDetails';

import AuthProvider from './contexts/auth-context.js';

import firebase from "firebase";
 
const config = {
  apiKey: "AIzaSyA2cmWD0gA6ZGrioN2btvaudloMA9l0UJY",
  authDomain: "vintage-second-hand-front.firebaseapp.com",
  storageBucket: "gs://vintage-second-hand-front.appspot.com"
};
firebase.initializeApp(config);

// import 'milligram';

class App extends Component {
  render () {
    return (
      <Router>
        <AuthProvider>
      <Navbar />
          <div className="container">
            <Switch>
              <AnonRoute path="/signup" component={Signup} />
              <AnonRoute path="/login" component={Login} />
              <PrivateRoute exact path="/myPage" component={MyPage} />
              <PrivateRoute path='/myPage/:id/edit' component={EditMyPage} />
              <PrivateRoute exact path='/items' component={ItemsList} />
              <PrivateRoute path='/items/:id' component={ItemDetails} />
              <PrivateRoute path='/items/create' component={CreateItem} />
            </Switch>
          </div>
        </AuthProvider>
      </Router>
    );
  }
}

export default App;
