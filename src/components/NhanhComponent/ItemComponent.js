import React, { Component } from "react";

export default class ItemComponent extends Component {
	render() {
		return (
			<div>
				<div class="container px-lg-5">
					<div class="row gx-lg-5">
						<div class="col-lg-3 col-xxl-4 ">
							<div class="card bg-light border-0">
								<img
									className="mw-100 h-25 d-inline-block	"
									src="https://picsum.photos/seed/picsum/200/150"
								></img>

								<div class="card-body text-center h-100">
									<h2 class="fs-4 fw-bold">Card Title</h2>
									<p class="mb-5">
										lorem ipsum dolor sit amet, consectet lorem ipsum dolor sit
										amet, consectet lorem ipsum dolor sit amet, consectet
									</p>
									<a className="btn btn-primary btn-lg" href="#!">
										Call to action
									</a>
								</div>
							</div>
						</div>

						<div class="col-lg-3 col-xxl-4 ">
							<div class="card bg-light border-0 h-100">
								<img
									className="mw-100 h-25 "
									src="https://picsum.photos/seed/picsum/200/150"
								></img>
								<div class="card-body text-center ">
									<h2 class="fs-4 fw-bold">Card Title</h2>
									<p class="mb-5">
										lorem ipsum dolor sit amet, consectet lorem ipsum dolor sit
										amet, consectet lorem ipsum dolor sit amet, consectet
									</p>
									<a className="btn btn-primary btn-lg" href="#!">
										Call to action
									</a>
								</div>
							</div>
						</div>
						<div class="col-lg-3 col-xxl-4 ">
							<div class="card bg-light border-0 ">
								<img
									className="mw-100 h-auto d-inline-block"
									src="https://picsum.photos/seed/picsum/200/150"
								></img>
								<div class="card-body text-center ">
									<h2 class="fs-4 fw-bold">Card Title</h2>
									<p class="mb-5">
										lorem ipsum dolor sit amet, consectet lorem ipsum dolor sit
										amet, consectet lorem ipsum dolor sit amet, consectet
									</p>
									<a className="btn btn-primary btn-lg" href="#!">
										Call to action
									</a>
								</div>
							</div>
						</div>
						<div class="col-lg-3 col-xxl-4">
							<div class="card bg-light border-0 ">
								<img
									className="mw-100 h-25"
									src="https://picsum.photos/seed/picsum/200/150"
								></img>
								<div class="card-body text-center ">
									<h2 class="fs-4 fw-bold">Card Title</h2>
									<p class="mb-5">
										lorem ipsum dolor sit amet, consectet lorem ipsum dolor sit
										amet, consectet lorem ipsum dolor sit amet, consectet
									</p>
									<a className="btn btn-primary btn-lg" href="#!">
										Call to action
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
