import React, { Component } from 'react';
import NCHistogramView from './NCHistogramView';
import NCHistogramModel from './NCHistogramModel';
export default class NCHistogramController extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    loadjsondata(jsondata) {
        this.refs.NCHistogramModel.dejsondata2(jsondata);
    }
    render() {
        return(
            <span>
                <NCHistogramView ref="NCHistogramView" />
                <NCHistogramModel ref="NCHistogramModel" />
            </span>
        );
    }
}