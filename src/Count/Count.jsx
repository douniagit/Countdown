import React from "react";
	


class Count extends React.Component{

		//init state
		state={
			date:0,
			now:new Date(),
			finalDate: new Date(2017,1,4)
			
		}

		timeRunning(){
			if(this.state.finalDate = this.state.now){
				return <p>HAPPY B-DAY</p>
			}
			else{
				return <p>you have to wait ahahah</p>
			}
		}


	render(){
		
		  	// let timeDecrease=this.state.date -1;
		  	// const time= new Date();

		return(
			<div className="container">
				<h1> My Anniversary </h1>
				
					<div className="Affichage">
					 {this.timeRunning()}
					 
					 </div>


			</div>
			)
	}
}
export default Count;