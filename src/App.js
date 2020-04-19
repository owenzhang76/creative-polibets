import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component";
import registerForm from "./components/registerForm.component";
import HomePage from './components/homepage.component';
import LoginForm from './components/loginForm.component';
// import signupPage from "./components/signup-page.component";
// import createPostPage from "./components/create-post-page.component";
export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.setUser = this.setUser.bind(this);
    this.state = {
      loggedIn: false,
      username: "",
    };
  };

  setUser(user) {
    console.log("inside setUser function");
    console.log(user);
    this.setState({
      loggedIn: true,
      username: user
    });
    //window.location.href='/home';
  }

  render () {
    if (this.state.loggedIn) {
      console.log('logged in');
      return (
        <Router>
        {/* <Link to="/home">home</Link> */}
        {/* <Switch> */}
        {/* <Route path="/home" exact component={HomePage}></Route> */}
          <Route path="/home">
            <HomePage />
          </Route>
        {/* </Switch> */}
        </Router>
        // <HomePage />
        // <Router>
        //   <Navbar/>
        //   <br/>
          
        //   {/* <Route path="/home" exact component={homepage}></Route> */}
        //   <Route path="/home" render={props => (<HomePage/>)}> </Route>
        // </Router>
      );
    } else {
      return (
        <Router>
          <Navbar/>
          <br/>
          <Route path="/" exact component={registerForm}></Route>
          {/* <Route path="/home" exact component={homepage}></Route> */}
          <Route path="/login" render={props => (<LoginForm {...props} setUser={this.setUser}/>)}></Route>
          {/* <Route path="/login" exact component={loginForm} setUser={setUser} ></Route> */}
          {/* <Route
            path="/login"
            render={(props) => <homepage {...props} username={loggedIn} />}
          > */}
        </Router>
      );
    }
    //const setUser = (userData) => console.log(userData);
    
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
