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
        console.log("homepage did mount");
        this.setState({
            username: this.props.username,
            firstname: this.props.firstname,
            lastname: this.props.lastname,
            email: this.props.email
        });
        // axios.get('http://localhost:5000/posts')
        //     .then(res => {
        //         console.log(res.data);
        //     })
    }
    
    render() {
        console.log("rendering home page");
        // console.log(this.state.username);
        return (
        <div>
            <h3>"And I say, thou shalt bet. Thou shalt bravely gamble all yer wee possessions!</h3>
            <p>{this.state.username}</p>
            {/* {res.data} */}
        </div>
        );
    };

}