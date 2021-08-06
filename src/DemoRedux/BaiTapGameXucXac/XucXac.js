import React, { Component } from 'react'

import { connect } from 'react-redux'

//không cần dùng export default vì phải kết hợp component tạo component mới
/*export default*/ class XucXac extends Component
{
    renderKetQua = () =>
    {
        //tính tổng điểm
        let tongDiem = this.props.magXucXac.reduce((tong, xxnn, index) =>
        {
            return tong += xxnn.diem;
        }, 0)
        //kết hợp toán tử ba ngôi và phép gán
        
        let ketQua = tongDiem > 11 ? 'Tài' : 'Xủi';
        // if ((this.props.state.banChon && tongDiem > 11)||(!this.props.state.banChon && tongDiem< 11))
        //     {
        //     // this.props.state.soBanThang += 1;
        //     return `You Win`
        //     }
        return  `${tongDiem} - ${ketQua}`
    }
    render()
    {
        //prop(redux)

        let { magXucXac } = this.props; //mangXucXac phải giống chử màu trang81 ở dưới
        return (
            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <button className="btn-danger btn">
                            <div className="p-5 display-4" onClick={() =>
                            {
                                const action = {
                                    type: 'DAT_CUOC',
                                    banChon: true
                                }
                                //props từ redux cung cấp(this.props.dispatch)
                                //dùng hàm dispatch gửi dử liệu lên reducer
                                this.props.dispatch(action)
                                
                            }}>Tài</div>
                        </button>
                    </div>
                    <div className="col-6 text-center">
                        {/* do cố định chỉ có 3 con xuc xắc nên không cần dùng map */}
                        <img src={magXucXac[0].hinhAnh} width={50} alt="..."></img>
                        <img src={magXucXac[1].hinhAnh} width={50} alt="..."></img>
                        <img src={magXucXac[2].hinhAnh} width={50} alt="..."></img>
                        <br />
                        <br />
                        <br/>
                        <div className="display-4">
                            {this.renderKetQua()}
                        </div>
                    </div>
                    <div className="col-3">
                    <button className="bg-dark text-white btn">
                            <div className="p-5 display-4" onClick={() =>
                            {
                                const action = {
                                    type: 'DAT_CUOC',
                                    banChon: false
                                }
                                this.props.dispatch(action)
                            }}>Xủi</div>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

//hàm này giúp lấy dữ liệu redux(State) từ redux về


const mapStateToProps = (rooReducer) =>
{
    console.log('btGameXucXac',rooReducer.baiTapGameXucXacReducer)
    //rooReducer sẻ lấy state trong config về 
    return {
        //sao đó bạn phải lấy tên state trong rooReducer ra
        magXucXac /* đây là tên gán */: rooReducer.baiTapGameXucXacReducer.magXucXac /* đây là đường dẩn state (Object*/
        //vì chỉ lấy 1 phần tử của object nên chúng ta cần phải chấm vào phần tử đó
    }
}


export default connect(mapStateToProps)(XucXac)