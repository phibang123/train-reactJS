import React, { Component } from 'react'

export default class ProductItemCart extends Component {
    render()
    {
        let {sp,themGioHang} = this.props
        return (
            <div className="card">
                <img style={{ height: 350 }} src={sp.hinhAnh}></img>
                <div className="card-body">
                    <h3>{sp.tenSP}</h3>
                    <p>{sp.giaBan.toLocaleString()}</p>
                    <button onClick={() =>
                    {
                        themGioHang(sp)
                    }
                    //click vào gọi lại hàm themGioHang
                    } className="btn btn-danger">Thêm Giỏ Hàng</button>
                </div>
            </div>
        )
    }
}
