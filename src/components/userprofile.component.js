import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

export default class registerForm extends Component {
    constructor(props) {
        super(props);
        
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeFirstname = this.onChangeFirstname.bind(this);
        this.onChangeLastname = this.onChangeLastname.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: '',
            password: '',
            email: '',
            firstname: '',
            lastname: '',
        }
    };

    componentDidMount() {
            console.log("user profile did mount");
            console.log(this.props.userStuff);
            // this.setState({
            //     username: this.props.username,
            //     firstname: this.props.firstname,
            //     lastname: this.props.lastname,
            //     email: this.props.email
            // });

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

        const updateUser = {
            id: this.props.userStuff.id,
            newUsername: this.state.username,
            newPassword: this.state.password,
            newFirstname: this.state.firstname,
            newLastname: this.state.lastname,
            newEmail: this.state.email
        }
        console.log("fuck me in the pussy");
        console.log(updateUser);
        
        axios.post('http://localhost:5000/users/edituser', updateUser)
            .then(res => console.log(res.data))
            .catch((err)=>console.log(err));
        
            this.setState({
                username: '',
                password: '',
                firstname: '',
                lastname: '',
                email: ''
            });
    }



    render() {

      //  console.log(this.props.userStuff.username);

        return (
            
            <form onSubmit={this.onSubmit}>
                <h1>Current User Info</h1>
                <h3>Username: {this.props.userStuff.username}</h3>
                <h3>Email: {this.props.userStuff.email}</h3>
                <h3>Firstname: {this.props.userStuff.firstname}</h3>
                <h3>Lastname: {this.props.userStuff.lastname}</h3>
                <br>
                </br>

                <h1>Edit User Info</h1>

               
                <label>Username:</label>
                <input id="username-submit" type="text" value={this.state.username} onChange={this.onChangeUsername} />
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
                <input id="update-submit" type="submit" />
                </form>
            
        );
    }
}
