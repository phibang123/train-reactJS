

const initialState = {
    mangSinhVien: [
        { maSV: '1', hoTen: 'Nguyễn Văn A', email: 'nguyenvana@gmail.com', soDienThoai: '0909090909' },
        { maSV: '2', hoTen: 'Nguyễn Văn B', email: 'nguyenvanb@gmail.com', soDienThoai: '0808080808' },
    ],
    mangSinhVienChinhSua: { 
        maSV: '', 
        hoTen: '',
        email: '', 
        soDienThoai: '', 
     },
}

export const baiTapQuanLySinhVienReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TIM_SINH_VIEN': {
            console.log('ma sv',action.ketQuaTim)
            const mangSinhVienCanTim = [...state.mangSinhVien]
            console.log(`mang`, mangSinhVienCanTim)
            // let index = mangSinhVienCanTim.findIndex(sinhVien => sinhVien.maSV === action.ketQuaTim)
            state.mangSinhVien = mangSinhVienCanTim.filter(sinhVien => sinhVien.maSV.includes(action.ketQuaTim.Search));
            
            return { ...state }
         }
        case 'THEM_SINH_VIEN': {
            state.mangSinhVien = [...state.mangSinhVien, action.sinhVien]
            // state.mangNguoiDung.push(action.nguoiDung)

            return { ...state }
        }
        case 'XOA_SINH_VIEN': {

            const mangSinhVienCapNhat = [...state.mangSinhVien]

            state.mangSinhVien = mangSinhVienCapNhat.filter(sinhVien => sinhVien.maSV !== action.maSV);

            return { ...state };

        }
        case 'CHINH_SUA': {
            console.log('new',action.mangSinhVienChinhSua)
            state.mangSinhVienChinhSua = action.mangSinhVienChinhSua;
         
            return { ...state }
            
        }
        case 'CAP_NHAT_SINH_VIEN': {
                
            console.log('cap nhat',action.sinhVienCapNhat)
            let mangSinhVienCapNhat = [...state.mangSinhVien]

            let index = mangSinhVienCapNhat.findIndex(sinhVien => sinhVien.maSV === action.sinhVienCapNhat.maSV)
            // console.log('cap nhat', mangSinhVienCapNhat[index])
            if (index !== -1)
            {
                mangSinhVienCapNhat[index] = action.sinhVienCapNhat
                console.log('cap nhat đã cập nhập',mangSinhVienCapNhat[index])
                state.mangSinhVien = mangSinhVienCapNhat;
            }
            
            return { ...state }
        }
        
    default:
        return state
    }
}
