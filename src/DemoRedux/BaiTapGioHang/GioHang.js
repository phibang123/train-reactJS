import React, { Component } from "react";

import { connect } from "react-redux";

//thư viện kết nối redux

class GioHang extends Component {
	renderGioHang = () => {
		return this.props.gioHang.map((spGH, index) => {
			return (
				<tr key={index}>
					<td>{spGH.maSP}</td>
					<td>s{spGH.tenSP}</td>
					<td>
						<img width={50} src={spGH.hinhAnh} alt="..." />
					</td>
					<td>
						<button
							onClick={() => {
								const action = {
									type: "TANG-GIAM-SO-LUONG",
									maSPClick: spGH.maSP,
									soLuong: 1,
								};
								//gọi hàm dispatch gửi dữ liệu lên redux
								this.props.dispatch(action);
							}}
							className="btn btn-primary mr-2"
						>
							+
						</button>
						{spGH.soLuong}
						<button
							onClick={() => {
								const action = {
									type: "TANG-GIAM-SO-LUONG",
									maSPClick: spGH.maSP,
									soLuong: -1,
								};
								//gọi hàm dispatch gửi dữ liệu lên redux
								this.props.dispatch(action);
							}}
							className="btn btn-primary ml-2"
						>
							-
						</button>
					</td>
					<td>{spGH.giaBan.toLocaleString()}</td>
					<td>{(spGH.giaBan * spGH.soLuong).toLocaleString()}</td>
					<td>
						<button
							onClick={() =>
							{
								//cách 1
								// const action = {
								// 	type: "XOA-GIO-HANG",
								// 	maSPClick: spGH.maSP,
								// };
								// this.props.dispatch(action);
							}}
							className="btn btn-danger"
						>
							Xoá
						</button>
					</td>
				</tr>
			);
		});
	};
	render() {
		console.log(this.props);
		return (
			<div>
				<div
					className="modal fade"
					id="modelId"
					tabIndex={-1}
					role="dialog"
					aria-labelledby="modelTitleId"
					aria-hidden="true"
				>
					<div className="modal-dialog modal-lg" role="document">
						<div className="modal-content">
							<div className="modal-header">
								<h5 className="modal-title">Giỏ hàng</h5>
								<button
									type="button"
									className="close"
									data-dismiss="modal"
									aria-label="Close"
								>
									<span aria-hidden="true">×</span>
								</button>
							</div>
							<div className="modal-body">
								<table className="table">
									<thead>
										<tr>
											<th>Mã sản phẩm</th>
											<th>Tên sản phẩm</th>
											<th>Hình ảnh</th>
											<th>Số lượng</th>
											<th>Giá bán</th>
											<th>Thành tiền</th>
											<th></th>
										</tr>
									</thead>
									<tbody>
										{this.renderGioHang()}
										{/* <tr>
											<td>1</td>
											<td>Iphone</td>
											<td>
												<img
													width={50}
													src="https://picsum.photos/200/200"
													alt="..."
												/>
											</td>
											<td>
												<button className="btn btn-primary mr-2">+</button>
												10
												<button className="btn btn-primary ml-2">-</button>
											</td>
											<td>1.000</td>
											<td>10.000</td>
											<td>
												<button className="btn btn-danger">Xoá</button>
											</td>
										</tr> */}
									</tbody>
								</table>
							</div>
							<div className="modal-footer">
								<button
									type="button"
									className="btn btn-secondary"
									data-dismiss="modal"
								>
									Close
								</button>
								<button type="button" className="btn btn-primary">
									Save
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
//hàm này sẻ giúp gửi dử liệu len redux(giống hệt this.props.dispatch)
//cách 2
// const mapDispatchToProps = (dispatch) =>
// {
// 	//trả về prors
// 	return {
// 		xoaGioHang: (maSPClick)=>{
// 		const action = {
// 			type: 'XOA-GIO-HANG',
// 			maSPClick: maSPClick
// 		}
// 		dispatch(action)
// 	}

// }


//hàm giúp lấy giá trị state từ redux về biến đổi thành props của component

const mapStateToPrps = (rootReducer) => {
	return {
		gioHang: rootReducer.gioHangReducer,
	};
};
//HOC
const ComponentGioHangRedux = connect(mapStateToPrps)(GioHang);

export default ComponentGioHangRedux;
