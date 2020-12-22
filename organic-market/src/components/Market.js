import React, { Component } from 'react'

class Products extends Component {

    state = {
        products: [],
        inventory: null
    }

    render() {
        return (
            <div className="container">
                <h4 class="center">ProductList and inventory</h4>
            </div>
        )
    }
}

export default Products;