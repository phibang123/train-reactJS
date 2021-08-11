


const stateDefault = {
    mangNguoiDung: [
        { taiKhoan: 'bang0166709133', hoTen: 'Trần Vũ Phi Bằng', matKhau: '01232525113Bang', email: 'phibang7899@gmail.com', soDienThoai: '0889114382', maLoaiNguoiDung: 'QuanTri' },
        { taiKhoan: 'loiTan', hoTen: 'Nguyễn Tấn Lợi', matKhau: 'loi123', email: 'lotran@gmail.com', soDienThoai: '099999999999', maLoaiNguoiDung: 'KhachHang' },
        { taiKhoan: 'ducBuoiTo', hoTen: 'Vũ Buồi Hòn Đức', matKhau: '01111111111', email: 'ducvubuihong@gmail.com', soDienThoai: '011111111111', maLoaiNguoiDung: 'QuanTri' },
        
    ]
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
        default : return state
    }
}