import React, { Component } from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import '../App.css';
import Product from "./Product"

class Needles extends Component {
    render () {
        const { products, match, updateCart } = this.props;
        
        //each needle product
        let needleItems = products.needles.map((needleItem) => {
           return ( 
            <div key = {needleItem.id} className = "product__listing--display col-xs-10 col-sm-5 col-md-5 col-lg-3">
                <Link to={match.path + "/" + needleItem.id}>
                    <img 
                        src={needleItem.mainImage} 
                        className = "product__image--size" 
                        alt={needleItem.title}
                    />
                </Link>
                <br />
                <Link to={match.path + "/" + needleItem.id}>
                    <span>{needleItem.title}</span>
                </Link>
                <br />
                <span>Material : {needleItem.material}</span>
                <br />
                <span><b>Price: ${needleItem.price}</b></span>
                
            </div>
           )
        })

        return (
            <div className="container">
                <Switch>
                    <Route path={match.path + "/:productID"} render={({match}) => <Product match = {match} updateCart = {updateCart} products = {products} />} />
                </Switch>
                {needleItems}
            </div>
        )
    }
}

export default Needles;