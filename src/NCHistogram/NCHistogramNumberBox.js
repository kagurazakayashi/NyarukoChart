import React, { Component } from 'react';
import NCHistogramNumber from './NCHistogramNumber';

export default class NCHistogramNumberBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <div className="NCHistogramNumberBox">
                <NCHistogramNumber data={[10]} ref="NCHistogramNumber" />
                <NCHistogramNumber data={[9]} ref="NCHistogramNumber" />
                <NCHistogramNumber data={[8]} ref="NCHistogramNumber" />
                <NCHistogramNumber data={[7]} ref="NCHistogramNumber" />
                <NCHistogramNumber data={[6]} ref="NCHistogramNumber" />
                <NCHistogramNumber data={[5]} ref="NCHistogramNumber" />
                <NCHistogramNumber data={[4]} ref="NCHistogramNumber" />
                <NCHistogramNumber data={[3]} ref="NCHistogramNumber" />
                <NCHistogramNumber data={[2]} ref="NCHistogramNumber" />
                <NCHistogramNumber data={[1]} ref="NCHistogramNumber" />
            </div>
        );
    }
}
