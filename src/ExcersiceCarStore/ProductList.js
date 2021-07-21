import React, { Component } from "react";

import ProductItem from "./ProductItem";

export default class ProductList extends Component {
    renderSanPham = () =>
    {
       let {productData,viewDetail} = this.props
		return productData.map((product, index) => {
			return (
				<div className="col-3" key={index}>
                    <ProductItem item={product} viewDetail={viewDetail}></ProductItem>
				</div>
			);
		});
	};
	render() {
        return <div className="row">
                        {this.renderSanPham()}
            </div>;
	}
}
