import React, { Component } from 'react'

export default class Databinding extends Component
{
    //thuộc tính
    
    name = 'bang';
    img = "http://picsum.photos/200/200"

    //phuonwg thức xây dụngư
    renderCard = () =>
    {
        let product = {
            id: 1,
            name: 'iphone',
            price: 1000,
            img: 'http://picsum.photos/id/10/200/200'
        }
        return <div className="card w-25">
            <img src={product.img}></img>
            <div classNAme="card-body">
                <p>{product.name}</p>
                <p>{product.price}</p>
                <button className="btn btn-success">Mua hàng</button>
            </div>
            
               </div>
    }
    render()
    {
        let tenHocVien = "Bằng";
        return (
            <div className="container">
                <div id="content">{tenHocVien}</div>
                <div id="content">{this.name}</div>
                <div className="card w-25">         
                    <img src={this.img}/>
                </div>
                {this.renderCard()}
            </div>
        )
    }
}
