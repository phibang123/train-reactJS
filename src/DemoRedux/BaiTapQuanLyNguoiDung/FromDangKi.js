import React, { Component } from "react";

import { connect } from "react-redux";

class FormDangKy extends Component {
	state = {
		values: {
			taiKhoan: "",
			matKhau: "",
			email: "",
			hoTen: "",
			soDienThoai: "",
			maLoaiNguoiDung: "KhachHang",
		},
		errors: {
			taiKhoan: "",
			matKhau: "",
			email: "",
			hoTen: "",
			soDienThoai: "",
			maLoaiNguoiDung: "",
		},
	};

	handleChangeInput = (event) => {
		let { value, name } = event.target; // {valueEmail,email} = <input typeEmail="email" name="email" />
		let newValues = { ...this.state.values }; // newValues = {taiKhoan:'',matKhau:'',.....}
		newValues[name] = value; // newValue['email'] = valueEmail
		let attrValue = ""; // attrValue = ''
		let regex; // regex = undefine
		if (event.target.getAttribute("typeEmail")) {
			// !undefine
			attrValue = event.target.getAttribute("typeEmail"); //attrValue = email
			regex =
				/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i; //regex = /.....
		}
		let newErrors = { ...this.state.errors }; //newErrors =  {taiKhoan:'',matKhau:'',.....}
		let messageError = ""; // messageError = ''
		if (value.trim() === "") {
			messageError = name + " không được bỏ trống !";
		}
		//Nếu là email
		if (regex) {
			if (attrValue === "email") {
				if (!regex.test(value)) {
					messageError = name + " phải đúng định dạng!"; //email + ' không đúng định dạng'
				}
			}
		}
		newErrors[name] = messageError; //newErrors[email] = email + ' không đúng định dạng'
		//Xử lý setState
		this.setState({
			values: newValues, //values = this.state.values cũ nhưng giá trị email đã bị thay đổi
			errors: newErrors, //errors = this.state.errors cũ nhưng giá trị email đã bị thay đổi
		});
	};

	handleSubmit = (event) => {
		//Cản sự kiện submit browser
		event.preventDefault();
		console.log("state", this.state);
		//Bắt trường hợp lỗi khi sẽ không cho submit
		let valid = true;
		//Duyệt bắt error phải = rổng hết mới hợp lệ
		for (let key in this.state.errors) {
			if (this.state.errors[key] !== "") {
				valid = false;
				break;
			}
		}
		//Duyệt bắt tất cả value phải khác rổng mới hợp lệ
		for (let key in this.state.values) {
			if (this.state.values[key] === "") {
				valid = false;
				break;
			}
		}
		if (!valid) {
			//Không hợp lệ
			alert("Dữ liệu không hợp lệ !");
			return;
		}
    };
    ////chạy tr render khi khi props thay dổi state thay đổi
	// static getDerivedStateFromProps(
	// 	newProps,
	// 	currenState /*currenState là state của hiện tại */
	// ) {
	// 	//trường hợp bấm chỉnh sửa thì cần chỉnh state, còn trường hợp handle change thì không cần gán props vào state nữa
	// 	//(tức không cần) chạy cái này khi handle change

	// 	//vậy trường hợp ở đây khi nó khác với tài khoản thì nhần nút chỉnh sửa nó sẻ truyền vào input setState


    //     //nhưng cách này không thay đổi đc tài khoản
	// 	if (newProps.nguoiDungChinhSua.taiKhoan !== currenState.values.taiKhoan) {
	// 		//return về state mới
	// 		return {
	// 			//là nó nhận props của redux xong rồi gán và values
	// 			...currenState,
	// 			values: newProps.nguoiDungChinhSua,
	// 		};
    //     }
    //     //ngược lại nó giống tài khoản nó sẻ thay dổi được cái input
    //     return currenState

	// 	//có 1 vấn đề hàm này là thay đổi props nó củng chạy và thay dổi state nó củng chạy
	// 	//vì ta handle state là setState nên cái này nó cũng chạy vì thế phải set trường hợp
	// }

    //chạy tr render khi khi props thay dổi
    componentWillReceiveProps(newProps)
    {
        this.setState({
            values : newProps.nguoiDungChinhSua
        })
    }
	render() {
		let { taiKhoan, hoTen, matKhau, email, soDienThoai, maLoaiNguoiDung } =
			this.state.values;

		return (
			<form className="card mt-5" onSubmit={this.handleSubmit}>
				<div className="card-header bg-dark text-white">Form đăng ký</div>
				<div className="card-body">
					<div className="row">
						<div className="col-6">
							<div className="form-group">
								<p>Tài khoản</p>
								<input
									value={taiKhoan}
									className="form-control"
									name="taiKhoan"
									onChange={this.handleChangeInput}
								/>
								<p className="text-danger">{this.state.errors.taiKhoan}</p>
							</div>
							<div className="form-group">
								<p>Mật khẩu</p>
								<input
									value={matKhau}
									className="form-control"
									name="matKhau"
									type="password"
									onChange={this.handleChangeInput}
								/>
								<p className="text-danger">{this.state.errors.matKhau}</p>
							</div>
							<div className="form-group">
								<p>Email</p>
								<input
									value={email}
									typeEmail="email"
									className="form-control"
									name="email"
									onChange={this.handleChangeInput}
								/>
								<p className="text-danger">{this.state.errors.email}</p>
							</div>
						</div>
						<div className="col-6">
							<div className="form-group">
								<p>Họ tên</p>
								<input
									value={hoTen}
									className="form-control"
									name="hoTen"
									onChange={this.handleChangeInput}
								/>
								<p className="text-danger">{this.state.errors.hoTen}</p>
							</div>
							<div className="form-group">
								<p>Số điện thoại</p>
								<input
									value={soDienThoai}
									className="form-control"
									name="soDienThoai"
									onChange={this.handleChangeInput}
								/>
								<p className="text-danger">{this.state.errors.soDienThoai}</p>
							</div>
							<div className="form-group">
								<p>Mã loại người dùng</p>
								<select
									value={maLoaiNguoiDung}
									className="form-control"
									name="maLoaiNguoiDung"
									onChange={this.handleChangeInput}
								>
									<option value="KhachHang">Khách hàng</option>
									<option value="QuanTri">Quản trị</option>
								</select>
							</div>
						</div>
					</div>
				</div>
				<div className="card-footer text-left">
					<button className="btn btn-outline-success mr-2" type="submit">
						Đăng ký
					</button>
					<button className="btn btn-outline-primary">Cập nhật</button>
				</div>
			</form>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		nguoiDungChinhSua: state.baiTapQuanLyNguoiDungReducer.nguoiDungChinhSua,
	};
};

export default connect(mapStateToProps)(FormDangKy);
