import "./baiTapBookingTicket.css";

import React, { Component } from "react";

import { connect } from "react-redux";

function danhSachGhe(props)
{
	console.log(props.dsGhe)

	const handleButtonClick = (ghe) => console.log(ghe);

	const renderRow = (arr) =>
		arr.map((ghe, i) =>
		{
			const classes = ghe?.state === 'DA_DAT' ? 'background-dat' : ghe?.state === 'CHON' ? 'background-chon' : ''
			return <button
				onClick={() =>
				{
					const action = {
						type: 'CHON_GHE',
						payload: ghe,
	
					}
					props.dispatch(action)
				}}
				className={`btn d-flex m-3 justify-content-center align-items-center ${classes}`}
				key={i}
			
				style={{ color: "black", width: 50, height: 50 }}
			>{`${ ghe.soGhe }`}</button>
			
		}
			)
		
		

	const renderGhe = () =>
	{
		return props.dsGhe?.map(
			(ghe, index) =>(
					<div className="col-12" key={index}>
						<div className="m-2 d-flex">
							<h4 className="text" style={{ width: '20px', color: "orange", lineHeight: "74px" }}>{ghe.hang}</h4>
							{renderRow(ghe.danhSachGhe)}
						</div>
					</div>
				)
		)
	}
	// renderGhe = () => this.props.datVeXemPhimReducer.map((ghe, index) =>
	//     index !== 0 &&
	//           <div className="col-12" key={index}>
	//                 <h4 style={{ color: 'orange', marginBottom: '30px' }}>{index}</h4>
	//                 <Ghe ghe={ghe}></Ghe>
	//            </div>
	//     )
	
	return (
		<div>
			<h3 className="text-center">
				ĐẶT VÉ XEM PHIM CYBERLEAR.VN
			</h3>
			<p className="text-center text-white">Màn Hình</p>
			<div className="m-auto screen"></div>
			<div>
				{renderGhe()}
			</div>
		</div>
	);
}
const mapStateToProps = (rootReducer) => {
	return {
		dsGhe: rootReducer.datVeXemPhimReducer
	};
};
export default connect(mapStateToProps)(danhSachGhe);


