import React, { Component } from "react";

export default class BaiTapThuKinh extends Component
{
    
    state = {
        imgClass: "",
        imgHuman: ""
   }
    eventChangeImg = (numberImg) => 
    {
        this.setState({
          imgHuman: `./img/glassesImage/model.jpg`,
           imgClass: `./img/glassesImage/v${numberImg}.png`
                })
    }

	render() {
		return (
			<div className="text-center">
				<h3 className="p-5 mb-5 bg-dark">TRY GLASSES APP ONGLINE</h3>
				<div className="container ">
					<div className=" d-flex mb-5">
						<div
                            className="col-5"
                            
							style={{
								backgroundImage: `URL(${this.state.imgHuman})`,
								backgroundRepeat: `no-repeat`,
                                position: `relative`,
                            
                                
							}}
						>
							<img
								src={this.state.imgClass}
								className="w-35"
								style={{
									position: `absolute`,

									top: ` 150px`,
									left: `103px`,
									width: `60%`,
									opacity: ` 0.7`,
								}}
								alt=""
							/>
						</div>

						<div className=" col-2 row ml-3">
							<div className="col-12 m-2">
								<button className="btn" onClick={() => { this.eventChangeImg('1') }}>
							
									<img
										style={{
											height: `80px`,
										}}
										src="./img/glassesImage/v1.png"
										className="mw-100 h-10"
										alt=""
									/>
								</button>
							</div>
							<div className="col-12 m-2">
								<button className="btn" onClick={() => { this.eventChangeImg('2') }}>
								
									<img
										style={{
											height: `80px`,
										}}
										src="./img/glassesImage/v2.png"
										className="mw-100"
										alt=""
									/>
								</button>
							</div>
							<div className="col-12 m-2">
								<button className="btn" onClick={() => { this.eventChangeImg('3') }}>
									<img
										style={{
											height: `80px`,
										}}
										src="./img/glassesImage/v3.png"
										className="mw-100"
										alt=""
									/>
								</button>
							</div>
							<div className="col-12 m-2">
								<button className="btn" onClick={() => { this.eventChangeImg('4') }}>
									<img
										style={{
											height: `80px`,
										}}
										src="./img/glassesImage/v4.png"
										className="mw-100"
										alt=""
									/>
								</button>
							</div>
							<div className="col-12 m-2">
								<button className="btn" onClick={() => { this.eventChangeImg('5') }}>
									<img
										style={{
											height: `80px`,
										}}
										src="./img/glassesImage/v5.png"
										className="mw-100"
										alt=""
									/>
								</button>
							</div>
							<div className="col-12 m-2">
								<button className="btn" onClick={() => { this.eventChangeImg('6') }}>
									<img
										style={{
											height: `80px`,
										}}
										src="./img/glassesImage/v6.png"
										className="mw-100"
										alt=""
									/>
								</button>
							</div>
							<div className="col-12 m-2">
								<button className="btn" onClick={() => { this.eventChangeImg('7') }}>
									<img
										style={{
											height: `80px`,
										}}
										src="./img/glassesImage/v7.png"
										className="mw-100"
										alt=""
									/>
								</button>
							</div>
							<div className="col-12 m-2">
								<button className="btn" onClick={() => { this.eventChangeImg('8') }}>
									<img
										style={{
											height: `80px`,
										}}
										src="./img/glassesImage/v8.png"
										className="mw-100"
										alt=""
									/>
								</button>
							</div>
							<div className="col-12 m-2">
                                <button className="btn" onClick={() => { this.eventChangeImg('9') }}>
									<img
										style={{
											height: `80px`,
										}}
										src="./img/glassesImage/v9.png"
										className="mw-100"
										alt=""
									/>
								</button>
							</div>
						</div>

						<div className="col-5">
							<img src="./img/glassesImage/model.jpg" className="w-35" alt="" />
						</div>
					</div>
				</div>
			</div>
		);
	}
}
