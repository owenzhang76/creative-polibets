import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

export default class loginForm extends Component {
    constructor(props) {
        super(props);
        
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: '',
            password: '',
        }
    };

    componentDidMount() {
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        })
    };

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        })
    };

    onSubmit(e) {
        e.preventDefault();
        const user = {
            username: this.state.username,
            password: this.state.password,
        }
        console.log(user);
        axios.post('http://localhost:5000/users/login', user)
            .then(res => {
                console.log(res.data);
                //console.log(this.props.setUser);
                // How can I pass the user object which is in res.data to my homepage component?
                console.log(this.props.setUser);
                console.log(this);
                this.props.setUser(res.data['username']);
                this.setState({
                    username: "",
                    password: "",
                });
                //this.props.setUser(res.data['username']);
                //window.location.href = "/home";
            })
            .catch((err) => console.log(err));
        
        

        

    //    <Link 
    //    to={{
    //        pathname: "/home",
    //        data: [{"user": user,}]
    //    }}
    //    > <Link>
        // window.location.href = "/home";

    }

    render() {
        return (
            <form onSubmit={this.onSubmit}> 
                <h1>Login to Polibets</h1>
                <label>Username:</label>
                <input id="username-submit" type="text" value={this.state.username} onChange={this.onChangeUsername} />
                <br />
                <label>Password:</label>
                <input id="password-submit" type="text" value={this.state.password} onChange={this.onChangePassword} />
                <br />
                <input id="login-submit" type="submit" />
            </form>
        );
    }
}