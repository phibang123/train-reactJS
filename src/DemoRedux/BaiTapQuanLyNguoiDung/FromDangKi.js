import React, { Component } from "react";

import { connect } from "react-redux";

class FromDangKi extends Component {
	state = {
		values: {
			taiKhoan: "",
			matKhau: "",
			email: "",
			hoTen: "",
			soDienThoai: '',
			maLoaiNguoiDung: "khachHang"
        },
        
        //error dành để chứa lỗi
		errors: {
			taiKhoan: "",
			matKhau: "",
			email: "",
			hoTen: "",
			soDienThoai: "",
			maLoaiNguoiDung: ""
		}
	};
    handleChangeInput = (event) =>
    {
        //điều đầu tiên là khi onChange cái input thì khi điền vào input nó chỉ chạy dòng input ở đó
        let { value, name } = event.target;
        
        //sử lý email
        let attrValues = '';
        let regex;
        //kiểm tra có phải là typeEmail không
        if (event.target.getAttribute('typeEmail'))
        {
            //nếu đúng thì lấy gia trị của typeEmail ra (email) gán cho attrValus
            attrValues = event.target.getAttribute('typeEmail');
            //giá trị của regex để xét email
            regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        }
        //
         
         //tạo ra newValues giống state.values
        //lưu ý vì sao chép nên thuộc tính có giá trị nào nó cũng sẻ sao chep luôn cái hay của ES6
        let newValues = {...this.props.nguoiDung.values}
        //truyền dử liệu vào newValues
        newValues[name] = value
            

        let newErrors = {...this.props.nguoiDung.errors}
        //để messageError là trống vì khi người khác sửa nó cập nhật lại
        let messageError = '';
        if(value.trim() === "")
        {
            messageError = name + " không được bỏ trống!"; 
        }
        //vì nếu có typeEmail thì mới có regex nên nếu có regex thì sét trường hợp
        if (regex)
        {
            //xét điều kiện có phải artValus có phải là email hay không nếu có thì sét
            if (attrValues === 'email')
            {
                //regex.test(value) là regex kiểm tra value có đúng định dạng hay không nếu khác thì sét trường hợp
                if (!regex.test(value))
                {
                    //thay đổi lại messageError
                    messageError = name + ' Không đúng định dạng'
                }
            }
        }
        newErrors[name] = messageError;
        //xử lý setState
        // this.setState({
        //     values: newValues,
        //     errors: newErrors
        // },()=>{console.log("state", this.state);})
		

		this.props.dispatch({
			type: 'HANDLE_CHANGE_INPUT',
			nguoiDung: {
				values: newValues,
				errors: newErrors
			}
		})
    
		// this.setState({
		// 	[name]: value,
		// });
	};
	handleSubmit = (event) => {
		//cản sự kiện submit browser
		event.preventDefault();
        
        //bắt trường hợp lỗi không cho submit
        let valid = true;
        //duyệt bắt error = rỗng hết tất cả mởi hợp lệ
        for (let key in this.state.errors)
        {
			if (this.props.nguoiDung.errors[key] !== '')
			{
				valid = false;
				break;
			}
        }
		//duyệt bắt tất cả value phải khác rỗng mới hợp lệ
		for (let key in this.state.values)
		{
			if (this.props.nguoiDung.values[key] === '')
			{
				valid = false;
				break;
			}
		}
		if (!valid)
		{
			alert('Dử liệu không hợp lệ');
			return;
		}

		console.log('state submit', this.state)
		const action = {
			type: 'THEM_NGUOI_DUNG',
			nguoiDung: this.state.values
		}
		this.props.dispatch(action)
	};
	render()
	{
		let  {taiKhoan,matKhau,email,soDienThoai,maLoaiNguoiDung,hoTen} = this.props.nguoiDung.values
		return (
			<form className="card mt-5" onSubmit={this.handleSubmit}>
				<div className="card-header bg-dark text-white">From Đăng kí</div>
				<div className="card-body">
					<div className="row">
						<div className="col-6">
							<div className="form-group">
								<p>Tài Khoản</p>
								<input
									className="form-control"
									name="taiKhoan"
									value={taiKhoan}
									onChange={this.handleChangeInput}
								></input>
                                <p className="text-danger">{this.state.errors.taiKhoan}</p>
							</div>
							<div className="form-group">
								<p>Mật Khẩu</p>
								<input
									className="form-control"
									name="matKhau"
									value={matKhau}
									type='password'
									onChange={this.handleChangeInput}
                                ></input>
                                <p className="text-danger">{this.state.errors.matKhau}</p>
							</div>
							<div className="form-group">
								<p>Email</p>
								<input
									value={email}
									className="form-control"
                                    name="email"
                                    typeEmail='email'
									onChange={this.handleChangeInput}
                                ></input>
                                <p className="text-danger">{this.state.errors.email}</p>
							</div>
						</div>
						<div className="col-6">
							<div className="form-group">
								<p>Họ Tên</p>
								<input
									value={hoTen}
									className="form-control"
									name="hoTen"
									onChange={
										this.handleChangeInput
									} /*onchange thay đổi mới gọi nên không cần () */
                                ></input>
                                <p className="text-danger">{this.state.errors.hoTen}</p>
							</div>
							<div className="form-group">
								<p>Số Điện Thoại</p>
                                <input value={soDienThoai} className="form-control" name="soDienThoai" onChange={this.handleChangeInput}></input>
                                <p className="text-danger">{this.state.errors.soDienThoai}</p>
              
							</div>
							<div className="form-group">
								<p>Mã Loại Người Dùng</p>
								<select
									value={maLoaiNguoiDung}
									className="form-control"
									name="maLoaiNguoiDung"
									onChange={this.handleChangeInput}
								>
									<option value="KhachHang">Khách Hàng</option>
									<option value="QuanTri">Quản Trị</option>
                                </select>
                                
							</div>
						</div>
					</div>
				</div>
				<div className="card-footer text-left">
					<button className="btn btn-outline-success mr-2">đăng kí</button>
					<button type='button' onClick={() =>
					{
						//cập nhật dữ liệu
						const action = {
							type: 'CAP_NHAT_NGUOI_DUNG',
							nguoiDungCapNhat: this.props.nguoiDung.values
						}
						this.props.dispatch(action)
					}} className="btn btn-outline-primary mr-2">Cập Nhập</button>
				</div>
			</form>
		);
	}
}

const mapStateToProps = (state) =>
({
	nguoiDungChinhSua: state.baiTapQuanLyNguoiDungReducer.nguoiDungChinhSua,
	nguoiDung : state.baiTapQuanLyNguoiDungReducer.nguoiDung
})

export default connect(mapStateToProps)(FromDangKi);