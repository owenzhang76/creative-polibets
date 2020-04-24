import React, { Component } from 'react';
import axios from 'axios';
import StripeCheckout from "react-stripe-checkout";



export default class Checkout extends Component {
    constructor(props) {
        super(props);

        

        this.state = {
            username: '',
            password: '',
            userId: '',
        }
    };

    componentDidMount() {
        this.setState({
            username: this.props.userStuff.username,
            
        }) 

        
    }

    

    render() {

        let product = {
            name: "React from FB",
            price: 10,
            productBy: "facebook"
          }

          const makePayment = async token => {
             
            const body = {
              token,
              product
            }
            
            console.log(body);
            
           try {
                  let res = await axios.post('http://localhost:5000/users/payment', body);
                  console.log("RESPONSE", res);
                  const { status } = res;
                  console.log("STATUS", status);
                    if(status == 200) {
                        console.log("inside if");
                        try {
                            let res = await axios.post('http://localhost:5000/users/login', body);
                            console.log(res);
                        }                        
                        catch (error) {
                            return console.log(error);
                        }
                    }

              }
              catch (error) {
                  return console.log(error);
              }
          }


        return (
            <div>
            <StripeCheckout 
        stripeKey="pk_test_62nysTnZ8K7rxfw2Im3z5lLU00rv4PTceF"
        token={makePayment}
        name="Buy my shit">
          <button className="btn-large pink" >
          Suck me off, please just suck me off: Only {product.price} dollars</button>

        

        </StripeCheckout>
       
            {/* <form action="/charge" method="post">
                
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


                </form> */}
                </div>
        );
    }
}