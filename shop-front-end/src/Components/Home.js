import React, { Component } from 'react';
import '../App.css';
import Header from "./Header";
import Footer from "./Footer";

class Home extends Component {
    state = {
        name:""
    }
    storeKeys = (e) => {
        this.setState({name: e.target.value})
    }
    storeName = (e) => {
        localStorage.setItem("NAME", this.state.name)
    }

    redirectIf = () => {
        let name = localStorage.getItem("NAME")
        if (name) {
            window.location.replace("/shop")
        } else {
            return (
                <span>Not Logged In;</span>
            )
        }
    }
    render() {
        return (
            <div>
                <Header />
                {this.redirectIf()}
                <form onSubmit = {this.storeName}>
                    <label htmlFor="name">Please enter your name: </label>
                    <input type="text" id="name" onKeyUp={this.storeKeys} />
                    <button type="submit"> Submit </button>
                </form>
                <Footer />
            </div>
        )
    }
}

export default Home;