import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class Navbar extends Component {
    render() {
        return (
          <nav className="tempClass">
              {/* <form onSubmit={this.onSubmit}> 
                <h1>Create Betting Post</h1>
                <label>Name Your Post:</label>
                <input id="postname-submit" type="text" value={this.state.postname} onChange={this.onChangePostname} />
                <br />
            </form>           */}
          </nav>
        );
    }
}