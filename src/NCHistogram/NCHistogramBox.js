//图表显示框架
import React, { Component } from 'react';
import NCHistogramGroup from './NCHistogramGroup.js';

export default class NCHistogramBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            names:[],
            data:[],
            groupwidth:"0%",
            hiswidth:"0%",
            groupnum:0,
            hisnum:0,
            colordata:[],
            pcolordata:[],
            step:0,
            max:0
        };
    }
    updatedata(names,data,colordata,pcolordata,max) {        
        let groupnum = data.length;
        let groupwidth = (100 / groupnum) + "%";
        let hisnum = data[0].length;
        let hiswidth = (100 / hisnum) + "%";
        let step = 100 / max;
        this.setState({
            names:names,
            data:data,
            groupwidth:groupwidth,
            hiswidth:hiswidth,
            groupnum:groupnum,
            hisnum:hisnum,
            colordata:colordata,
            step:step,
            pcolordata:pcolordata,
            max:max
        });
    }
    render() {
        let self = this;
        return (
            <div className="NCHistogramHisBox">{
                self.state.data.map(function(v,i){
                    return <NCHistogramGroup hiswidth={self.state.hiswidth} groupwidth={self.state.groupwidth} groupname={self.state.names[i]} colordata={self.state.colordata} pcolordata={self.state.pcolordata} step={self.state.step} max={self.state.max} data={v} key={i} ref="NCHistogramGroup" />;
                })
            }</div>
        );
    }
}