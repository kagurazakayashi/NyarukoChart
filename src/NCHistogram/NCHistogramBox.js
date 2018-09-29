//图表显示框架
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import NCHistogramGroup from './NCHistogramGroup.js';
import NCHistogramLine from './NCHistogramLine.js';

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
            max:0,
            numlinetop:0
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
    handleMouseOver(e) {
        let py = e.pageY;
        let rect = ReactDOM.findDOMNode(this).getBoundingClientRect();
        let top = py - rect.y;
        if (top > rect.height) {
            top = rect.height;
        } else if (top < 0) {
            top = 0;
        }
        //每像素数值：总数值/总高，从底向上像素：总高-top，每像素数值*从底向上像素
        let nownum = parseInt((this.state.max/rect.height)*(rect.height-top));
        this.refs.NCHistogramLine.updatedata(top,nownum);
    }
    render() {
        let self = this;
        return (
            <div className="NCHistogramHisBox" onMouseMove={this.handleMouseOver.bind(this)}>
                <NCHistogramLine top={self.state.numlinetop} num="10" ref="NCHistogramLine" />
            {
                self.state.data.map(function(v,i){
                    return <NCHistogramGroup hiswidth={self.state.hiswidth} groupwidth={self.state.groupwidth} groupname={self.state.names[i]} colordata={self.state.colordata} pcolordata={self.state.pcolordata} step={self.state.step} max={self.state.max} data={v} key={i} ref="NCHistogramGroup" />;
                })
            }</div>
        );
    }
}