


//liệt kê các state của ứng dụng bài tập game
const stateDefault = {
    soBanChoi: 0,
    soBanThang: 0,
    banChon: true,
    ketQua: '',
    magXucXac: [
        { hinhAnh: './img/gameXucXac/1.png', diem: 1 },
        { hinhAnh: './img/gameXucXac/1.png', diem: 1 },
        { hinhAnh: './img/gameXucXac/1.png', diem: 1 },
    ]
}

export const baiTapGameXucXacReducer = (state = stateDefault, action) =>
{
    console.log(action)
    switch (action.type)
    {
        case 'DAT_CUOC': {
            state.banChon = action.banChon;
            return { ...state };
        }
        case 'PLAY_GAME': {
            //tạo ra xúc xắc ngãu nhiên để random
            //random 3 lần vì 3 con xúc xắc
            let mangXucXacNgauNhien = [];
            for (let i = 0; i < 3; i++)
            {
                //mỗi lần sẻ tạo ra 1 số ngẫu nhiêu
                let soNgauNghien = Math.floor(Math.random() * 6) + 1;
                //từ số ngẫu nhiên tạo ra 1 Object xúc xắc ngẩu nhiên
                
                let xxnn = { hinhAnh: `./img/gameXucXac/${ soNgauNghien }.png`, diem: soNgauNghien };
                //thêm vào xúc xắc mãng ngẫu nhiên
                mangXucXacNgauNhien.push(xxnn);
            }
            //set lại state.mangXucXac = mangXucXacNgauNhien
            state.magXucXac = mangXucXacNgauNhien;



            //xử lý thắng cuộc
            let tongDiem = mangXucXacNgauNhien.reduce((tong, xxnn, index) =>
            {
                return tong += xxnn.diem;
            },0)

            if ((state.banChon && tongDiem > 11)||(!state.banChon && tongDiem< 11))
            {
                state.soBanThang += 1;
                state.ketQua = 'Win'
            }
            else
            {
                state.ketQua = 'Lose'
            }
            state.soBanChoi += 1;
            return { ...state };
        }
        case 'RESET_GAME': {
            state.magXucXac = [
                { hinhAnh: './img/gameXucXac/1.png', diem: 1 },
                { hinhAnh: './img/gameXucXac/1.png', diem: 1 },
                { hinhAnh: './img/gameXucXac/1.png', diem: 1 },
            ];
            state.soBanThang = 0;
            state.soBanChoi = 0;
            state.ketQua = '';
            state.banChon = true;
            return { ...state };
        }
        default : return state
    }
}