import React, {Component} from "react";

class Cart extends Component {
    

    render () {

        let displayCart = this.props.cart.map((item) => {
            return (
                <tr key={item.sku}>
                    <td>{item.group.toUpperCase()}</td>
                    <td>{item.item}</td>
                    <td>{item.description}</td>
                    <td>{item.sku}</td>
                    <td>${item.price}</td>
                    <td>{item.qty}</td>
                    <td>${Number(item.qty) * Number(item.price)}</td>
                </tr>
            )
        })

        return (
            <div className="container">
                <table className = "table table-striped">
                    <tbody>
                        <tr>
                            <th>Category</th>
                            <th>Item</th>
                            <th>Description</th>
                            <th>SKU</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                        </tr>
                        {displayCart}
                        <tr>
                            <th colSpan="6">Subtotal: ${this.props.total}</th>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Cart
