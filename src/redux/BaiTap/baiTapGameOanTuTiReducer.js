const stateDefault = {
    soBanChoi: 0,
    soBanThang: 0,
    banChon: 'keo',
    mayChon: 'keo',
    ketQua: '',
    
}

export const baiTapGameOanTuTiReducer = (state = stateDefault, action) => {
    console.log(action)
    switch (action.type)
    {
        case 'PLAYER_CHOSE': {
            state.banChon = action.banChon;
            return {...state}
        }
        case 'PLAY_GAME': {
            const random = Math.floor(Math.random() * action.arrayRanDom.length);
            state.mayChon = action.arrayRanDom[random];
            console.log("máy",action.arrayRanDom[random]);
            state.soBanChoi += 1;
            //xử lý thắng cuộc
            switch (state.banChon)
            {
                case 'keo': {
                    if (state.mayChon === 'keo')
                    {
                        state.ketQua = 'Draw'
                    }
                    else if (state.mayChon === 'bua')
                    {
                        state.ketQua = 'Lose'
                    }
                    else if (state.mayChon === 'bao')
                    {
                        state.ketQua = 'Win';
                        state.soBanThang += 1;
                    }
                    return { ...state };
                }
                case 'bua': {
                    if (state.mayChon === 'keo')
                    {
                        state.ketQua = 'Win';
                        state.soBanThang += 1;
                    }
                    else if (state.mayChon === 'bua')
                    {
                        state.ketQua = 'Draw'
                        
                    }
                    else if (state.mayChon === 'bao')
                    {
                        state.ketQua = 'Lose'                      
                    }
                    return { ...state };
                }
                case 'bao': {
                    if (state.mayChon === 'keo')
                    {
                        state.ketQua = 'Lose'
                    }
                    else if (state.mayChon === 'bua')
                    {
                        state.ketQua = 'Win';
                        state.soBanThang += 1;
                    }
                    else if (state.mayChon === 'bao')
                    {
                        state.ketQua = 'Draw'
                        
                    }
                    return { ...state };
                }
                default : return state
            }
            // if ((state.banChon && tongDiem > 11)||(!state.banChon && tongDiem< 11))
            // {
            //     state.soBanThang += 1;
            //     state.ketQua = 'Win'
            // }
            // return { ...state };
            
        }
        case 'RESET_GAME': {
            
            state.soBanChoi = 0;
            state.soBanThang = 0;
            state.banChon = 'keo';
            state.mayChon = 'keo';
            state.ketQua = '';
            return { ...state };
        }
        default : return state
    }
   
}