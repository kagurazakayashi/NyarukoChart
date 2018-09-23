//单组
import React, { Component } from 'react';
import NCHistogramHis from './NCHistogramHis.js';

export default class NCHistogramGroup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            histop:0
        };
    }
    arrquicksort(arr) {
        var arrx = arr;
        if (arrx.length <= 1) return arrx;
        var pivotIndex = Math.floor(arrx.length / 2);
        var pivot = arrx.splice(pivotIndex, 1)[0];
        var left = [];
        var right = [];
        for (var i = 0; i < arrx.length; i++) {
            if (arrx[i] < pivot) {
                left.push(arrx[i]);
            } else {
                right.push(arrx[i]);
            }
        }
        return this.arrquicksort(left).concat([pivot], this.arrquicksort(right));
    }
    render() {
        let self = this;
        const datac = Object.assign([],self.props.data);
        var toparr = self.arrquicksort(datac);
        let etop = 100 - (toparr[toparr.length-1] * self.props.step);
        return (
            <div className="NCHistogramGroup" style={{'width':this.props.groupwidth}}>
                <div className="NCHistogramGroupT">{
                    self.props.data.map(function(v,i){
                        let pheight = self.props.step * v;
                        return <NCHistogramHis hiswidth={self.props.hiswidth} colordata={self.props.colordata[i]} pheight={pheight+"%"} ptop={etop+"%"} key={i} ref="NCHistogramHis" />;
                    })
                }</div>
                <div className="NCHistogramGroupB">{this.props.groupname}</div>
            </div>
        );
    }
}