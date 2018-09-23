import React, { Component } from 'react';

export default class NCHistogramNumber extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <div className="NCHistogramNumber" style={{'height':this.props.pheight}}>
                <span className="NCHistogramNumberL">{this.props.data}</span>
                <span className="NCHistogramNumberR"></span>
            </div>
        );
    }
}
