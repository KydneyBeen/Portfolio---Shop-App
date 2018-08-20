import React, { Component } from 'react';
import {Route, Switch} from "react-router-dom";
import axios from "axios";
import '../App.css';
import Home from "./Home";
import Shop from "./Shop";
import About from "./About";
import Contact from "./Contact";
import Product from "./Product";



class App extends Component {
  state = {
    products: null,
    loading: true
  }
  componentDidMount () {
      axios.get("http://localhost:8080")
      .then((response) => {
        this.setState({
          products:response.data,
          loading:false})
      })
  }
  render() {
    return (
      <div className="App">
      {this.state.loading 
      ? <h1>loading</h1>
      :  <Switch>
          <Route path="/" exact component = {Home} />
          <Route path="/shop" render={({match}) => <Shop products = {this.state.products} match = {match}/>} />
          <Route path="/about" component = {About} />
          <Route path="/contact" component = {Contact} />

          <Route path="shop/yarn/:itemId" render={({match})=> <Product products={this.state.products} match={match} />} />

        </Switch>
      }
      </div>
    );
  }
}

export default App;
