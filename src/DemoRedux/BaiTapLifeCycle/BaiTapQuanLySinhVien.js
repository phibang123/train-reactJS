import React, { Component } from 'react'

import FromThemSinhVien from './FromThemSinhVien'
import TableDanhSachSinhVien from './TableDanhSachSinhVien'

export default class BaiTapQuanLySinhVien extends Component {
    render() {
        return (
            <div className="container">
                <FromThemSinhVien></FromThemSinhVien>
                <TableDanhSachSinhVien></TableDanhSachSinhVien>
            </div>
        )
    }
}
