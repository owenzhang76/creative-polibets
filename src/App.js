import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component";
import homePage from "./components/homePage.component";
// import signupPage from "./components/signup-page.component";
// import createPostPage from "./components/create-post-page.component";

function App() {
  return (
    <Router>
      <Navbar />
      <br />

      <Route path="/" exact component={homePage}></Route>
      {/* <Route path="/login" exact component={loginPage}></Route>
      <Route path="/signup" exact component={signupPage}></Route>
      <Route path="/createPost" exact component={createPostPage}></Route> */}
    </Router>
  );
}

export default App;
