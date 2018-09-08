import React, { Component } from 'react';
import logo from './logo.gif';
import './App.css';
import NCHistogramController from './NCHistogram/NCHistogramController.js';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jsondata:"",
            jsondataM:""
        };
    }
    componentDidMount() {
        this.loadpage("/histogram.json");
    }
    loadpage(url) {
        fetch(url , {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
            }
        }).then((response) => {
            if (response.ok) {
                return response.text();
            }
        }).then((textdata) => {
            // var uwe = textdata;
            this.setState({
                jsondata:textdata,
                // jsondataM:uwe
            });

            this.refs.NCHistogram.loadjsondata(this.state.jsondata);
        }).catch((error) => {
            this.setState({
                jsondata:error
            });
        });
    }
    histogramboxonChange(e) {
    }
    render() {
        return (
        <div className="NyaChart">
            <header className="NyaChart-header">
            <img src={logo} alt="" />柱状图(histogram)
            </header>
            <div className="NyaChart-histogrambox">
                <textarea className="NyaChart-histogramcode" onChange={this.histogramboxonChange.bind(this)} value={this.state.jsondata}></textarea>
                <div className="NyaChart-histogramview">
                    <NCHistogramController ref="NCHistogram" />
                </div>
            </div>
        </div>
        );
    }
}

export default App;
