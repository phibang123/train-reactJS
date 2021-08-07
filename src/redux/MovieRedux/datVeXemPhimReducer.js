import stateDefaultJSON from '../../assets/data/dataDanhSachGhe.json'

const stateDefault = stateDefaultJSON

export const datVeXemPhimReducer = (state = stateDefault, action) =>
{

    
    switch (action.type)
    {
        case "CHON_GHE": {
            const gheChon = action.payload
            const baseData = state;
            const updateData = baseData?.map(row =>
            {
                const hangGhe = row;
                hangGhe?.danhSachGhe?.map(ghe =>
                    {
                        const data = ghe;
                        if (ghe.soGhe === gheChon.soGhe)
                        {
                            data.state === "DA_DAT" ? alert('Đã đặt hàng') : data.state = "CHON"    
                        }
                        return data
                })
                return hangGhe
            })
            return [...updateData];
        }
        
        case "DAT_GHE": {
            const baseData = state;
            const updateData = baseData?.map(row =>
            {
                const hangGhe = row;
                hangGhe?.danhSachGhe?.map(ghe =>
                {
                    const data = ghe;
                    if (ghe?.state === "CHON")
                    {
                        data.state = "DA_DAT";
                    }
                    return data
                })
                return hangGhe
            })
            return [...updateData];
        }
        
        
        case 'XOA_GHE': {
            const baseData = state;
            const updateData = baseData?.map(row =>
            {
                const hangGhe = row;
                hangGhe?.danhSachGhe?.map(ghe =>
                {
                    const data = ghe;
                    if(ghe.soGhe === action.payload)
                        data.state = "TRONG";
                    return data
                })
                return hangGhe
            })
            return [...updateData];
        }
            
        case 'CLEAR': {
            const baseData = state;
            const updateData = baseData?.map(row =>
            {
                const hangGhe = row;
                hangGhe?.danhSachGhe?.map(ghe =>
                {
                    const data = ghe;
                    data.state = "TRONG";
                    return data
                })
                return hangGhe
            })
            return [...updateData];
        }
		default:
			return state;
	}
};
