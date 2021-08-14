


const stateDefault = {
    mangNguoiDung: [
        { taiKhoan: 'bang0166709133', hoTen: 'Trần Vũ Phi Bằng', matKhau: '01232525113Bang', email: 'phibang7899@gmail.com', soDienThoai: '0889114382', maLoaiNguoiDung: 'QuanTri' },
        { taiKhoan: 'loiTan', hoTen: 'Nguyễn Tấn Lợi', matKhau: 'loi123', email: 'lotran@gmail.com', soDienThoai: '099999999999', maLoaiNguoiDung: 'KhachHang' },
        { taiKhoan: 'ducBuoiTo', hoTen: 'Vũ Buồi Hòn Đức', matKhau: '01111111111', email: 'ducvubuihong@gmail.com', soDienThoai: '011111111111', maLoaiNguoiDung: 'QuanTri' },
        
    ],
    // nguoiDungChinhSua: {
    //     taiKhoan: 'bang0166709133', hoTen: 'Trần Vũ Phi Bằng', matKhau: '01232525113Bang', email: 'phibang7899@gmail.com', soDienThoai: '0889114382', maLoaiNguoiDung: 'QuanTri'
    // },
    nguoiDung: {
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
    }
}

export const baiTapQuanLyNguoiDungReducer = (state = stateDefault, action) =>
{
    switch (action.type)
    {
        case 'THEM_NGUOI_DUNG': {
            state.mangNguoiDung = [...state.mangNguoiDung, action.nguoiDung/*action.mangNguoiDung cũng giống như
            state.mangNguoiDung.push(action.nguoiDung) **sao dấu , nó sẻ thêm hàm push
            là cái state.mangNguoiDung nó sao chép cái stateDefault và push thêm action.nguoiDung */];
            return {...state}
        }
        case 'XOA_NGUOI_DUNG': {
            state.mangNguoiDung = [...state.mangNguoiDung.filter(nguoiDung/*tạo ra nguoiDung mà không có taiKhoan giống action truyền vào */ => nguoiDung.taiKhoan !== action.taiKhoan)]
            return {...state}
        }
        case 'CHINH_SUA': {
            state.nguoiDung.values = action.nguoiDungChinhSua
            state.nguoiDung = {...state.nguoiDung}
            return {...state}
        }
        case 'HANDLE_CHANGE_INPUT': {
            state.nguoiDung = action.nguoiDung

            return {...state}
        }
        case 'CAP_NHAT_NGUOI_DUNG': {
            console.log(action.nguoiDungCapNhat)
            const mangNguoiDungCapNhat = [...state.mangNguoiDung];
            
            //Tìm ra người dùng cần cập nhật
            let nguoiDungCapNhat = mangNguoiDungCapNhat.find(nguoiDung => nguoiDung.taiKhoan === action.nguoiDungCapNhat.taiKhoan)
            console.log('nguoiDungCapNhat',nguoiDungCapNhat)
            // à à à
            // là khi tìm đc nguoiDugCapNhat trong mangNguoiDung copy(mangNguoiDungCapNhat) thì 
            if (nguoiDungCapNhat)
            {
                //nguoiDungCapNhat = action.nguoiDungCapNhat

                //do không lấy tài khoản
                nguoiDungCapNhat.hoTen = action.nguoiDungCapNhat.hoTen;
                nguoiDungCapNhat.email = action.nguoiDungCapNhat.email;
                nguoiDungCapNhat.soDienThoai = action.nguoiDungCapNhat.soDienThoai;
                nguoiDungCapNhat.matKhau = action.nguoiDungCapNhat.matKhau;
                nguoiDungCapNhat.maLoaiNguoiDung = action.nguoiDungCapNhat.maLoaiNguoiDung;
                //nó sẻ tự động add vào mangNguoiDungCapNhat
            }
                
            state.mangNguoiDung = mangNguoiDungCapNhat
            
            return {...state}
        }
        default : return state
    }
}