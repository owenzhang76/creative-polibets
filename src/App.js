import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component";
import registerForm from "./components/registerForm.component";
import homepage from './components/homepage.component';
import loginForm from './components/loginForm.component';
// import signupPage from "./components/signup-page.component";
// import createPostPage from "./components/create-post-page.component";
export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
    };
  };
  
  renderHome(user) {
    return (
      <homepage user={user} />


    );
  } 

  setUser(user) {
    console.log("inside setUser function");
    console.log(user);
  }

  render () {
    return (
      <Router>
        <Navbar />
        <br />
        <Route path="/" exact component={registerForm}></Route>
        <Route path="/home" exact component={homepage}></Route>
        <Route path="/login" exact component={loginForm} setUser={this.setUser} ></Route>
        {/* <Route path="/login" exact component={loginPage}></Route>
        <Route path="/signup" exact component={signupPage}></Route>
        <Route path="/createPost" exact component={createPostPage}></Route> */}
      </Router>
    );
  }
}


// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <br />

//       <Route path="/" exact component={registerForm}></Route>
//       <Route path="/home" exact component={homepage}></Route>
//       <Route path="login" exact component={loginForm}></Route>
//       {/* <Route path="/login" exact component={loginPage}></Route>
//       <Route path="/signup" exact component={signupPage}></Route>
//       <Route path="/createPost" exact component={createPostPage}></Route> */}
//     </Router>
//   );
// }

// export default App;
