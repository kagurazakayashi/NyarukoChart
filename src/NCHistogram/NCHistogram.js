import React, { Component } from 'react';
import './NCHistogram.css';
import NCHistogramBox from './NCHistogramBox';
import NCHistogramInfo from './NCHistogramInfo';
import NCHistogramNumberBox from './NCHistogramNumberBox';

export default class NCHistogram extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    loadjsondata(jsondata) {
        let json = JSON.parse(jsondata);
        let jinfo = json["i"];
        let jdata = json["d"];
        let datakey = Object.keys(jdata);
        let minmax = this.arrminandmax(this.arrmdto1d(Object.values(jdata)));
        let jx = jinfo["x"];
        let jy = jinfo["y"];
        let jt = jinfo["t"];
        let stepy = minmax[1] / jy;
        var ynames = [];
        var xnames = [];
        var showdata = [];
        var colordata = [];
        for (let i = 1; i <= jy; i++) {
            ynames.unshift(Math.floor(stepy * i));
        }
        for (let i = 1; i <= jx; i++) {
            const nowkey = datakey[datakey.length - i];
            xnames.unshift(nowkey);
            showdata.unshift(jdata[nowkey]);
        }
        for (let i = 0; i < jt.length; i++) {
            colordata.push(jt[i][1]);
        }
        this.refs.NCHistogramNumberBox.updatedata(ynames);
        this.refs.NCHistogramInfo.updatedata(jt);
        this.refs.NCHistogramBox.updatedata(xnames,showdata,colordata,minmax[1]);
    }
    arrmdto1d(arr) {
        return [].concat.apply([],arr);
    }
    arrquicksort(arr) {
        if (arr.length <= 1) return arr;
        var pivotIndex = Math.floor(arr.length / 2);
        var pivot = arr.splice(pivotIndex, 1)[0];
        var left = [];
        var right = [];
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] < pivot) {
                left.push(arr[i]);
            } else {
                right.push(arr[i]);
            }
        }
        return this.arrquicksort(left).concat([pivot], this.arrquicksort(right));
    }
    arrminandmax(arr) {
        let na = this.arrquicksort(arr);
        let max = na[na.length - 1];
        let min = na[0];
        return [min,max];
    }
    render() {
        return (
            <div className="NCHistogramBox">
                <NCHistogramNumberBox ref="NCHistogramNumberBox" />
                <NCHistogramBox ref="NCHistogramBox" />
                <NCHistogramInfo ref="NCHistogramInfo" />
            </div>
        );
    }
}