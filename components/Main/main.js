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
		this.orderRows(plane);
	}


	// Take the organized by row plane data and go through each row to order the row by seat

	orderRows = (plane) =>{
		for(var row in plane){
			plane[row].sort(function(a,b){
				if(a.seat < b.seat){
					return -1
				}
				else if(a.seat > b.seat){
					return 1
				}
				else{
					return 0
				}
			})
		}
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