import React, { Component } from 'react'

export default class ProductItem extends Component {
    render()
    {
        let {prd} = this.props
        console.log(prd.image);
        return (
            <div className="card">
                <img src={prd.image}></img>
                <div className="card-body">
                    <h5 style={{height: '55px'}}>{prd.name}</h5>
                    <span>{prd.price}</span>
                    <br></br>
                    <button className="p-2 mt-2" style={{backgroundColor: '#000000',border: "None",color:"white"}}>Add to card</button>
                </div>
            </div>
        )
    }
}
