import React, { Component } from 'react'

import Footer from './Footer'
import ProductDemo from './ProductDemo'

export default class HomeLayout extends Component {

    arrProduct = [
        {id: 1, name: 'I phone', price: 1000},
        {id: 2, name: 'I Pad', price: 2000},
        {id: 3, name: 'I Max', price: 3000}
    ]
    render() {
        return (
            <div className="container">
                <h3>Home playout    </h3>
                <input type="text"></input>
                <Footer bgColor="black" content="Lợi" />
                <Footer bgColor="Green" content="Bằng"/>
                <Footer bgColor="Yellow"  content="Đứa Tóc Dài"/>
                <Footer bgColor="red" content="Đứa Tóc Ngắn"/>
                <hr></hr>
                <h3>Product</h3>
                <div className="row">
                    {/* <div className="col-4">
                        <ProductDemo productName="iphone" price="2150000"/>
                    </div>
                    <div className="col-4">
                        <ProductDemo productName="Xiaomi" price="210"/>
                    </div>
                    <div className="col-4">
                        <ProductDemo productName="Sony" price="2123130000"/>
                    </div> */}
                    <div className="col-4">
                        <ProductDemo product={this.arrProduct[0]}/>
                    </div>
                     <div className="col-4">
                        <ProductDemo product={this.arrProduct[1]}/>
                    </div>
                     <div className="col-4">
                        <ProductDemo product={this.arrProduct[2]}/>
                    </div>
                    
                </div>
            </div>
        )
    }
}
