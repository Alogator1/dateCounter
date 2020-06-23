import React, { Component } from 'react';
import Clock from './Clock';
import './App.css';


class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            finalData: 'December 31, 2020',
            newData:''
        }
    }

    setNewDate() {
        this.setState({finalData: this.state.newData});
        
    }

    render() { 
        return ( 
            <div className = "App-main">
                <div className = "App-title">
                    Countdown to {this.state.finalData}
                </div>
                <Clock
                deadline = {this.state.finalData}
                />
                <div className = "App-input-form">
                    <input placeholder = "Enter date"
                    onChange = {event => this.setState({newData: event.target.value})}
                    />
                    <button onClick ={()=> this.setNewDate()}>Submit</button>
                </div>
            </div>
         );
    }
}
 
export default App;
