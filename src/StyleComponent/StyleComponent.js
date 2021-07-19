import React, { Component } from 'react'

import Style from './StyleComponent.module.css'

export default class StyleComponent extends Component {
    render()
    {
        let margin = 80;
        return (
            <div>
                style component
                <p>aloalo</p>
                <p style={{
                    margin: `${ margin }px`,
                    padding: `50px`
                }} className={`${ Style.fontBold } ${ Style['p-green'] }`}>1213123</p>
            </div>
        )
    }
}
