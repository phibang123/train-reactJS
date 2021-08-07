import React, { Component } from 'react'

import { connect } from 'react-redux'

class KetQuaTroChoi extends Component {
    render()
    {
        let {soBanChoi,ketQua,soBanThang} = this.props.baiTapGameOanTuTiReducer
        return (
            <div>
                <h2 className="text-center" style={{ color: '#FFA400' }} >I'm Iron man, I Love<br></br> you 3000</h2>
                <div>
                    <h1 className="text-center" style={{ color: '#6BEB74' }}>Kết Quả: <span className="text-warning" style={{ color: '#FFA400' }}>{ ketQua}</span></h1>
                </div>
                <div>
                    <h2 className="text-center" style={{ color: '#6BEB74' }}>Số bàn thắng: <span className="text-warning" style={{ color: '#FFA400' }}>{soBanThang}</span></h2>
                </div>
                <div>
                    <h2 className="text-center" style={{ color: '#6BEB74' }}>Số bàn chơi: <span className="text-warning" style={{ color: '#FFA400' }}>{ soBanChoi}</span></h2>
                </div>
                <div className="text-center mt-5">
                    <button className="btn btn-primary " onClick={() =>
                    {
                        const action = {
                            type: 'PLAY_GAME',
                            arrayRanDom : ['keo', 'bua', 'bao']
                        }
                        this.props.dispatch(action)
                    }}>Play Game</button>
                    <br />
                    <br/>
                    <br/>
                    <button className="btn btn-warning " onClick={() =>
                    {
                        const action = {
                            type: 'RESET_GAME',
                            
                        }
                        this.props.dispatch(action)
                    }}>Reset Game</button>
                </div>
            </div>
        )
    }
}
const mapStateToPros = (rootReducer) =>
{
    return {
        baiTapGameOanTuTiReducer: rootReducer.baiTapGameOanTuTiReducer
    }
}
export default connect(mapStateToPros)(KetQuaTroChoi)
