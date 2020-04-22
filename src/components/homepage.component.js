import React, { Component } from 'react';
import axios from 'axios';

export default class homepage extends Component {
    constructor(props) {
        super(props);
        this.goToCreatePost = this.goToCreatePost.bind(this);
        this.placeBet = this.placeBet.bind(this);
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
        this.setState({
            username: this.props.userStuff.username
        })
        axios.get('http://localhost:5000/posts/')
            .then(res => {
                res.data.forEach(post => {
                    this.setState({
                        posts: [...this.state.posts, post]
                    })
                });
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

    placeBet(e) {
        e.preventDefault();
        const bet = {
            person: this.state.username,
            option: e.target.value,
            value: this.state.posts[e.target.name][`odds${e.target.value}`]
        }
        console.log(bet);
        // axios.post('http://localhost:5000/posts/placebet')
    }

    render() {
        console.log("rendering home page");
        return (
            <div>
                <h3>"And I say, thou shalt bet. Thou shalt bravely gamble all yer wee possessions!</h3>
                <p>logged in as {this.state.username}</p>
                {this.state.posts.map((post, index) => {
                    console.log(post.title, post.nameA);
                    return(
                        <div class="post-container" id={post.id}>

                            <div class="post-title-container">
                                <div class="empty-div"></div>
                                <div class="title">{post.title}</div>
                                <div class="creator-container"> 
                                    <div class="creator">post by {post.creator}</div>
                                </div>
                            </div>

                            <div class="post-choices-container">
                                <div class="post-a-container" id="post-a-container">
                                    <div class="a">{post.nameA}</div>
                                    <div>Odds: {post.oddsA > 0 ? `+${post.oddsA}` : post.oddsA}</div>  
                                    <button class="button-a" id="button-a" value="A" name={index} onClick={this.placeBet}>Bet</button>
                                </div>
                                <div class="vs-bar-container"> 
                                    <div class="bar-outline"> 
                                        <div class="bar-a"></div>
                                        <div class="bar-b"></div>
                                    </div>
                                </div>
                                <div class="post-b-container" id="post-b-container">
                                    <div class="b">{post.nameB}</div>
                                    <div class="annoying-bitch">Odds: {post.oddsB > 0 ? `+${post.oddsB}` : post.oddsB}</div>
                                    <div class="bitch-container"> 
                                        <button class="button-b" id="button-b" value="B" name={index} onClick={this.placeBet}>Bet</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    );
                })}
                <button id="go-to-createpost-button" onClick={this.goToCreatePost}>Create Post</button>
            </div>
        );
    };

}