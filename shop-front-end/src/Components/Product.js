import React, {Component} from "react";
import {Link} from "react-router-dom";

class Product extends Component {
    state = {
        qty:"",
        type:"",
    }

    changeQty = (e) => {
        this.setState({qty:e.target.value})
    }

    //determine product category from URL to pass to shopping cart
    componentDidMount() {
        let str = this.props.match.path;
        if(str.includes("yarn")) {
            this.setState({type: "yarn"})
        } else {
            this.setState({type: "needles"})
        }
    }

    
    render () {
      
        const {products, match, updateCart} = this.props;

        //find the product based on the id from one of two arrays
        const indProduct = ( products.yarn.find((product) => {
            return product.id === match.params.productID 
        })) || (products.needles.find((product) => {
            return product.id === match.params.productID 
        }))

        //div for each product variant
        const indSKU = indProduct.variant.map((sku, i) => {
            return (
                <div className="product__sku--holder" key={Number(sku.id) + i}>
                    <img src={sku.image} alt={sku.name}  className = "product__image--size"/>
                    <br />
                    <span>{sku.name}</span>
                    <br />
                    <label htmlFor="select">Qty </label>
                    <select onChange={this.changeQty} id="select" value={this.state.select}>
                        <option value = "0">0</option>
                        <option value = "1">1</option>
                        <option value = "2">2</option>
                        <option value = "3">3</option>
                        <option value = "4">4</option>
                        <option value = "5">5</option>
                    </select>
                    <button onClick={() => {updateCart(this.state.type, indProduct.title, sku.name, sku.id, indProduct.price, this.state.qty)}}>Add to Cart</button>
                </div>
            )
        })
        // div for holding all variants
        return (
            <div className="container product__itemDetail--box">
                <div className="itemDetail__close--button"><Link to={"/shop/" + this.state.type}>[X] Close</Link></div>
                <span>{indProduct.title}</span>
                <br />
                <span>Price: ${indProduct.price}</span>
                <br />
                <span>{indProduct.description}</span>
                <br />
                <span>{indSKU}</span>
                <br />

            </div>
        )
    }
}

export default Product;