import React, { Component } from 'react'

export default class RenderWithMap extends Component
{
    
    arrProduct = [
        {id: 1, name: 'I phone', price: 1000,img: 'https://picsum.photos/id/1/200/200'},
        {id: 2, name: 'I Pad', price: 2000,img: 'https://picsum.photos/id/2/200/200'},
        {id: 3, name: 'I Max', price: 3000,img: 'https://picsum.photos/id/3/200/200'}
    ]
    renderProduct = () =>
    {
        // let content = [];
        // for (let i = 0; i < this.arrProduct.length; i++)
        // {
        //     let product = this.arrProduct[i];
        //     let tagTr = <tr>

        //         <td>{product.id}</td>
        //         <td>{product.name}</td>
        //         <td>{product.price}</td>
        //         <td><img width={50} height={50  } src={product.img}/></td>
             
        //     </tr>
        //     content.push(tagTr);//[<tr>1</tr>,<tr>2</tr>,<tr>3</tr>]
        // }
        // return content

        let content = this.arrProduct.map((product, index) =>
        {
            return  <tr>

                     <td>{product.id}</td>
                     <td>{product.name}</td>
                     <td>{product.price}</td>
                     <td><img width={50} height={50  } src={product.img}/></td>
                 
                 </tr>
        })
        return content
    }
    renderProductCard = () =>
    {
        let content = this.arrProduct.map((product, index) =>
        {
            return <div className="col-4" >
                    <div className="card">
                       <img src={product.img}></img>
                    <div  className="card-body bg-dark text-white">
                        <h3>{product.name}</h3>
                        <p>{product.price}</p>
                    </div>
                  </div>
            </div>
        })
        return content;
    }
    render()
    {
        
        return (
            // [<div>1</div>,<div>2</div>]
            <div className="container">
                <h3>Danh sách sản phẩm</h3>
                <table className="table">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                            <th>image</th>
                            <th>price</th>
                         
                   
                        </tr>
                    </thead>
                    <tbody>
                    {/* {[<tr>1</tr>,<tr>2</tr>,<tr>3</tr>]} */}
                        {this.renderProduct()}
                    </tbody>
                  </table>
                <hr />
                <h3>Danh sách sản phẩn</h3>
                <div className="row">
                     {this.renderProductCard()}
                </div>
            </div>
        )
    }
}
