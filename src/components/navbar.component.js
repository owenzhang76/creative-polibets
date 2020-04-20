import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class Navbar extends Component {
    render() {
        return (
          <nav className="">
            <a href="http://localhost:3000/login">Login Page |</a>
            <a href="http://localhost:3000/">Register Page |</a>
            <a href="http://localhost:3000/home">Homepage |</a>
            <a href="http://localhost:3000/userprofile">User Profile |</a>
            <a href="http://localhost:3000/createpost">Create Post</a>
          </nav>
        );
    }
}