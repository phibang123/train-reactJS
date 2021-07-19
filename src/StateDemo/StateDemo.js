import React, { Component } from "react";

export default class StateDemo extends Component {
	/*thuộ tính statee 
    + là thuộc tính có sẵn class component dùng để chứa giá trị trên giao diện khi người dùng thao tác
    keyup, keydown, blur....
    */

	state = {
		isLogin: false,
		Fsize: 15,
		imgSrc: './img/CarBasic/products/red-car.jpg'
	};
	// isLogin = false;

	userName = "Bằng";

	renderLogin = () => {
		if (this.state.isLogin) {
			return (
				<span className="font-weight-blod text-white">
					Hello {this.userName}
				</span>
			);
		}
		return (
			<button
				onClick={() => {
					this.handleLogin();
				}}
				className="btn btn-outline-success"
			>
				Đăng nhập
			</button>
		);
	};
	handleLogin = () => {
		// this.state.isLogin = true; không đc gán giá trị state trực tiếp mà phải thông qua getState
		/*
            this.setState(newState){
             +phương thức này do react class component cung cấp. dùng để thay đổi giá trị state
             +setState đc gọi thì giao diện sẻ đc render lại(hàm rendersẻ chạy lại)
             +Phương thức setState là phương thức bất đồng bộ
            }
        */
		let newState = {
			isLogin: true,
		};
		this.setState(newState);
		//thay đổi giá trị state và render giao diện
		// this.setState(newState, () =>
		// {
		//     console.log(this.state.isLogin);
		// })
		//nó hơi chậm nên consol.log không đợi nó chạy luôn nếu muốn chạy xong mới console
		//+1 async await
		/*+2
              this.setState(newState, () =>
           {
                console.log(this.state.isLogin);
               })
        */
		console.log(this.state.isLogin);
	};
	handleChangeColor = (color) =>
	{
		this.setState({
			imgSrc: `./img/CarBasic/products/${color}-car.jpg`
		})
	}
	render() {
		return (
			<div>
				<div className="container">
					<nav className="navbar navbar-expand-sm navbar-dark bg-dark">
						<a className="navbar-brand" href="#">
							Navbar
						</a>
						<button
							className="navbar-toggler d-lg-none"
							type="button"
							data-toggle="collapse"
							data-target="#collapsibleNavId"
							aria-controls="collapsibleNavId"
							aria-expanded="false"
							aria-label="Toggle navigation"
						/>
						<div className="collapse navbar-collapse" id="collapsibleNavId">
							<ul className="navbar-nav mr-auto mt-2 mt-lg-0">
								<li className="nav-item active">
									<a className="nav-link" href="#">
										Home <span className="sr-only">(current)</span>
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#">
										Link
									</a>
								</li>
								<li className="nav-item dropdown">
									<a
										className="nav-link dropdown-toggle"
										href="#"
										id="dropdownId"
										data-toggle="dropdown"
										aria-haspopup="true"
										aria-expanded="false"
									>
										Dropdown
									</a>
									<div className="dropdown-menu" aria-labelledby="dropdownId">
										<a className="dropdown-item" href="#">
											Action 1
										</a>
										<a className="dropdown-item" href="#">
											Action 2
										</a>
									</div>
								</li>
							</ul>
							<div className="form-inline my-2 my-lg-0">
								{/* {this.isLogin ? <span className="font-weight-blod text-white">Hello { this.userName}</span>:<button className="btn btn-outline-succes">Đăng nhập</button>} */}
								{this.renderLogin()}
							</div>
						</div>
					</nav>
					<h3>Bài tập tăng giảm font chử</h3>
					<p style={{ fontSize: `${this.state.Fsize}px` }}>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
						ducimus esse a placeat necessitatibus tenetur, earum enim cum est
						molestias voluptatem provident accusantium, qui non, veniam in
						maiores commodi. Quas.
					</p>
					<button
						className="btn btn-outline-success mr-2"
						onClick={() => {
							this.setState({ Fsize: this.state.Fsize + 2 });
						}}
					>
						+
					</button>
					<button
						className="btn btn-outline-danger mr2"
						onClick={() => {
							this.setState({ Fsize: this.state.Fsize - 2 });
						}}
					>
						-
					</button>
            
					<div className="container d-flex">
						<div className="col-6">
							<img
								src={this.state.imgSrc}
								alt="..."
								className="w-100"
							/>
						</div>
						<div className="col-6">
							<h3>Bài TẬp Chọn Xe</h3>
							<div className="row">
								<div className="col-3">
									<button style={{ background: 'red' }} onClick={() => {this.handleChangeColor('red')}}  /* onClick={()=>{this.setState({imgSrc:'./img/CarBasic/products/red-car.jpg'})}} */className="btn text-white">Red</button>
								</div>
								<div className="col-3">
						
									<button onClick={() => { this.handleChangeColor('silver') }} style={{background:'silver'}} /*  onClick={()=>{this.setState({imgSrc:'./img/CarBasic/products/black-car.jpg'})}} */ className="btn text-white">Silver</button>
								</div>
								<div className="col-3">
									
									<button onClick={() => { this.handleChangeColor('Black') }} style={{background:'Black'}}/*  onClick={()=>{this.setState({imgSrc:'./img/CarBasic/products/black-car.jpg'})}} */className="btn text-white">Black</button>
								</div>
								<div className="col-3">
									<button onClick={() => { this.handleChangeColor('Gray') }} style={{background:'Gray'}} /*onClick={()=>{this.setState({imgSrc:'./img/CarBasic/products/steel-car.jpg'})}} */ className="btn text-white">Steel</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
