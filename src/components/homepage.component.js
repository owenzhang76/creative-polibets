import React, { Component } from 'react';
import axios from 'axios';

export default class homepage extends Component {
    constructor(props) {
        super(props);
        this.goToCreatePost = this.goToCreatePost.bind(this);
        this.goToUserProfile = this.goToUserProfile.bind(this);
        this.state = {
            username: '',
            email: '',
            firstname: '',
            lastname: '',
        };
       
    };

    componentDidMount() {
        console.log("homepage did mount");
        console.log(this.state.username);
        console.log(this.props.userStuff);
        this.setState({
            username: this.props.userStuff.username,
            firstname: this.props.userStuff.firstname,
            lastname: this.props.userStuff.lastname,
            email: this.props.userStuff.email
        });
        // axios.get('http://localhost:5000/posts')
        //     .then(res => {
        //         console.log(res.data);
        //     })
    }
    
    goToCreatePost(e) {
        e.preventDefault();
        const userStuff = {
            username: this.state.username,
            email: this.state.email,
            firstname: this.state.firstname,
            lastname: this.state.lastname,
        }
        this.props.setUser(userStuff);
        this.props.history.push('/createpost')
    }

    goToUserProfile(e) {
        e.preventDefault();
        const userStuff = {
            username: this.state.username,
            email: this.state.email,
            firstname: this.state.firstname,
            lastname: this.state.lastname,
        }
        this.props.setUser(userStuff);
        this.props.history.push('/userprofile')
    }

    render() {
       
        console.log("rendering home page");
        // console.log(this.state.username);
        return (
        <div>
            <h3>"And I say, thou shalt bet. Thou shalt bravely gamble all yer wee possessions!</h3>
            <p>{this.state.username}</p>
            {/* <form onSubmit={this.goToCreatePost}> */}
                <button id="go-to-createpost-button" onClick={this.goToCreatePost}>Create Post</button>
                <button id="go-to-userprofile-button" onClick={this.goToUserProfile}>User Profile</button>
            {/* </form> */}
        </div>
        );
    };

}