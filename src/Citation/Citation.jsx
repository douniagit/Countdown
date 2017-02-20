import React from "react";
import talk from "./talk.js";


class Citation extends React.Component{
	//1-on declare une state 2- on declare une fonction 3-on ecrit un rendu
	
	//décalaration d'une state qui sera toujours fixe
	/*State = {
	 	talk
	 }*/
	//décalaration d'une state qui sera dynamique

	State = {
		// talk:null
	};

	componentWillMount(){
		this.genererCitation();
	}


	genererCitation = event=>{
		// convertir l'objet en array
		const keyArray = Object.keys(talk);
		//une citation au hasard
		const randomKey = keyArray[Math.floor(Math.random()*keyArray.length)];
		this.setState(talk[randomKey]);
	};

	render(){
		//console.log(talk);
		

		return(
			<div className="Content">
				<h1>{this.state.citation}</h1>
				<span>{this.state.auteur}</span>
				<button onClick={event=>this.genererCitation(event)}>autre citation</button>
			</div>
			)
	}
}
export default Citation;