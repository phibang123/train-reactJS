import './baiTapGameOanTuTi.css'

import React, { Component } from 'react'

import KeoBuaBao from './KeoBuaBao'
import KetQuaTroChoi from './KetQuaTroChoi'
import PlayGame from './PlayGame'

export default class BaiTapGameOanTuTi extends Component {
    render() {
        return (
            <div className="container" >
        
                <div className="row mt-5">
                    <div className="col-3"><KeoBuaBao></KeoBuaBao></div>
                    <div className="col-6"><KetQuaTroChoi></KetQuaTroChoi></div>
                    <div className="col-3"><PlayGame></PlayGame></div>
                </div>
                <img src="./img/oanTuTi/bgGame.png" style={{width: '100%'}}></img>
            </div>
        )
    }
}
