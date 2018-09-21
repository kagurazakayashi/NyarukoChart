import React, { Component } from 'react';
import './NCHistogram.css';
import NCHistogramBox from './NCHistogramBox';
import NCHistogramInfo from './NCHistogramInfo';
import NCHistogramNumberBox from './NCHistogramNumberBox';

export default class NCHistogram extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    loadjsondata(jsondata) {
        let json = JSON.parse(jsondata);
    }
    render() {
        return (
            <div className="NCHistogramBox">
                <NCHistogramNumberBox ref="NCHistogramNumberBox" />
                <NCHistogramBox ref="NCHistogramBox" />
                <NCHistogramInfo ref="NCHistogramInfo" />
            </div>
        );
    }
}