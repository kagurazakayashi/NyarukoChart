import React, { Component } from 'react';

export default class NCHistogramInfoName extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <span className="NCHistogramInfoName">
                <div className="NCHistogramColorInfoColorB" style={{'background':this.props.data[1]}}><div className="NCHistogramColorInfoColorC"></div></div>&nbsp;{this.props.data[0]+"　"}
            </span>
        );
    }
}