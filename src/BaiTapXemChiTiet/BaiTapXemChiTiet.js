import React, { Component } from 'react'

import SanPham from '../SanPham/SanPham'

export default class BaiTapXemChiTiet extends Component
{
    danhSachSanPham = [
        { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./img/vsphone.jpg" },
        { "maSP": 2, "tenSP": "Meizu 16Xs", "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels", "heDieuHanh": "Android 9.0 (Pie); Flyme", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 7600000, "hinhAnh": "./img/meizuphone.jpg" },
        { "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 27000000, "hinhAnh": "./img/applephone.jpg" }
    ]
    renderSanPham = () =>
    {
        return this.danhSachSanPham.map((product, index) =>
        {
            return  <div className="col-4" key={index}>
                <SanPham sp={product} xemChiTiet={this.xemChiTiet}/>
           </div>
        })
      
    }
    xemChiTiet = (xemPhamClick) =>
    {
        console.log(xemPhamClick, "cho b61 cái địa chỉ")
        this.setState({
            sanPhamChiTiet: xemPhamClick
        })
    }
    state = 
    {
        sanPhamChiTiet:  { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./img/vsphone.jpg" }    
        
    }
    render()
    {
        let { sanPhamChiTiet } = this.state;
        return (
            <div className="container">
                <h3 className="text-center">Sanh sách sản phẩm</h3>
                <div className="row">
                    {this.renderSanPham()}
                    {/* <div className="col-4">
                        <div className="card">
                            <img src="https://picsum.photos/200/200"/>
                            <div className="card-body">
                                <h3>Tên Sản Phẩm</h3>
                                <p>1000</p>
                                <button className="btn btn-success">Xem chi tiết</button>
                            </div>
                        </div>
                        
                    </div> */}
                  
            </div>
                <div className="row mt5">
                    <div className="col-4">
                        <h3>{sanPhamChiTiet.tenSP}</h3>
                        <img src={sanPhamChiTiet.hinhAnh } width="250" height="300"></img>
                    </div>
                    <div className="col-8">
                        <h3>Thông số kĩ thuật</h3>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Màn hình</th>
                                    <th>{sanPhamChiTiet.manHinh}</th>
                                </tr>
                                <tr>
                                    <th>Hệ diều hành</th>
                                    <th>{ sanPhamChiTiet.heDieuHanh}</th>
                                </tr>
                                <tr>
                                    <th>Camera Trước</th>
                                    <th>{sanPhamChiTiet.cameraTruoc}</th>
                                </tr>
                                <tr>
                                    <th>Camera Sau</th>
                                    <th>{sanPhamChiTiet.cameraSau}</th>
                                </tr>
                                <tr>
                                    <th>Ram</th>
                                    <th>{sanPhamChiTiet.ram}</th>
                                </tr>
                                <tr>
                                    <th>Rom</th>
                                    <th>{sanPhamChiTiet.rom}</th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}
