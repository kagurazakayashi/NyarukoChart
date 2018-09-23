//单条
import React, { Component } from 'react';

export default class NCHistogramHis extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <div className="NCHistogramHis" style={{'width':this.props.hiswidth,'height':this.props.pheight,'top':this.props.ptop,'backgroundColor':this.props.colordata}}>
                <div className="NCHistogramHisF"></div>
            </div>
        );
    }
}