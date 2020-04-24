import React, { Component } from 'react';
import axios from 'axios';
import update from 'react-addons-update';

export default class homepage extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.goToCreatePost = this.goToCreatePost.bind(this);
        this.placeBet = this.placeBet.bind(this);
        this.calculateWidth = this.calculateWidth.bind(this);
        this.goToUserProfile = this.goToUserProfile.bind(this);
        //this.manualOverload = this.manualOverload.bind(this);

        this.state = {
            id: '',
            username: '',
            email: '',
            firstname: '',
            lastname: '',
            posts: [],
            wubucks: ''
        };
    };

    componentDidMount() {
        console.log("homepage did mount");
        this.setState({
            id: this.props.userStuff.id,
            username: this.props.userStuff.username,
            email: this.props.userStuff.email,
            firstname: this.props.userStuff.firstname,
            lastname: this.props.userStuff.lastname,
            wubucks: this.props.userStuff.wubucks,
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

    logout(e) {
        e.preventDefault();
        const userStuff = {
            id: '',
            username: '',
            email: '',
            firstname: '',
            lastname: '',
            wubucks: ''
        }
        this.props.history.push('/login');
    }
    
    goToCreatePost(e) {
        e.preventDefault();
        console.log("inside button for go to createpost")
        const userStuff = {
            id: this.props.userStuff.id,
            username: this.state.username,
            email: this.state.email,
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            wubucks: this.state.wubucks
        }
        console.log(userStuff);
        this.props.maintainUser(userStuff);
        console.log(this.props.userStuff);
        this.props.history.push('/createpost')
    }

    placeBet(e) {
        e.preventDefault();
        console.log('Inside placebet frontend');
        
        const bet = {
            personId: this.props.userStuff.id,
            postId: this.state.posts[e.target.name]['_id'],
            option: `numberOfBets${e.target.id}`,
            optionName: e.target.value,
            value: this.state.posts[e.target.name][`odds${e.target.id}`]
        }
        let option = `numberOfBets${e.target.id}`;
        console.log(bet);
        axios.post('http://localhost:5000/posts/placebet', bet)
            .then((res) => {
                console.log(res);
            })
            .then( () => {
                axios.get('http://localhost:5000/posts/')
                .then(res => {
                    console.log(this.props.userStuff.id);
                    this.setState({
                        posts: [],
                        id: this.props.userStuff.id,
                        username: this.props.userStuff.username,
                        email: this.props.userStuff.email,
                        firstname: this.props.userStuff.firstname,
                        lastname: this.props.userStuff.lastname,
                        wubucks: this.props.userStuff.wubucks,

                     });
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
            })
           
                
            
    }

    calculateWidth(a, b) {
        let oneSlice;
        if (a == 0 && b == 0) { 
            oneSlice = 0;
        } else {
            oneSlice = 600/(a+b);
        }
        return oneSlice;
    }

    goToUserProfile(e) {
        
        e.preventDefault();

        console.log("inside button for go to user pro")
        const userStuff = {
            id: this.state.id,
            username: this.state.username,
            email: this.state.email,
            firstname: this.state.firstname,
            lastname: this.state.lastname,
        }
        this.props.history.push('/userprofile');
    }

    render() {
        console.log("rendering home page");
        return (
            <div>
                 <p>logged in as {this.state.username}</p>
                 <p>you have {this.state.wubucks} wubucks</p>
                <h3 class="welcome-message">"And I say, thou shalt bet. Thou shalt bravely gamble away all yer wee possessions!"</h3>
                {this.state.posts.map((post, index) => {
                    let slice = this.calculateWidth(post.numberOfBetsA, post.numberOfBetsB);
                    let widthA = slice*post.numberOfBetsA;
                    let widthB = slice*post.numberOfBetsB;
                    if (widthA == 0 && widthB == 0) {
                        widthA = 300;
                        widthB = 300;
                    } else if (widthA == 0 && widthB != 0) {
                        widthA = 0;
                        widthB = 600;
                    } else if (widthA != 0 && widthB == 0){
                        widthA = 600;
                        widthB = 0;
                    } else {
                        console.log('yeet');
                    }
                    //console.log(widthA, widthB);
                    const aStyle = {
                        width: widthA
                    };
                    const bStyle = {
                        width: widthB
                    };
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
                                    <button class="button-a" id="A" value={post.nameA} name={index} onClick={this.placeBet}>Bet</button>
                                </div>
                                <div class="vs-bar-container"> 
                                    <div class="number-bets-container">
                                        <div class="number-bets-a">{post.numberOfBetsA}</div>
                                        <div class="number-bets-b">{post.numberOfBetsB}</div>
                                    </div>
                                    <div class="bar-outline"> 
                                        <div class="bar-a" style={aStyle}></div>
                                        <div class="bar-b" style={bStyle}></div>
                                    </div>
                                </div>
                                <div class="post-b-container" id="post-b-container">
                                    <div class="b">{post.nameB}</div>
                                    <div class="annoying-bitch">Odds: {post.oddsB > 0 ? `+${post.oddsB}` : post.oddsB}</div>
                                    <div class="bitch-container"> 
                                        <button class="button-b" id="B" value={post.nameB} name={index} onClick={this.placeBet}>Bet</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    );
                })}
                <button id="go-to-createpost-button" onClick={this.goToCreatePost}>Create Post</button>
                <button id="go-to-userprofile-button" onClick={this.goToUserProfile}>User Profile</button>
                <button id="logout-button" onClick={this.logout}>Logout</button>
            </div>
            );
    };
}
