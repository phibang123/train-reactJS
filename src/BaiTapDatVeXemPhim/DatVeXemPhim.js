import React, { Component } from 'react';

import DanhSachGhe from './DanhSachGhe'
import GheChon from './GheChon';

export default class DatVeXemPhim extends Component {
    render() {
        return (
            <div className="Index">
                <div className="row">
                    <div className="col-8">
                        <DanhSachGhe></DanhSachGhe>
                    </div>
                    <div className="col-4">
                        <GheChon></GheChon>
                    </div>
                </div>
            </div>
        )
    }
}
