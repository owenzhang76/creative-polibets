import React, { Component } from 'react';
import axios from 'axios';

export default class homepage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            firstname: '',
            lastname: '',
        };
    };

    componentDidMount() {
        this.setState({
            username: 'hi',
        });
    }
    
    render() {
        console.log("rendering home page");
        console.log(this.state.username);
        return (
        <div>
            This is the homepage
            {/* {res.data} */}
        </div>
        );
    };

}