import React, { Component } from 'react'

export default class ProductItem extends Component {
    render()
    {
        let {item}  = this.props
        return (
  
                <div className="card">
						<img src={item.img} height="300" />
						<div className="card-body">
							<h3>{item.name}</h3>
							<p>{item.price.toLocaleString()}</p>
							<button
								className="btn btn-success"
                                class="btn btn-primary"
                                data-toggle="modal"
                                data-target="#modelId"
                        onclick={() => { this.props.viewDetail(item) }}
                        
                        // onClick={()=>{
                        //     this.props.viewDetail(item);
                        // }}
							>
								Xem chi tiết
							</button >
						</div>
					</div>
  
        )
    }
}
