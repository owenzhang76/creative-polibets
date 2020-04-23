import React, { Component } from 'react';
import axios from 'axios';

export default class PaymentButton extends Component {
    constructor(props) {
        super(props);


        this.state = {
            username: '',
            password: '',
            userId: '',
        }
    };

    componentDidMount() {
    }

    render() {
        return (
            <form action="/charge" method="post">
                
                <h4>Please Enter Payment Information</h4>

                <script
                src = "https://checkout.stripe.com/checkout.js"
                class = "stripe-button"
                data-key = "pk_test_62nysTnZ8K7rxfw2Im3z5lLU00rv4PTceF"
                data-amount = "30000"
                data-name = "e-tokens"
                data-description = "thx for getting some e-tokens fool!"
                data-locale = "auto"
                data-currency = "usd"></script>


                </form>
            
        );
    }
}