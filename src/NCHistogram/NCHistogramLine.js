//横线
import React, { Component } from 'react';
export default class NCHistogramLine extends Component {
    constructor(props) {
        super(props);
        this.state = {
            top:0,
            num:0
        };
    }
    updatedata(top,num) {
        this.setState({
            top:top,
            num:num
        });
    }
    updatetop(top) {
        this.setState({
            top:top
        });
    }
    updatenum(num) {
        this.setState({
            num:num
        });
    }
    render() {
        return (
            <div className="NCHistogramNowDataLine" style={{"top":this.state.top}}>
                <div className="NCHistogramNowDataLineNum">
                    <code className="NCHistogramNowDataLineNumC">{this.state.num}</code>
                </div>
            </div>
        );
    }
}