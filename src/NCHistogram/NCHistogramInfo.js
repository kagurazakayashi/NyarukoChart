import React, { Component } from 'react';
import NCHistogramInfoName from './NCHistogramInfoName';

export default class NCHistogramInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <div className="NCHistogramColorInfo">
                <NCHistogramInfoName data={["test1"]} ref="NCHistogramInfoName" />
                &emsp;
                <NCHistogramInfoName data={["test2"]} ref="NCHistogramInfoName" />
            </div>
        );
    }
}