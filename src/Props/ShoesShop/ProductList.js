import React, { Component } from 'react'

import ProductItem from './ProductItem';

export default class ProductList extends Component
{
  
    
    renderProduct = () =>
    {
        
        return this.props.arrProduct.map((product, index) =>
        {
            return <div className="col-4 mt-2" key={index}>
                {/* <div className="card">
                     <img src={product.image}></img>
                    <div  className="card-body bg-dark text-white">
                        <h3>{product.name}</h3>
                        <p>{product.price}</p>
                        <p>{product.description}</p>
                    </div>
            </div> */}
                <ProductItem prd={product}></ProductItem>
            </div>
            
        });
     
   }
    render()
    {

        return (
            <div className="row text-center">
                  <h3 >Shoes shop</h3>
                <div className="row">
                    {/* <div className="col-4">
                       <ProductItem></ProductItem>
                    </div>
                    <div className="col-4">
                       <ProductItem></ProductItem>
                    </div>
                    <div className="col-4">
                       <ProductItem></ProductItem>
                    </div>
                     */}
                       {this.renderProduct()}
                 
                </div>
            </div>
        )
    }
}
