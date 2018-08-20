import React, { Component } from 'react';
import {Link} from "react-router-dom";
import '../App.css';

class Header extends Component {

    render(){
        return (
            <div className="container">
                <div className="header__title--background header__title--position">
                    <div className="header__title--style">
                    <Link to="/"> "Ewe Know" </Link>
                    </div>
                </div>
                <nav className="navbar navbar-expand-md navbar-light" style={{backgroundColor: "lightgrey"}}>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/shop/yarn">Yarn</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/shop/needles">Needles</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/contact">Contact</a>
                        </li>
                        </ul>
                    </div>
                    </nav>
            </div>
        )
    }
}

export default Header;