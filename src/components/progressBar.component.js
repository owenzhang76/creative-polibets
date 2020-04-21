import React, { Component } from 'react';
import axios from 'axios';

export default class progressBar extends Component {
    constructor(props) {
        super(props);
        
        // this.onChangeUsername = this.onChangeUsername.bind(this);
        // this.onChangePassword = this.onChangePassword.bind(this);
        // this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            numberA: '',
            numberB: '',
        }
    };

    componentDidMount() {
    }

    render() {
        return (
            <div class="vs-bar-container"> 
                <div class="bar-outline"> 
                    <div class="bar-a"></div>
                    <div class="bar-b"></div>
                </div>
            </div>
        );
    }
}


