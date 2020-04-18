import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

export default class registerForm extends Component {
    constructor(props) {
        super(props);
        
        this.onChangeEventName = this.onChangeEventName.bind(this);
        this.onChangeEventDescription = this.onChangeEventDescription.bind(this);
        this.onChangeOptionA = this.onChangeOptionA.bind(this);
        this.onChangeOptionB = this.onChangeOptionB.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            eventname: '',
            eventdescription: '',
            optionA: '',
            optionB: '',
            }
    };

    componentDidMount() {
        // this.setState({
        //     username: "oz",
        //     email: "owenzhang76@gmail.com",
        //     firstname: "Owen",
        //     lastname: "Zhang"
        // })
    }

    onChangeEventName(e) {
        this.setState({
            eventname: e.target.value
        })
    };

    onChangeEventDescription(e) {
        this.setState({
            eventdescription: e.target.value
        })
    };
    
    onChangeOptionA(e) {
        this.setState({
            optionA: e.target.value
        })
    };

    onChangeOptionB(e) {
        this.setState({
            optionB: e.target.value
        })
    };

    onSubmit(e) {
        e.preventDefault();
        const event = {
            eventname: this.state.eventname,
            eventdescription: this.state.eventdescription,
            optionA: this.state.optionA,
            optionB: this.state.optionB,
            optionACurrency: 0,
            optionBCurrency: 0
        }
        console.log(event);

        axios.post('http://localhost:5000/posts/homepage', event)
        .then(res => console.log(res.data))
        .catch((err)=>console.log(err));
        
        this.setState({
            eventname: "",
            eventdescription: "",
            optionA: "",
            optionB: ""
        })

    }

    render() {
        return (
            <form onSubmit={this.onSubmit}> 
                <h1>Create Event</h1>
                <label>Event Name:</label>
                <input id="eventname-submit" type="text" value={this.state.eventname} onChange={this.onChangeEventName} />
                <br />
                <label>Event Description:</label>
                <input id="eventdescription-submit" type="text" value={this.state.eventdescription} onChange={this.onChangeEventDescription} />
                <br />
                <label>Option A:</label>
                <input id="A-submit" type="text" value={this.state.optionA} onChange={this.onChangeOptionA} />
                <br />
                <label>Option B:</label>
                <input id="B-submit" type="text" value={this.state.optionB} onChange={this.onChangeOptionB} />
                <input id="createpost-submit" type="submit" />
            </form>
        );
    }
}