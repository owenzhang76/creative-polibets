import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

export default class registerForm extends Component {
    constructor(props) {
        super(props);
        
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeFirstname = this.onChangeFirstname.bind(this);
        this.onChangeLastname = this.onChangeLastname.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: '',
            email: '',
            firstname: '',
            lastname: '',
        }
    };

    componentDidMount() {
            console.log("user profile did mount");
            this.setState({
                username: this.props.username,
                firstname: this.props.firstname,
                lastname: this.props.lastname,
                email: this.props.email
            });

        }

    

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        })
    };
    
    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        })
    };

    onChangeFirstname(e) {
        this.setState({
            firstname: e.target.value
        })
    };

    onChangeLastname(e) {
        this.setState({
            lastname: e.target.value
        })
    };

    onSubmit(e) {
        e.preventDefault();
        const user = {
            username: this.props.username,
            firstname: this.props.firstname,
            lastname: this.props.lastname,
            email: this.props.email
        }
        console.log(user);
        axios.post('http://localhost:5000/users/register', user)
            .then(res => console.log(res.data))
            .catch((err)=>console.log(err));
        
            this.setState({
                username: this.props.username,
                firstname: this.props.firstname,
                lastname: this.props.lastname,
                email: this.props.email
            });
    }


    render() {
        return (
            <div>
                <form>
                <h1>Edit Your User Info</h1>
                <label>Username:</label>
                <input id="username-submit" type="text" value={this.props.userStuff.username} onChange={this.onChangeUsername} />
                <br />
                <label>Password:</label>
                <input id="password-submit" type="text" value={this.state.password} onChange={this.onChangePassword} />
                <br />
                <label>Email:</label>
                <input id="email-submit" type="text" value={this.state.email} onChange={this.onChangeEmail} />
                <br />
                <label>Firstname:</label>
                <input id="firstname-submit" type="text" value={this.state.firstname} onChange={this.onChangeFirstname} />
                <br />
                <label>Lastname:</label>
                <input id="lastname-submit" type="text" value={this.state.lastname} onChange={this.onChangeLastname} />
                <br />
                <input id="login-submit" type="submit" />
                </form>
            </div>
        );
    }
}
