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
        // this.setState({

        // });
    }
    
    render() {
        return (
        <div>
            This is the homepage
        </div>
        );
    };

}