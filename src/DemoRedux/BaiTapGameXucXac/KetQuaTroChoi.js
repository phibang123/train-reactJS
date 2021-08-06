import React, { Component } from 'react'

import { connect } from 'react-redux'

class KetQuaTroChoi extends Component {
    render()
    {
        let { soBanThang, soBanChoi, banChon,ketQua } = this.props.baiTapGameXucXacReducer
        //lý giải tại sao có this.props.baiTapGameXucXacReducer vì bạn lấy hết baiTapGameXucXacReducer rồi chỉ lấy phần tử bên trong đó thôi
        return (
            <div className="container text-center">
                <div className="display-4">
                    Kết quả: <span className="text-primary">{ ketQua}</span>
                </div>
                <div className="display-4">
                    Bạn chọn: <span className="text-warning">{banChon ? 'Tài' : 'Xủi'}</span>
                </div>
                <div className="display-4">
                    Số bàn thắng: <span className="text-success">{ soBanThang}</span>
                </div>
                <div className="display-4">
                    Tổng lần chơi: <span className="text-primary">{ soBanChoi}</span>
                </div>
                <button className="btn bg-success">
                    <div className="display-4" onClick={() =>
                    {
                        const action = {
                            type: 'PLAY_GAME',
                            
                        }
                        this.props.dispatch(action)
                    }}>Play Game</div>
                </button>
         
                <br />
                <br/>
                <button className="btn btn-default" onClick={() =>
                {
                    const action = {
                        type : 'RESET_GAME'
                    }
                    this.props.dispatch(action)
                }}>Reset Game</button>
            </div>
        )
    }
}
const mapStateToProps = (rootReducer) =>
{
    return {
        baiTapGameXucXacReducer: rootReducer.baiTapGameXucXacReducer,
        // banChon: rootReducer.baiTapGameXucXacReducer.banChon,
        // soBanThang: rootReducer.baiTapGameXucXacReducer.soBanThang,
        // soBanChoi: rootReducer.baiTapGameXucXacReducer.soBanChoi
    }
}

export default connect(mapStateToProps)(KetQuaTroChoi);