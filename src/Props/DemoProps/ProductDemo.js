import React, { Component } from "react";

export default class ProductDemo extends Component {
	render() {
		let {product} = this.props
		return (
			<div className="card">
				{/* <img src="https://picsum.photos/200/653" /> */}
				<img src="https://picsum.photos/200/653"></img>
				<div className="card-body bg-dark">
                    {/* <h3>{ this.props.productName }</h3>
                    <h3>{ this.props.price}</h3> */}
					 <h3>{ product.name }</h3>
                    <h3>{ product.price}</h3>
				</div>
			</div>
		);
	}
}
