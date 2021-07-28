

const gioHang = []

    //các state ứng dụng dc luu tại đây
    export const  gioHangReducer = (state = gioHang, action) =>
    {
        console.log('action', action)
        switch (action.type)
        {
            case 'THEM_GIO_HANG': {
                let spGH = { ...action.sanPham,soLuong : 1 };
                //kiểm tra sản phẩm trong giỏ hảng chưa
                console.log(spGH);
                let gioHangCapNhat = state;
                
                let spGioHang = gioHangCapNhat.find(sp => sp.maSP === spGH.maSP);
                if (spGioHang)
                {
                    spGioHang.soLuong += 1;
                }
                else
                {
                    gioHangCapNhat.push(spGH);
                }
                console.log('giỏ hảng cập nhật', gioHangCapNhat);
                //tính bất biến (immutable) phải trả về object mới hay array mới
                return [...gioHangCapNhat]
            }
            case 'XOA-GIO-HANG': {
                const gioHangCapNhat = state.filter(sp => sp.maSP !== action.maSPClick);
                return [...gioHangCapNhat]
            }
            case 'TANG-GIAM-SO-LUONG': {
                let gioHangCapNhat = [...state];

                let spGH = gioHangCapNhat.find(sp => sp.maSP === action.maSPClick);
                if (spGH)
                {
                    spGH.soLuong += action.soLuong;
                    if (spGH.soLuong<1)
                    {
                        alert('số lượng tối thieu7')
                        spGH.soLuong -= action.soLuong;
                    }
                }
                return [...gioHangCapNhat]
            }
            default : return state
        }

    }
    // reduxtB: (state = "", action) =>
    // {
    //     console.log('action2'action)
    // }
    // reduxtB: (state = "", action) =>
    // {
    //     console.log('action3'action)
    // }

