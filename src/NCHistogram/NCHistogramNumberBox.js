import React, { Component } from 'react';
import NCHistogramNumber from './NCHistogramNumber';

export default class NCHistogramNumberBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            info:[]
        };
    }
    updatedata(info) {
        this.setState({
            info:info
        });
    }
    render() {
        let self = this;
        let pheight = ((100 / this.state.info.length)+"%");
        return (
            <div className="NCHistogramNumberBox">{
                self.state.info.map(function(v,i){
                    return <NCHistogramNumber key={i} data={v} pheight={pheight} ref="NCHistogramNumber" />;
                })
            }</div>
        );
    }
}
