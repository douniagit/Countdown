import React from "react";

		
class Count extends React.Component{

 constructor(props) {
    super(props);
    this.state = {
    	date:new Date(),
    	goal:new Date("2017,6,14 00:00:00"),
      daysLeft: null,
      hoursLeft: null,
      minutesLeft:null,
      secondesLeft:null
    };
  }

  tick(){
  const now= new Date().getTime(); 
  const final = new Date("2017,6,14 00:00:00").getTime();
  
  const path= final-now;
  const days = Math.floor(path / (1000 * 60 * 60 * 24));
	const hours = Math.floor((path % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	const minutes = Math.floor((path % (1000 * 60 * 60)) / (1000 * 60));
	const seconds = Math.floor((path % (1000 * 60)) / 1000);
    
    this.setState({
      daysLeft: days, 
      hoursLeft:hours, 
      minutesLeft:minutes,
      secondesLeft:seconds});
  }
  
   componentDidMount() {
    this.tick();
    this.timer = setInterval( 
      ()=>this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

	render(){

		return(
			<div>
			<h1>CountDown Timer</h1>
        <h2>It is now {this.state.date.toLocaleDateString()+" "+ this.state.date.toLocaleTimeString()}.</h2>
        <h2>final date</h2>
		 {this.state.goal.toLocaleDateString()+" "+this.state.goal.toLocaleTimeString()}   
        <h2> decompte</h2>
        <p> jours {this.state.daysLeft}</p>
        <p> heure {this.state.hoursLeft}</p>
        <p> minutes {this.state.minutesLeft}</p>
        <p> secondes {this.state.secondesLeft}</p>
      </div>
		)
	}
}
export default Count;