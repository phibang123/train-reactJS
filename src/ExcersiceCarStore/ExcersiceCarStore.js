import React, { Component } from 'react'

import Modal from './Modal'
import ProductList from './ProductList'

export default class ExcersiceCarStore extends Component
{
    products = [
        { id: 1, name: 'black car', img: './img/black-car.jpg', price: 1000 },
        { id: 2, name: 'red car', img: './img/red-car.jpg', price: 2000 },
        { id: 3, name: 'silver car', img: './img/silver-car.jpg', price: 3000 },
        { id: 4, name: 'Steel car', img: './img/steel-car.jpg', price: 4000 }
    ];
    state = {
        ProductDetail: { id: 1, name: 'black car', img: './img/black-car.jpg', price: 1000 }
    }

    //setstates định nghĩa tại component chứa states
    viewDetail = (itemclick) =>
    {
        console.log(itemclick);
        this.setState({ProductDetail: itemclick}) 
    }

    render() {
        return (
            <div className="container">
                <h3 className="text-center">Bán Xe</h3>
                <ProductList productData={this.products} viewDetail={ this.viewDetail}></ProductList>
                <Modal  ProductDetail={this.state.ProductDetail}></Modal>

            </div>
        )
    }
}
