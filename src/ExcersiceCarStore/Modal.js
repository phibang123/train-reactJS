import React, { Component } from "react";

export default class Models extends Component {
    render()
    {
        let {ProductDetail} = this.props
		return (
			<div>
			
				
				<div
					className="modal fade"
					id="modelId"
					tabIndex={-1}
					role="dialog"
					aria-labelledby="modelTitleId"
					aria-hidden="true"
				>
					<div className="modal-dialog" role="document">
						<div className="modal-content">
							<div className="modal-header">
                                <h5 className="modal-title">{ProductDetail.name}</h5>
								<button
									type="button"
									className="close"
									data-dismiss="modal"
									aria-label="Close"
								>
									<span aria-hidden="true">×</span>
								</button>
							</div>
                            <div className="modal-body">
                                <img className="mw-100" src={ProductDetail.img}></img>
                            </div>
							<div className="modal-footer">
								<button
									type="button"
									className="btn btn-secondary"
									data-dismiss="modal"
								>
									Close
								</button>
								<button type="button" className="btn btn-primary">
									Save
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
