


const stateDefault = {
    mangNguoiDung: [
        { taiKhoan: 'nguyenvana', hoTen: 'Nguyễn Văn A', matKhau: '123456789', email: 'nguyenvana@gmail.com', soDienThoai: '0909090909', maLoaiNguoiDung: 'KhachHang' },
        { taiKhoan: 'nguyenvanb', hoTen: 'Nguyễn Văn B', matKhau: '987654321', email: 'nguyenvanb@gmail.com', soDienThoai: '0808080808', maLoaiNguoiDung: 'KhachHang' },
    ],
    nguoiDungChinhSua: { 
        taiKhoan: '', 
        hoTen: '', 
        matKhau: '', 
        email: '', 
        soDienThoai: '', 
        maLoaiNguoiDung: ''
     },
   

}

export const baiTapQuanLyNguoiDungReducer = (state = stateDefault, action) => {
    console.log('action', action)

    switch (action.type) {

        case 'THEM_NGUOI_DUNG': {
            state.mangNguoiDung = [...state.mangNguoiDung, action.nguoiDung]
            // state.mangNguoiDung.push(action.nguoiDung)

            return { ...state }
        }

        case 'XOA_NGUOI_DUNG': {

            const mangNguoiDungCapNhat = [...state.mangNguoiDung]

            state.mangNguoiDung = mangNguoiDungCapNhat.filter(nguoiDung => nguoiDung.taiKhoan !== action.taiKhoan);

            return { ...state };

        }
        case 'CHINH_SUA': {
            state.nguoiDungChinhSua = action.nguoiDungChinhSua;
           
            
            return {...state}
        }
        case 'HANDLE_CHANGE_INPUT' : {
            state.nguoiDung = action.nguoiDungChinhSua;
            
            return {...state}
        }

        

        default: return state
    }
}