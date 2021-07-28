import React, { Component } from 'react'

import Cart from './Cart'
import ProductCartListCart from './ProductListCart'

export default class ExerciseCart extends Component
{
    dataPhone =[
        { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./img/vsphone.jpg" },
        { "maSP": 2, "tenSP": "Meizu 16Xs", "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels", "heDieuHanh": "Android 9.0 (Pie); Flyme", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 7600000, "hinhAnh": "./img/meizuphone.jpg" },
        { "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 27000000, "hinhAnh": "./img/applephone.jpg" }
      ]
    state = {
        gioHang: [
           
          ]
    }
    
    //state nằm ở đâu thì phương thức setState sẻ nằm ở đó(component đó)

    themGioHang = (spClick) =>
    {
        
        //khi click vào sp thêm vào số lượng
        let spGioHang = { ...spClick, soLuong: 1 }
        //lấy sản phẩm đó thêm vào giỏ hàng
        let gioHangCapNhat = [...this.state.gioHang/*,spGioHang*/];

        //kiểm traa sản phẩm click có tồn tại hay chưa
        let spGH = gioHangCapNhat.find(sp=>sp.maSP === spGioHang.maSP);

        if (spGH)
        {
            spGH.soLuong += 1;
        }
        else //không tìm hấy
        {
            // let gioHangCapNhat = [...this.state.gioHang,spGioHang];
            // vì cái gioHangCapNhat đả sử dụng ở trên nên không teh63 sử dụng lại
             gioHangCapNhat.push(spGioHang)
            //  gioHangCapNhat = [...gioHangCapNhat, spGioHang];

        }
        //setSteta

        this.setState({
            gioHang : gioHangCapNhat
        })
    }
    xoaGioHang = (maSPClick) =>
    {
    
        // //let gioHangCApNhat = [...this.state.gioHang]
         let { gioHang } = this.state;

        // //tìm ra vị trí trong mảng
        // let index = gioHang.findIndex(sp => sp.maSP === maSPClick);
        // if (index !== -1)
        // {
        //     gioHang.splice(index, 1); //xóa vị trí trong mnag3
        // }
        
        gioHang = gioHang.filter(sp => sp.maSP !== maSPClick);
        // không phải xóa nó sẻ tạo tạo danh sách không có thằng bạn xóa


        //sử lý setState => thay đổi giỏ hàng
        this.setState({
            gioHang: gioHang
        })
    }
    tangGiamSoLuong = (maClick,soluong) =>
    {
        console.log(maClick, soluong);
        let { gioHang } = this.state;
        let spTangGiam = gioHang.find(sp => sp.maSP === maClick);
        if (spTangGiam)
        {
            spTangGiam.soLuong += soluong
            if (spTangGiam.soLuong < 1)
            {
                alert('Số Lượng tối thiểu là 1')
                spTangGiam.soLuong -= soluong;
                // this.xoaGioHang(maClick);
                // return
            }
        }
        //cập nhập lại state
        this.setState({
            gioHang: gioHang
        })
    }
    thinhTongSoLuong = () =>
    {
        let { gioHang } = this.state
        

        let tongSoLuong = gioHang.reduce((soLuong, sanPham, index) =>
        {
            return soLuong += sanPham.soLuong
        }, 0)
        
        return tongSoLuong.toLocaleString();
    }
    tinhTongTien = () =>
    {
        let { gioHang } = this.state
        

        let tinhTongTien = gioHang.reduce((thanhTien, sanPham, index) =>
        {
            return thanhTien += sanPham.soLuong *sanPham.giaBan
        }, 0)
        
        return tinhTongTien.toLocaleString();
    }
    render() {
        return (
            <div className="container">
                <h3 className="text-center">Bài Tập Giỏ Hàng</h3>
                <div className="text-right">
                    <span style={{cursor: "pointer"}}  data-toggle="modal"
                        data-target="#modelId" className="text text-danger font-weight-bold">Giỏ Hàng({this.thinhTongSoLuong()} -{ this.tinhTongTien()})</span>
                    
                </div>
                <Cart tangGiamSoLuong={this.tangGiamSoLuong} xoaGioHang={this.xoaGioHang} gioHang={this.state.gioHang}></Cart>
                <ProductCartListCart themGioHang={this.themGioHang} mangSanPham={this.dataPhone }></ProductCartListCart>
            </div>
            //truyền đi dưới dạng tham số thì không có đống mở hoặc
        )
    }
}

