import React, { Component } from 'react'

import ProductItemCart from './ProductItemCart'

export default class ProductCart extends Component
{
    // renderSanPham = () =>
    // {
    //     let {mangSanPham} = this.props
    // }
    render()
    {
        let {mangSanPham,themGioHang} = this.props
        return (
            
            <div className="row">
                {mangSanPham.map((sanPham, index)=>{
                    return <div className="col-4" key={index}>
                               <ProductItemCart themGioHang={themGioHang} sp={sanPham}></ProductItemCart>
                           </div>
                })}
                {/* <div className="col-4">
                    <ProductItemCart></ProductItemCart>
                </div>
                <div className="col-4">
                    <ProductItemCart></ProductItemCart>
                </div> */}
            </div>
        )
    }
}
