import React, { Component } from 'react';
import {Switch, Route, Link} from "react-router-dom";
import axios from "axios";
import '../App.css';
import Header from "./Header";
import Footer from "./Footer";
import ShopNeedles from "./shopNeedles";
import ShopYarn from "./shopYarn";
import Cart from "./Cart";


class Shop extends Component {
    state={
        shoppingCart: []
    }

    displayGreeting = () => {
        let name = localStorage.getItem("NAME")

        if (name) {
            return (
                <span>{"Greetings " + name + "!"}</span>
            )
        } else {
            return (
                window.location.replace("/")
            )
        }
    }

    //get shopping cart from server and add to front end state
    componentDidMount() {
        axios.get("http://localhost:8080/cart")
        .then((res) => {
            this.setState({shoppingCart:res.data})
        })        
    }
    updateCart = (type, title, name, productSKU, price, qty) => {
        axios.post("http://localhost:8080/cart",{
            group:type,
            item: title,
            description: name,
            sku:productSKU,
            price:price,
            qty:qty
        })
    }

    //get new cart from server and update front end state
    componentDidUpdate() {
        axios.get("http://localhost:8080/cart")
        .then((res) => {
            this.setState({shoppingCart:res.data})
        })  
    }

    
    render() {

        //get total price of items in cart
        let total = this.state.shoppingCart.reduce((acc, item) => {
            return Number(acc) + (Number(item.qty) * Number(item.price))
        },0)

        const {match, products} = this.props
        
        return(
            <div>
                <Header />
                {this.displayGreeting()}
                <br />
                <Link to={match.path + "/cart"}>Cart (${total})</Link>
                
                <Switch>
                    <Route path={match.path + "/needles"} render={({match}) => <ShopNeedles products = {products} updateCart = {this.updateCart} match = {match}/>} />
                    <Route path={match.path + "/yarn"} render={({match}) => <ShopYarn products= {products} updateCart = {this.updateCart} match = {match}/>} />
                    <Route path={match.path + "/cart"} render={()=> <Cart products = {products} cart = {this.state.shoppingCart} total = {total}/>}/>
                </Switch>
                <Footer />
            </div>
        )
    }
}

export default Shop;