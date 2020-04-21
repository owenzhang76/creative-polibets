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
            posts: [],
        };
        
       
    };

    componentDidMount() {
        console.log("homepage did mount");
        console.log(this.state.username);
        console.log(this.props.userStuff);
        this.setState({
            username: this.props.userStuff.username
        })
        axios.get('http://localhost:5000/posts/')
            .then(res => {
                //console.log(res.data);
                res.data.forEach(post => {
                    this.setState({
                        posts: [...this.state.posts, post]
                    })
                });
                // this.setState({
                //     posts: res.data
                // })
                // res.data.forEach(post => {
                //     this.setState({
                //         posts: post.
                //     })
                //     // this.state.posts.push(post);
                // });
            })
            .then(() => {
                console.log(this.state.posts);
            })
            .catch((err)=>console.log(err));
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
        // const containerStyle = {
        //     border: solid 2px dark,

        // }
        return (
            
        <div>
            <h3>"And I say, thou shalt bet. Thou shalt bravely gamble all yer wee possessions!</h3>
            <p>{this.state.username}</p>
            {this.state.posts.map((post, index) => {
                console.log(post.title, post.nameA);
                return(
                    <div class="post-container" id={post.id}>
                        <div class="post-title-container">{post.title}</div>
                        <div class="post-choices-container">
                        <div id="post-a-container">
                            <div class="a">{post.nameA}</div>
                            <div >{post.oddsA}</div>  
                        </div>
                        <div id="post-b-container">
                            <div class="b">{post.nameB}</div>
                            <div class="annoying-bitch">{post.oddsB}</div>
                        </div>
                        </div>
                    </div>
                )
            })}
            <button id="go-to-createpost-button" onClick={this.goToCreatePost}>Create Post</button>
                {/* // console.log(
                //     `title: ${title},
                //      nameA: ${nameA},
                //      oddsA: ${oddsA},
                //      nameB: ${nameB},
                //      oddsB: ${oddsB},
                //     `
        
                // );
                // // console.log(title, nameA, oddsA, nameB, oddsB, date);
                // return(
                // <div>{title, nameA, oddsA, nameB, oddsB, date}</div>
                // ); */}
        </div>
        );
    };

}