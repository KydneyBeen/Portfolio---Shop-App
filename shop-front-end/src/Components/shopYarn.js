import React, { Component } from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import '../App.css';
import Product from "./Product"



class Yarn extends Component {
    
    render () {
        const { products, match, updateCart } = this.props;
        
        //each yarn product
        let yarnItems = products.yarn.map((yarnItem) => {
           return ( 
            <div key = {yarnItem.id} className = "product__listing--display col-xs-10 col-sm-5 col-md-5 col-lg-3">
                <Link to={match.path + "/" + yarnItem.id}>
                    <img 
                        src={yarnItem.mainImage} 
                        className = "product__image--size" 
                        alt={yarnItem.title}
                    />
                </Link>
                <br />
                <Link to={match.path + "/" + yarnItem.id}>
                    <span>{yarnItem.title}</span>
                </Link>
                <br />
                <span>Fibre : {yarnItem.fibre}</span>
                <br />
                <span>Weight : {yarnItem.weight}</span>
                <br />
                <span><b>Price: ${yarnItem.price}</b></span>
                
            </div>
           )
        })

        return (
            <div className="container">
                <Switch>
                    <Route path={match.path + "/:productID"} render={({match}) => <Product match = {match} updateCart = {updateCart} products = {products} />} />
                </Switch>
                {yarnItems}
            </div>
        )
    }
}

export default Yarn