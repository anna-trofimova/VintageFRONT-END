import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

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
import PurchaseList from './pages/PurchaseList.js';
 
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
              <AnonRoute path="/signup" exact component={Signup} />
              <AnonRoute path="/login" exact component={Login} />
              <PrivateRoute path="/myPage" exact component={MyPage} />
              <PrivateRoute path='/myPage/:id/edit' exact component={EditMyPage} />
              <PrivateRoute  path='/items' exact component={ItemsList} />
              <PrivateRoute path='/items/create' exact component={CreateItem} />
              <PrivateRoute path='/purchases' exact component={PurchaseList} />
              <Route component={Login} />
            </Switch>
          </div>
        </AuthProvider>
      </Router>
    );
  }
}

export default App;
