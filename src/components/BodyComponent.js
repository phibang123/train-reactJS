import React, { Component } from "react";

import BannerComponent from "./NhanhComponent/BannerComponent";
import ItemComponent from "./NhanhComponent/ItemComponent";

export default class BodyComponent extends Component {
	render() {
		return (
			<div>
				<div className="pt-4">
					<BannerComponent />
                </div>
                <div className="py-4">
                  <ItemComponent/>
                </div>
			</div>
		);
	}
}
