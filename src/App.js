import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";


import registerForm from "./components/registerForm.component";
import HomePage from './components/homepage.component';
import LoginForm from './components/loginForm.component';
import CreatePost from './components/createPost.component';
import UserProfile from './components/userprofile.component';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.setUser = this.setUser.bind(this);
    this.updateUser = this.updateUser.bind(this);
    this.state = {
      loggedIn: false,
      id: '',
      username: '',
      firstname: '',
      lastname: '',
      email: '',
    };
  };

  

updateUser(user) {
  console.log("inside updateUser function in App.js")
  console.log(user);

  this.setState({
    loggedIn: true,
    id: user['_id'],
    username: user['username'],
    firstname: user['firstname'],
    lastname: user['lastname'],
    email: user['email'],
  });

}

  setUser(user) {
    console.log("inside setUser function");
    console.log(user);

    this.setState({
      loggedIn: true,
      id: user['_id'],
      username: user['username'],
      firstname: user['firstname'],
      lastname: user['lastname'],
      email: user['email'],
    });

    console.log("inside setUser function testing state");
    console.log(this.state);

  }

  // getUser() {
  //   console.log("inside get user fuinction! (state)")
  //   console.log(this.state);
  //   const currentUser = {
  //     loggedIn: this.state.loggedIn,
  //     id: this.state.id,
  //     username: this.state.username,
  //     firstname: this.state.firstname,
  //     lastname: this.state.lastname,
  //     email: this.state.email,
  //   }
  //   console.log("inside get user, currentUser");
  //   console.log(currentUser);
  // }





  render () {
    console.log("inside render testing state");
    console.log(this.state);

    let userStuff = {
      loggedIn: this.state.loggedIn,
      id: this.state.id,
      username: this.state.username,
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email
    };

    console.log("####");
   console.log(userStuff);

      return (
        <Router>
         
          <br/>
          <Route path="/" exact component={registerForm}></Route>
          <Route path="/login" render={props => (<LoginForm {...props} setUser={this.setUser}/>)}></Route>
          <Route path="/home" render={props => (<HomePage {...props} setUser={this.setUser} userStuff={userStuff}/>)}></Route>
          <Route path="/createpost" render={props => (<CreatePost {...props} setUser={this.setUser} userStuff={userStuff}/>)}></Route>
          <Route path="/userprofile" render={props => (<UserProfile {...props} updateUser={this.updateUser} setUser={this.setUser} userStuff={userStuff}/>)}></Route>
        </Router>
      );
  }
}