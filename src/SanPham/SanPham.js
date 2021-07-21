import React, { Component } from 'react'

export default class SanPham extends Component {
    render()
    {
        let{sp} = this.props
        return (
            <div className="card">
            <img src={ sp.hinhAnh} height="300"/>
            <div className="card-body">
                    <h3>{ sp.tenSP}</h3>
                    <p>{sp.giaBan.toLocaleString()}</p>
                    <button className="btn btn-success" onClick={()=> this.props.xemChiTiet(sp)} /*onClick={() =>{this.xemChiTiet(product)}}*/>Xem chi tiết</button>
            </div>
          </div>
        
        )
    }
}
