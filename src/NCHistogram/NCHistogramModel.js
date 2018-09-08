import React, { Component } from 'react';
export default class NCHistogramModel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            json:null,
            keys:null,
            values:null
        };
    }
    //解析JSON数据
    dejsondata2(jsondata) {
        const njson = JSON.parse(jsondata);
        const nkeys = Object.keys(jsondata);
        const nvals = Object.values(jsondata);
        this.setState({
            json:njson,
            keys:nkeys,
            values:nvals
        });
    }
    render() {
        return (
            <span></span>
        );
    }
}