import React from 'react';
import styles from './main.scss';

import Data from '../../data';


export default class Main extends React.Component {
	 constructor(props) {
	    super(props);
	    this.state = {
	 		
	    };
    }

    componentWillMount(){
		this.organizeRows()
	}

	// Organize the data into rows by going through each seat object and creating a key in the plane object for each row and have its value be an array of each seat in that row.

	organizeRows = () =>{
		let plane = {};
		Data.map(function(seat){
			if(plane[seat.row]){
				plane[seat.row].push(seat)
			}
			else{
				plane[seat.row] = [seat];
			}
		})
		console.log(plane)
	}

	render() {
		return(
			<div className='mainContainer'>
				<h1>Lola Plane</h1>
			</div>
		)
	}
}