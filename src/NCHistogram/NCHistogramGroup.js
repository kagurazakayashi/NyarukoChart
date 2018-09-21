//单组
import React, { Component } from 'react';
import NCHistogramHis from './NCHistogramHis.js';

export default class NCHistogramGroup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            groupname:"noname"
        };
    }
    render() {
        return (
            <div className="NCHistogramGroup">
                <div className="NCHistogramGroupT">
                    <NCHistogramHis ref="NCHistogramHis" />
                    <NCHistogramHis ref="NCHistogramHis" />
                </div>
                <div className="NCHistogramGroupB">{this.state.groupname}</div>
            </div>
        );
    }
}