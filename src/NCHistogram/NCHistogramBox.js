//图表显示框架
import React, { Component } from 'react';
import NCHistogramGroup from './NCHistogramGroup.js';

export default class NCHistogramBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <div className="NCHistogramHisBox">
                <NCHistogramGroup ref="NCHistogramGroup" />
            </div>
        );
    }
}