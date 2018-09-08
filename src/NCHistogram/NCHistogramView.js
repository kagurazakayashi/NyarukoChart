import React, { Component } from 'react';
import './NCHistogram.css';

export default class NCHistogram extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <div className="NCHistogramBox">
                <div className="NCHistogramNumberBox">
                    <div className="NCHistogramNumber">
                        <span className="NCHistogramNumberL">65536</span>
                        <span className="NCHistogramNumberR"></span>
                    </div>
                    <div className="NCHistogramNumber">
                        <span className="NCHistogramNumberL">9</span>
                        <span className="NCHistogramNumberR"></span>
                    </div>
                    <div className="NCHistogramNumber">
                        <span className="NCHistogramNumberL">8</span>
                        <span className="NCHistogramNumberR"></span>
                    </div>
                    <div className="NCHistogramNumber">
                        <span className="NCHistogramNumberL">7</span>
                        <span className="NCHistogramNumberR"></span>
                    </div>
                    <div className="NCHistogramNumber">
                        <span className="NCHistogramNumberL">6</span>
                        <span className="NCHistogramNumberR"></span>
                    </div>
                    <div className="NCHistogramNumber">
                        <span className="NCHistogramNumberL">5</span>
                        <span className="NCHistogramNumberR"></span>
                    </div>
                    <div className="NCHistogramNumber">
                        <span className="NCHistogramNumberL">4</span>
                        <span className="NCHistogramNumberR"></span>
                    </div>
                    <div className="NCHistogramNumber">
                        <span className="NCHistogramNumberL">3</span>
                        <span className="NCHistogramNumberR"></span>
                    </div>
                    <div className="NCHistogramNumber">
                        <span className="NCHistogramNumberL">2</span>
                        <span className="NCHistogramNumberR"></span>
                    </div>
                    <div className="NCHistogramNumber">
                        <span className="NCHistogramNumberL">1</span>
                        <span className="NCHistogramNumberR"></span>
                    </div>
                </div>
                <div className="NCHistogramHisBox">
                    <div className="NCHistogramGroup">
                        <div className="NCHistogramGroupT">
                            <div className="NCHistogramHis"></div>
                            <div className="NCHistogramHis"></div>
                        </div>
                        <div className="NCHistogramGroupB">2016</div>
                    </div>
                    <div className="NCHistogramGroup">
                        <div className="NCHistogramGroupT">
                            <div className="NCHistogramHis"></div>
                            <div className="NCHistogramHis"></div>
                        </div>
                        <div className="NCHistogramGroupB">2017</div>
                    </div>
                    <div className="NCHistogramGroup">
                        <div className="NCHistogramGroupT">
                            <div className="NCHistogramHis"></div>
                            <div className="NCHistogramHis"></div>
                        </div>
                        <div className="NCHistogramGroupB">2018</div>
                    </div>
                </div>
                <div className="NCHistogramColorInfo">
                    <div className="NCHistogramColorInfoColorB"></div>&nbsp;TEST1&emsp;
                    <div className="NCHistogramColorInfoColorB"></div>&nbsp;TEST2
                </div>
            </div>
        );
    }
}