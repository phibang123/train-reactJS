import React, { Component } from 'react'

import Child from './Child'

export default class LifeCycleReact extends Component
{
    //1(constructor)-mount
    constructor(props)
    {
        super(props)
        this.state = {
            number: 1,
            like: 1,
            product: {
                id: 1,
                name: 'Iphone'
            }
        }
        
        console.log('contructor')
    }
    //2(getDerivedStateFromProps)-mount-update
    static getDerivedStateFromProps(newProps, currenState)
    {
        console.log('getDerivedStateFromProps')
        return null
    }
        //3(shouldComponentUpdate)-update
        shouldComponentUpdate(newProps1, newState)
        {
            console.log('shouldComponentUpdate')
            return true 
        }
    //4(render)-mount-update
    render()
    {
        console.log('render')
        return (
            <div className="container">
                <h3 className='text-center'>LifeCycle React</h3>
                <h3>Number: {this.state.number}</h3>
                <button className="btn btn-success" onClick={() =>
                {
                    this.setState({
                        number: this.state.number + 1
                    })
                }}>+ </button>
                <h3>product Name parent:{this.state.product.name}</h3>
                <button className="btn btn-success" onClick={() =>
                {
                    let product = this.state.product
                    product.name = 'SamSung galaxy note 10  '
                    this.setState({
                        product: {...product}
                    })
                }}>change product </button>
                {this.state.number > 2  ?  '' : <Child  product={this.state.product}></Child> }
                
            </div>
        )
        
    }
    //5(componentDidMount)-mount
    componentDidMount()
    {
        //Nghiệp vụ api hoặc thư viện
        console.log('componentDidMount')
    }
    //6(componentDidUpdate)-update
    componentDidUpdate(prevProps,prevState)
    {
        console.log('componentDidUpdate')
        
    }




    //unmount --biến mất khổi giao diện
    componentWillUnmount()
    {
        console.log('componentWillUnmount')
    }

}
