import React, { Component } from 'react';
import NCHistogramInfoName from './NCHistogramInfoName';

export default class NCHistogramInfo extends Component {
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
        var self = this;
        return (
            <div className="NCHistogramColorInfo">
                {
                    self.state.info.map(function(v,i){
                        return <NCHistogramInfoName key={i} data={v} ref="NCHistogramInfoName" />;
                    })
                }
            </div>
        );
    }
}