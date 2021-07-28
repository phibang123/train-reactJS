import React, { Component } from 'react'

import { connect } from 'react-redux';

//kết nối redux

class SanPham extends Component
{
     
    render()
    {
        console.log("pa",this.props)
        let {sanPham} = this.props
        return (
            <div className="card">
                <img className="w-100" height={300} src={sanPham.hinhAnh}></img>
                <div className="card-body">
                <h3>{sanPham.tenSP}</h3>
                    <p>{sanPham.giaBan}</p>
                    <button onClick={() =>
                    {
                        const action = {
                            type:'THEM_GIO_HANG', //THUỘC TÍNH BẮT BUỘC ĐỂ XÁC DỊNH XỬ LÝ
                            sanPham: sanPham //tạo mảng sanPham tuộc tính giá trị của sanPham củ
                        }
                        //đưa dữ liệu lên redux
                        this.props.dispatch(action)
                    }} className="btn btn-success">Thêm giỏ hàng</button>
                </div>
            </div>
        )
    }
}
export default connect()(SanPham)