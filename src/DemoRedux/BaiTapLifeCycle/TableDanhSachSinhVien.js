import React, { Component } from "react";

import { connect } from 'react-redux'

class TableDanhSachSinhVien extends Component
{
    state = {
		Search: ""
    };
    handleChangeInputSearch = (event) => {
		let { value } = event.target;
		
		
		
		
		//Xử lý setState
		this.setState({
			Search: value, //values = this.state.values cũ nhưng giá trị email đã bị thay đổi

		});
    };
	render() {
		return (
            <div className="card mt-5">
                <input
									
									className="form-control"
                    name="Search"
                    type='number'
            
									onChange={this.handleChangeInputSearch}
                />
                <button className="btn btn-outline-success" onClick={() =>
                {
                    const action = {
                        type: 'TIM_SINH_VIEN',
                        ketQuaTim: this.state
                    }
                    this.props.dispatch(action)
                }}>Tìm</button>
				<div className="card-header bg-dark text-white">
					Danh sách sinh viên
				</div>
				<table className="table">
					<thead>
						<tr>
							<th>Mã Sinh Vien</th>
							<th>Họ tên</th>
							<th>Email</th>
							<th>Số điện thoại</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						{this.props.mangSinhVien.map((sinhVien, index) => {
							return (
								<tr key={index}>

									<td>{sinhVien.maSV}</td>
									<td>{sinhVien.hoTen}</td>			
									<td>{sinhVien.email}</td>
									<td>{sinhVien.soDienThoai}</td>
									<td>
										<button
											className="btn btn-outline-danger mr-2"
											onClick={() => {
												const action = {
													type: "XOA_SINH_VIEN",
													maSV: sinhVien.maSV,
												};

												this.props.dispatch(action);
											}}
										>
											Xoá
										</button>
										<button
											onClick={() => {
												const action = {
													type: "CHINH_SUA",
													mangSinhVienChinhSua: sinhVien,
												};

												this.props.dispatch(action);
											}}
											className="btn btn-outline-primary"
										>
											Chỉnh sửa
										</button>
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		);
	}
}
const mapStateToProps = (state) => ({
    mangSinhVien : state.baiTapQuanLySinhVienReducer.mangSinhVien
})
export default connect (mapStateToProps)(TableDanhSachSinhVien)