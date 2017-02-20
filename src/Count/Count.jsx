import React from "react";

		
class Count extends React.Component{
//un props est par defaut immutable
//props qui peut se changer c le super props, il devient un state
//mais qui peut voyager de parent à enfant, alors qu'un state seul ne peut pas
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

  timeRunning(){
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
    this.timer = setInterval( 
      ()=>this.timeRunning(), 1000);
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