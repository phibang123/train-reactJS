import React, { Component } from "react";

export default class Demo extends Component
{
    /*Chúng ta có thể render biến, thuộc tính, hàm */
    name = 'Sĩ'

    renderName = () => //hàm
    {
        return <span>
               {this.name}  đẹp trai
        </span>
    }
  
    render() 
    {
        let productName = 'i Phone';
        let product = {
            name: 'Iphone 13',
            price: 10000,
        }
        return (
           
        
        
            <div className="container">
                <h3>Sản Phẩm của : {this.renderName() }</h3>
				<div className="card bg-dark w-25 bg-text ">
					<img src="https://picsum.photos/200/200" />

                    <div className="card-body  text-white">
                        <h3>{ productName}</h3>
                        <h3>{ product.name}</h3>
                        <p>{product.price}</p>
						<button className="btn btn-succes">Xem chi tiet61</button>
					</div>
				</div>
			</div>
		);
	}
}
