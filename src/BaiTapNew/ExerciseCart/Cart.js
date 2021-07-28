import React, { Component } from "react";

export default class Cart extends Component {
	renderGioHang = () => {
		let { gioHang, xoaGioHang, tangGiamSoLuong } = this.props;
		console.log(gioHang, xoaGioHang);
		return gioHang.map((spGH, index) => {
			return (
				<tr key={index}>
					<td>{spGH.maSP}</td>
					<td>{spGH.tenSP}</td>
					<td>
						<img width={50} src={spGH.hinhAnh} alt="..." />
					</td>
					<td>
						<button
							onClick={() => {
								tangGiamSoLuong(spGH.maSP, 1);
							}}
							className="btn btn-primary mr-2"
						>
							+
						</button>
						{spGH.soLuong}
						<button
							onClick={() => {
								tangGiamSoLuong(spGH.maSP, -1);
							}}
							className="btn btn-primary ml-2"
						>
							-
						</button>
					</td>
					<td>{spGH.giaBan.toLocaleString()}</td>
					<td>{(spGH.soLuong * spGH.giaBan).toLocaleString()}</td>
					<td>
						<button
							onClick={() => {
								xoaGioHang(spGH.maSP);
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
		return (
			<div>
				{/* Modal */}
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
                                        <td><img width={50} src="https://picsum.photos/200/200" alt="..." /></td>
                                        <td>
                                            <button className="btn btn-primary mr-2">+</button>
                                            10
                                            <button className="btn btn-primary ml-2">-</button>
                                        </td>
                                        <td>1.000</td>
                                        <td>10.000</td>
                                        <td><button className="btn btn-danger">Xoá</button></td>


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
