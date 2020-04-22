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
            userId: '',
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
        console.log("just testing how stuff works");
        axios.post('http://localhost:5000/users/login', user)
            .then(res => {
                console.log(res.data);
                this.setState({
                    userId: res.data["_id"]
                })
                console.log("setting userId in login submit button");
                console.log(this.state.userId);

                this.setState({
                    username: "",
                    password: "",
                });
                this.props.setUser(res.data);
                this.props.history.push('/home');
            })
            .catch((err) => console.log(err));
        
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