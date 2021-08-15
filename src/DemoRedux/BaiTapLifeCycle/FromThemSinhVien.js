import React, { Component } from "react";

import { connect } from "react-redux";

class FromThemSinhVien extends Component {
	state = {
		values: {
			maSV: "",
			email: "",
			hoTen: "",
			soDienThoai: "",
		},
		errors: {
			maSV: "",
			email: "",
			hoTen: "",
			soDienThoai: "",
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
        if (event.target.getAttribute("typeSoDienThoai")) {
			// !undefine
			attrValue = event.target.getAttribute("typeSoDienThoai"); //attrValue = email
			regex =
            /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/
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
            if (attrValue === "soDienThoai") {
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
		//cản sự kiện submit browser
		event.preventDefault();
        
        //bắt trường hợp lỗi không cho submit
        let valid = true;
        //duyệt bắt error = rỗng hết tất cả mởi hợp lệ
        for (let key in this.state.errors)
        {
            
			if (this.state.errors[key] !== "") {
				valid = false;
				break;
			}
		}
		//duyệt bắt tất cả value phải khác rỗng mới hợp lệ
		for (let key in this.state.values) {
			if (this.state.values[key] === "") {
				valid = false;
				break;
			}
		}
		if (!valid)
        {
            console.log('erorr',this.state.values)
			alert('Dử liệu không hợp lệ');
			return;
		}

		console.log('state submit', this.state)
		const action = {
			type: 'THEM_SINH_VIEN',
			sinhVien: this.state.values
		}
		this.props.dispatch(action)
    };
    
    componentWillReceiveProps(newProps)
    {
        this.setState({
            values: newProps.mangSinhVienChinhSua,
            
        })
       
    }
    handleCapNhat = () =>
    {
        let valid = true;
        for (let key in this.state.errors)
        {
            
			if (this.state.errors[key] !== "") {
				valid = false;
				break;
			}
		}
		//duyệt bắt tất cả value phải khác rỗng mới hợp lệ
		for (let key in this.state.values) {
			if (this.state.values[key] === "") {
				valid = false;
				break;
			}
		}
		if (!valid)
        {
            console.log('erorr',this.state.values)
			alert('Dử liệu không hợp lệ');
			return;
		}

		const action = {
            type: 'CAP_NHAT_SINH_VIEN',
            sinhVienCapNhat: this.state.values
        }
        this.props.dispatch(action)
    }
    render()
    {
        
         let { maSV, hoTen,  email, soDienThoai } = this.state.values;
			
        return (
            
			<form className="card mt-5" onSubmit={this.handleSubmit}>
				<div className="card-header bg-dark text-white">Form đăng ký</div>
				<div className="card-body">
					<div className="row">
						<div className="col-6">
							<div className="form-group">
								<p>Mã Sinh Viên</p>
								<input
									value={maSV}
									className="form-control"
									name="maSV"
									onChange={this.handleChangeInput}
								/>
								<p className="text-danger">{this.state.errors.maSV}</p>
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
                                    typeSoDienThoai="soDienThoai"
									className="form-control"
									name="soDienThoai"
									onChange={this.handleChangeInput}
								/>
								<p className="text-danger">{this.state.errors.soDienThoai}</p>
							</div>
						</div>
					</div>
				</div>
				<div className="card-footer text-left">
					<button className="btn btn-outline-success mr-2" type="submit">
						Đăng ký
					</button>
                    <button type="button" className="btn btn-outline-primary" onClick={this.handleCapNhat}>Cập nhật</button>
				</div>
			</form>
		);
	}
}
const mapStateToProps = (state) => ({
    mangSinhVienChinhSua: state.baiTapQuanLySinhVienReducer.mangSinhVienChinhSua,
})
export default connect(mapStateToProps)(FromThemSinhVien);
