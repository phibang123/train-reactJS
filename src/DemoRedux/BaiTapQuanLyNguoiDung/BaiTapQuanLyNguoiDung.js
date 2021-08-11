import React, { Component } from 'react'

import FromDangKi from './FromDangKi'
import TableDanhSachNguoiDung from './TableDanhSachNguoiDung'

export default class BaiTApQuanLyNguoiDung extends Component {
    render() {
        return (
            <div className="container">
                <FromDangKi></FromDangKi>
                <TableDanhSachNguoiDung></TableDanhSachNguoiDung> 
            </div>
        )
    }
}
