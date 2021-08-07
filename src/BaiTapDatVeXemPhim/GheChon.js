import "./baiTapBookingTicket.css";

import React, { Component } from "react";

import { connect } from "react-redux";

class gheChon extends Component {
	tinhTongTien = () => {
		const dsGheChong = []
		this.props.dsGhe.map(row =>
			row?.danhSachGhe.map(ghe =>
			{
				if (ghe.state === "CHON")
				{
					dsGheChong.push(ghe)
				}
			})
		)
		const totalPrice = dsGheChong.reduce((tong, ghe) => tong + ghe.gia,0)
		return `${totalPrice.toLocaleString('de-DE')} đ`;
	};
	renderDanhSachChon = () => {
		return this.props.dsGhe.map((row) => row?.danhSachGhe?.map(ghe => 
		{
			if(ghe.state === "CHON")
				return (
						<tr className="text-red" key={ghe.soGhe}>
							<th style={{ color: "orange" }}>{ghe.soGhe}</th>
							<td style={{ color: "orange" }}>{`${ghe.gia.toLocaleString('de-DE')} đ`}</td>
							<th>
								<button
									className="btn btn-danger"
									onClick={() => {
										const action = {
											type: "XOA_GHE",
											payload: ghe.soGhe,
										};
										this.props.dispatch(action);
									}}
								>
									<span>Xóa</span>
								</button>
							</th>
						</tr>
				);
		}));
	};
	render() {
		return (
			<div>
				<h3 className="text-white text-center mt-5">DANH SÁCH GHẾ BẠN CHỌN</h3>
				<div style={{ display: "flex", marginTop: "50px" }}>
					<div className="gheDuocChon"></div>{" "}
					<h4 className="ml-2 text-white">Ghế đã đặt</h4>
				</div>
				<div style={{ display: "flex", marginTop: "20px" }}>
					<div className="gheDangChon"></div>{" "}
					<h4 className="ml-2 text-white">Ghế đã chọn</h4>
				</div>
				<div style={{ display: "flex", marginTop: "20px" }}>
					<div className="gheChuaChon"></div>{" "}
					<h4 className="ml-2 text-white">Ghế chưa chọn</h4>
				</div>
				<div>
					<table className="table mt-5">
						<thead>
							<tr>
								<th className="text-white">Số Ghế</th>
								<th className="text-white">Giá</th>
								<th className="text-white">Hủy</th>
							</tr>
						</thead>

						<tbody>
							{this.renderDanhSachChon()}
						</tbody>
						<tr>
							<th className="text-white">Giá Tiền</th>

							<th style={{ color: "orange" }}>
								{this.tinhTongTien().toLocaleString()}
							</th>
							<th>
								<button onClick={() =>
								{
									const action = {
										type: 'DAT_GHE',
										danhSachGhe: this.props.danhSachGheReducer,
									}
									this.props.dispatch(action)
								}} className="btn btn-secondary">Thanh toan</button>
							</th>
						</tr>
						<tr>
							<th></th>
							<th><button onClick={() =>
								{
									const action = {
										type: 'CLEAR',
									}
									this.props.dispatch(action)
								}} className="btn btn-secondary">XOA HET</button></th>
							<th></th>
						</tr>
					</table>
				</div>
			</div>
		);
	}
}
const mapStateToProps = (rootReducer) => {
	return {
		dsGhe: rootReducer.datVeXemPhimReducer,
	};
};

export default connect(mapStateToProps)(gheChon);
// const ComponentGioHangRedux = connect(mapStateToProps)(gheChon);

// export default ComponentGioHangRedux;
