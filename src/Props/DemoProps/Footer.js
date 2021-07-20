import React, { Component } from 'react'

export default class Footer extends Component {
    render()
    {
        
         /*
            this.props: là 1 thuộ tính có sẵn của react class
            component dùng để nhận giá trị tư component cah truyền vào
            (component)
          
        */
        console.log('this.props', this.props);
        return (
            
            <footer style={{backgroundColor:this.props.bgColor}} className=" text-white text-center">

                <h3>{this.props.content}</h3>
            </footer>
        )
    }
}
