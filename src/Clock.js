import React, { Component } from 'react';
import './App.css';

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
          }
    }

    componentWillMount(){
        this.getTimeUntil(this.props.deadline)
    }

    componentDidMount(){
        setInterval(()=> this.getTimeUntil(this.props.deadline),1000)
    }

    getTimeUntil(deadline){
        let timeLeft = Date.parse(deadline) - Date.parse(new Date);
        let seconds = Math.floor((timeLeft/1000) % 60);
        let minutes = Math.floor((timeLeft/1000/60) % 60);
        let hours = Math.floor(timeLeft/(1000*60*60) % 24);
        let days = Math.floor(timeLeft/(1000*60*60*24));
        console.log("seconds", seconds, "minutes", minutes, "hours", hours, "days", days);
        this.setState({days:days, hours:hours, minutes:minutes, seconds:seconds})

    }

    render() { 
        // this.getTimeUntil(this.props.deadline);
        return ( 
            <div className = "App-date">
                    <div className = "App-date-part">
                        {this.state.days} days
                    </div>
                    <div className = "App-date-part">
                    {this.state.hours} hours
                    </div>
                    <div className = "App-date-part">
                    {this.state.minutes} minutes
                    </div>
                    <div className = "App-date-part">
                    {this.state.seconds} seconds
                    </div>
                </div>
         );
    }
}
 
export default Clock;