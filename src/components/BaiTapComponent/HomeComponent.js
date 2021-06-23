import React, { Component } from "react";

import HeaderComponent from "./HeaderComponent";
import MenuComponent from "./MenuComponent";
import SectionComponent from "./SectionComponent";

export default class HomeComponent extends Component {
	render() {
		return (
			<div>
				<div className="container-fuild">
					<div className="row">
						<div className="col-12">
                            <HeaderComponent></HeaderComponent>
                            <MenuComponent></MenuComponent>
                            <SectionComponent></SectionComponent>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
