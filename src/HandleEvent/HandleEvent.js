import React, { Component } from 'react'

export default class HandleEvent extends Component
{
    hendleClick = () =>
    {
        alert("bằng đẹp trai");
    }
    showMessage = (mess) =>
    {
        alert(`hello  ${mess}`)
    }
    render()
    {
        let name = "Bằng"
       
        return (
            <div class="container">
                <button id="btn" onClick={this.hendleClick /*Không dấu mở  vì khi dấu mở nó sẻ hiển thị re luôn */}>Click Me</button>



                <button id="btn" onClick={(event) =>
                {
                    // event.target.style.backgroundColor = 'red';
                    // alert(`${ name } đẹp trai`)
                    this.showMessage('Sĩ')
                } }>Click Me</button>
            </div>
           
        )
    }
}
