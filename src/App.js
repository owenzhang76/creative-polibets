import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component";
import registerForm from "./components/registerForm.component";
import homepage from './components/homepage.component';
// import signupPage from "./components/signup-page.component";
// import createPostPage from "./components/create-post-page.component";

function App() {
  return (
    <Router>
      <Navbar />
      <br />

      <Route path="/" exact component={registerForm}></Route>
      <Route path="/home" exact component={homepage}></Route>
      {/* <Route path="/login" exact component={loginPage}></Route>
      <Route path="/signup" exact component={signupPage}></Route>
      <Route path="/createPost" exact component={createPostPage}></Route> */}
    </Router>
  );
}

export default App;
