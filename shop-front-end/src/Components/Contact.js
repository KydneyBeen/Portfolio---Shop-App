import React, { Component } from 'react';
import axios from "axios";
import '../App.css';
import Header from "./Header";
import Footer from "./Footer";

const backEndServer = "http://localhost:8080"

class Contact extends Component {
    state = {
        name: "",
        email: "",
        message: ""
    }

    storeName = (e) => {
        this.setState({name:e.target.value})
    }

    storeEmail = (e) => {
        this.setState({email:e.target.value})
    }
    
    storeMessage = (e) => {
        this.setState({message:e.target.value})
    }

    submitMessage = () => {
        axios.post(backEndServer + "/contact", {
            name: this.state.name,
            email: this.state.email,
            message: this.state.message
        })
    }
    render () {
        return (
            <div className = "container">
                <Header />
                <br />
                <form onSubmit={this.submitMessage}>
                    <label htmlFor="name" className="col-xs-10 col-sm-10 col-md-4 col-lg-3">Name: </label>
                    <input 
                        type="text" 
                        id="name" 
                        className="col-xs-10 col-sm-10 col-md-4 col-lg-3"
                        onKeyUp={this.storeName}
                    />
                    <br />
                    <label htmlFor="email" className="col-xs-10 col-sm-10 col-md-4 col-lg-3">Email: </label>
                    <input 
                        type="email" 
                        id="email" 
                        className="col-xs-10 col-sm-10 col-md-4 col-lg-3" 
                        onKeyUp={this.storeEmail}
                    />
                    <br />
                    <label htmlFor="body" className="col-xs-10 col-sm-10 col-md-4 col-lg-3">Message: </label>
                    <textarea 
                        id="body" 
                        className="col-xs-10 col-sm-10 col-md-4 col-lg-3" 
                        onKeyUp={this.storeMessage}
                    />
                    <br />
                    <button type="submit"
                        className="btn"
                    >Submit</button>
                </form>
                <Footer />
            </div>
        )
    }
}

export default Contact;