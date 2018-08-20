import React, { Component } from 'react';
import {Link} from "react-router-dom";
import '../App.css';

class Footer extends Component {
    render () {
        return (
            <div className = "container">
                <hr />
                <div>
                    <Link to="../">Home</Link>
                    <br />
                    <Link to="./Contact">Contact</Link>
                    <br />
                    <Link to="./About">About</Link>
                </div>
            </div>
        )
    }
}

export default Footer;