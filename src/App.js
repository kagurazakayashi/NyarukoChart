import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            obj1:""
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
            this.setState({
                obj1:textdata
            });
        }).catch((error) => {
            this.setState({
                obj1:error
            });
        });
    }
    histogramboxonChange(e) {
        console.log(e);
        console.log(e[0]);
    }
    render() {
        var self = this;
        return (
        <div className="NyaChart">
            <header className="NyaChart-header">
            柱状图(histogram)
            </header>
            <div className="NyaChart-histogrambox">
                <textarea className="NyaChart-histogramcode" onChange={self.histogramboxonChange.bind(self,["123"])} value={self.state.obj1}></textarea>
                <div className="NyaChart-histogramview"></div>
            </div>
        </div>
        );
    }
}

export default App;
