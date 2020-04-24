
import React, { Component } from 'react';
import { CardElement, injectStripe, ReactStripeElements } from "react-stripe-elements";

// var stripe = Stripe('pk_test_62nysTnZ8K7rxfw2Im3z5lLU00rv4PTceF');
// var elements = stripe.elements();


export default class Form extends Component {

    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeAmount = this.onChangeAmount.bind(this);

        this.state = {
            name : "",
            amount : ""
        }
    }

    onChangeName(e) {
        this.setState({
           name: e.target.value
        })
    };

    onChangeAmount(e) {
        this.setState({
            amount: e.target.value
        })
    };

    onSubmit(e) {
        e.preventDefault();
        
        console.log("thanks for paying idiot");
        console.log(this.state);

        
        
            
        


        // axios.post('http://localhost:5000/users/register', user)
        //     .then(res => {
        //         console.log(res.data);
        //         this.props.history.push('/login');

        //     })
        //     .catch((err)=>console.log(err));
        
        // this.setState({
        //     name: "",
        //     amount: ""
        // })

    }







    render() {
        return (
            <main className="container">
                <form 
                className="form-group mt-3 border border-primary rounded shadow-lg"
                onSubmit={this.onSubmit}>
                <label>Name:</label>
                <input id="name-submit" type="text" value={this.state.name} onChange={this.onChangeName} />
                <br />
                <label>Amount:</label>
                <input id="amount-submit" type="text" value={this.state.amount} onChange={this.onChangeAmount} />
                <br />
                <label>CC Number -- Exp. Date -- CVC</label>
                <CardElement classname="p-2 border border-dark"/>
                <button classname="btn btn-primary border border-dark">Charge It!</button>
                </form>
            </main>
        )
       
    }
}

//  export default injectStripe(Form);