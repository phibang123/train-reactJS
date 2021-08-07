import "./baiTapGameOanTuTi.css";

import React, { Component } from "react";

import { connect } from "react-redux";

class KeoBuaBao extends Component {
	render() {
		let { banChon } = this.props;
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
							src={`/img/oanTuTi/${banChon}.png`}
							style={{ backgroundColor: "white", width: "50%" }}
						></img>
					</button>
                    
				</div>
				<div>
					<img src="./img/oanTuTi/player.png" style={{ width: "100%" }}></img>
					<div className="row">
						<div className="col-4">
							<button
								className="btn"
								style={{ backgroundColor: "white" }}
								onClick={() => {
									const action = {
										type: "PLAYER_CHOSE",
										banChon: "keo",
									};
									this.props.dispatch(action);
								}}
							>
								<img
									src="/img/oanTuTi/keo.png"
									style={{ width: "100%", backgroundColor: "white" }}
								></img>
							</button>
						</div>
						<div className="col-4">
							<button
								className="btn"
								style={{ backgroundColor: "white" }}
								onClick={() => {
									const action = {
										type: "PLAYER_CHOSE",
										banChon: "bua",
									};
									this.props.dispatch(action);
								}}
							>
								<img
									src="/img/oanTuTi/bua.png"
									style={{ width: "100%", backgroundColor: "white" }}
								></img>
							</button>
						</div>
						<div className="col-4">
							<button
								className="btn"
								style={{ backgroundColor: "white" }}
								onClick={() => {
									const action = {
										type: "PLAYER_CHOSE",
										banChon: "bao",
									};
									this.props.dispatch(action);
								}}
							>
								<img
									src="/img/oanTuTi/bao.png"
									style={{ width: "100%", backgroundColor: "white" }}
								></img>
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
const mapStateToPros = (rootReducer) => {
	return {
		banChon: rootReducer.baiTapGameOanTuTiReducer.banChon,
	};
};
export default connect(mapStateToPros)(KeoBuaBao);
