import React, { Component, PureComponent } from 'react'

export default class Child extends PureComponent //PureComponent sẻ nhận biết cái Props truyền vào có thay đổi sẻ tự động render
{

    //PureComponent chỉ nhận biết giá trị thay dổi như string boolean number
    //PureComponent không nhận bik đc sự thay đổi của của bên trong thuộc tính object và mảng
    //nếu có object thay đổi của thằng cha
    //thì phải tạo mới cái object đó nó mới hiểu

    //1
    constructor(props)
    {
        super(props)
        this.state = {

        }
        this.timeOut ={}
        console.log('contructor Child')
    }
    //2
    static getDerivedStateFromProps(newProps, currenState)
    {
        console.log('getDerivedStateFromProps Child')
        return null
    }

   
    //3
    // shouldComponentUpdate(newProps, newState)
    // {
    //     console.log('new Props', newProps) //newprops chính là (this.props) nhưng là props mới thay đổi
    //     console.log('this-props',this.props)//this.props này là props củ
    //     console.log('shouldComponentUpdate')
    //     if (this.props.like === newProps.like) //nếu like thay đổi render
    //     {
    //         return false
    //     }
    //     return true 
    // }
    render()
    {
        console.log('render Child')
        return (
            <div>
                <h3>product child</h3>
                <div>id:{this.props.product.id}</div>
                <div>name:{this.props.product.name }</div>
                <footer className='p-5 bg-dark text-white text-center'>footer</footer>
            </div>
        )
    }
    componentDidMount()
    {
        console.log('componentDidMount Child')
        //hàm setInterval kích hoạt khoảng thờ gian 1 lần
        //dù bạn có làm component này mất đi hay chuyển hướng trang nó vẫn còn chạy
        this.timeOut = setInterval(() => {
            console.log('1')
        }, 1000 /*đơn vị mili giây 1000 = 1s */);
    }
    //6(componentDidUpdate)-update
    componentDidUpdate(prevProps,prevState)
    {
        //hạn chế setState trong hàm này
        //dùng if() để kiểm tra 
        //vì nó sẻ setState và vòng lặp vô tận
        console.log('componentDidUpdate')
        
    }
    //unmount --biến mất khổi giao diện
    componentWillUnmount()
    {
        //nó sẻ chậy trước khi component mất khỏi giao diện

        //thường dùng để hủy các biến chạy ngầm hoặc sử lý chuyển trang
        clearInterval(this.timeOut)
        console.log('componentWillUnmount child mất nè')
    }

}
