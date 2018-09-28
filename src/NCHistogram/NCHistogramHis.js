//单条
import React, { Component } from 'react';

export default class NCHistogramHis extends Component {
    constructor(props) {
        super(props);
        this.state = {
            detailShow: 'none',
            x: 0,
            y: 0
        };
    }
    handleMouseOver(e) {
        let winw = window.innerWidth;
        let px = e.pageX;
        let py = e.pageY;
        var minfox = px;
        var minfoy = py + 16;
        if (px > winw - 100) {
            minfox -= 86;
        } else {
            minfox += 16;
        }
        this.setState({
            detailShow: 'block',
            x: minfox,
            y: minfoy,
        })
    }
    handleMouseOut() { 
        this.setState({
            detailShow: 'none',
            x: 0,
            y: 0
        })
    }
    render() {
        return (
            <div className="NCHistogramHis" style={{'width':this.props.hiswidth,'height':this.props.pheight,'top':this.props.ptop,'backgroundColor':this.props.colordata[1]}}>
                <div className="NCHistogramHisA" style={{'background':this.props.pcolor}}></div>
                <div className="NCHistogramHisF" onMouseOver={this.handleMouseOver.bind(this)} onMouseMove={this.handleMouseOver.bind(this)} onClick={this.handleMouseOver.bind(this)} onMouseOut={this.handleMouseOut.bind(this)}></div>
                <div className="NCHistogramFixedView" style={{'top':this.state.y,'left':this.state.x,'display':this.state.detailShow,'backgroundColor':this.props.colordata[1]}}><code>{this.props.groupname} {this.props.colordata[0]}<br/>{this.props.tval}</code></div>
            </div>
        );
    }
}