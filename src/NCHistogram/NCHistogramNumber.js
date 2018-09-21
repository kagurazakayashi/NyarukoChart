import React, { Component } from 'react';

export default class NCHistogramNumber extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <div className="NCHistogramNumber">
                <span className="NCHistogramNumberL">{this.props.data[0]}</span>
                <span className="NCHistogramNumberR"></span>
            </div>
        );
    }
}
