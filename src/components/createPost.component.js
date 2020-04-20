import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

export default class createPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            creator: '',
            title: '',
            category: '',
            nameA: '',
            oddsA: '',
            nameB: '',
            oddsB: '',
            expiryDate: '',
        }
    };

    componentDidMount() {
        this.setState({
            creator: this.props.username,
        })
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
        const post = {
            creator: this.state.username,
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
                console.log(res.data);
                this.setState({
                    title: '',
                    nameA: '',
                    oddsA: '',
                    nameB: '',
                    oddsB: '',
                    expiryDate: '',
                });
                this.props.history.push('/home');
            })
            .catch((err)=>console.log(err));

    }

    render() {
        return (
            <form onSubmit={this.onSubmit}> 
                <h1>Create a Betting Post!</h1>
                <label>Title:</label>
                <input id="title-submit" type="text" value={this.state.title} onChange={this.onChangeUsername} />
                <br />
                <label>Option A:</label>
                <input id="option-a-submit" type="text" value={this.state.nameA} onChange={this.onChangeUsername} />
                <br />
                <label>Odds for A:</label>
                <input id="odds-a-submit" type="text" value={this.state.oddsA} onChange={this.onChangeEmail} />
                <br />
                <label>Option B:</label>
                <input id="option-b-submit" type="text" value={this.state.nameB} onChange={this.onChangeUsername} />
                <br />
                <label>Odds for B:</label>
                <input id="odds-b-submit" type="text" value={this.state.oddsB} onChange={this.onChangeEmail} />
                <br />
                <label>Post expires on date:</label>
                <input id="date-submit" type="date" value={this.state.expiryDate} onChange={this.onChangeFirstname} />
                <br />
                <input id="create-post-submit" type="submit" />
            </form>
        );
    }
}