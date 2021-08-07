import React, { Component } from "react";

import { connect } from "react-redux";

class PlayGame extends Component {
    render()
    {
        let{mayChon} = this.props
		return (
			<div>
				<div>
					<button
						style={{
							outline: "none",
							backgroundColor: "white",
							border: "8px solid #45d994",
						}}
						className="speech-bubble"
					>
						<img
							src={`/img/oanTuTi/${mayChon}.png`}
							style={{ backgroundColor: "white", width: "50%" }}
						></img>
					</button>
				</div>
				<div>
					<img src="./img/oanTuTi/playerComputer.png" style={{ width: "100%" }}></img>
				</div>
			</div>
		);
	}
}
const mapStateToPros = (rootReducer) =>
{
    return {
        mayChon: rootReducer.baiTapGameOanTuTiReducer.mayChon
    }
}
export default connect(mapStateToPros)(PlayGame)