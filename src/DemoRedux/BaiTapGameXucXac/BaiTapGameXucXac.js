import './baiTapGameXucXac.css' //ảnh hưởng toàn bộ ứng dụng

import React, { Component } from 'react'

import KetQuaTroChoi from './KetQuaTroChoi'
import XucXac from './XucXac'

export default class BaiTapGameXucXac extends Component
{
    render() {
        return (
            <div className="bg-game">
                <h3 className="text-center mt-5 display-4">Bài Tập Game Xúc Xắc</h3>
               
                <XucXac></XucXac>
                <KetQuaTroChoi></KetQuaTroChoi>
            </div>
        )
    }
}
