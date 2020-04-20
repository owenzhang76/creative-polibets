import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

export default class createPost extends Component {
    constructor(props) {
        super(props);
         
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeNameA = this.onChangeNameA.bind(this);
        this.onChangeOddsA = this.onChangeOddsA.bind(this);
        this.onChangeNameB = this.onChangeNameB.bind(this);
        this.onChangeOddsB = this.onChangeOddsB.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: this.props.userStuff.username,
            creator: this.props.userStuff.username,
            title: '',
            category: '',
            nameA: '',
            oddsA: '',
            nameB: '',
            oddsB: '',
            expiryDate: '',
        }
        
        //console.log(`username in createPost is ${this.state.username}`)
        // const currentUser = {
        //     username: this.props.username, 
        //     firstname: this.props.firstname,
        //     lastname: this.props.lastname, 
        //     email: this.props.email
        // }
    };

    componentDidMount() {
    }

    onChangeTitle(e) {
        this.setState({
            title: e.target.value
        })
    };

    onChangeCategory(e) {
        this.setState({
            category: e.target.value
        })
    };

    onChangeNameA(e) {
        this.setState({
            nameA: e.target.value
        })
    };

    onChangeOddsA(e) {
        this.setState({
            oddsA: e.target.value
        })
    };

    onChangeNameB(e) {
        this.setState({
            nameB: e.target.value
        })
    };

    onChangeOddsB(e) {
        this.setState({
            oddsB: e.target.value
        })
    };

    onChangeDate(e) {
        this.setState({
            expiryDate: e.target.value
        })
    };

    onSubmit(e) {
        e.preventDefault();
        console.log(this.state.creator);
        const post = {
            creator: this.props.userStuff.username,
            title: this.state.title,
            nameA: this.state.nameA,
            oddsA: this.state.oddsA,
            nameB: this.state.nameB,
            oddsB: this.state.oddsB,
            expiryDate: this.state.expiryDate,
        }
        console.log(post);
        axios.post('http://localhost:5000/posts/create', post)
            .then(res => {
                console.log(res);
                this.setState({
                    title: '',
                    nameA: '',
                    oddsA: '',
                    nameB: '',
                    oddsB: '',
                    expiryDate: '',
                });
                this.props.setUser(this.props.userStuff);
                this.props.history.push('/home');
            })
            .catch((err)=>console.log(err));

    }

    render() {
        //console.log(`username in createPost is ${this.state.creator}`);
        return (
            <form onSubmit={this.onSubmit}> 
                <h1>you are about to create a betting post, {this.state.creator}</h1>
                <label>Title:</label>
                <input id="title-submit" type="text" value={this.state.title} onChange={this.onChangeTitle} />
                <br />
                <label>Option A:</label>
                <input id="option-a-submit" type="text" value={this.state.nameA} onChange={this.onChangeNameA} />
                <br />
                <label>Odds for A:</label>
                <input id="odds-a-submit" type="text" value={this.state.oddsA} onChange={this.onChangeOddsA} />
                <br />
                <label>Option B:</label>
                <input id="option-b-submit" type="text" value={this.state.nameB} onChange={this.onChangeNameB} />
                <br />
                <label>Odds for B:</label>
                <input id="odds-b-submit" type="text" value={this.state.oddsB} onChange={this.onChangeOddsB} />
                <br />
                <label>Post expires on date:</label>
                <input id="date-submit" type="date" value={this.state.expiryDate} onChange={this.onChangeDate} />
                <br />
                <input id="create-post-submit" type="submit" />
            </form>
        );
    }
}