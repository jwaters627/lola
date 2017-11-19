import React from 'react';
import styles from './main.scss';

import Data from '../../data';
import Row from '../Row/row';

export default class Main extends React.Component {
	 constructor(props) {
	    super(props);
	    this.state = {
	 		plane: {},
	 		selected: false
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
		this.orderRows(plane)
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
		// Once the row is ordered send it to the findAisle function to figure out where the aisle is
		
			this.findAisle(plane[row])
		}
		this.setState({plane: plane})
	}

	// insert an empty space where the aisle will be

	findAisle = (row) =>{
		for(let i = row.length - 1; i > 1 ; i--){
			if((row[i].seat.charCodeAt() - row[i - 1].seat.charCodeAt()) > 1){
				row.splice(i, 0, {name: "Aisle", seat: row[i].seat.row})
			}
		}
	}

	renderRows = (row) =>{
		return (<Row selectedSeat={this.state.selected} selectSeat={this.selectSeat} row={row} rowNumber={row[0].row} rowClass={row[0].class}></Row>)
	}

	selectSeat = (seat) =>{
		if(!seat.occupied){
			this.setState({selected: seat})
		}
	}
	

	render() {
		return(
			<div className='mainContainer'>
				<h1 className='title'>Lola interview seating chart</h1>
				<div className='keyContainer'>
					<p className='selectedText'> Selected: {this.state.selected.row} {this.state.selected.seat}</p>
					<div className='keyItemContainer'>
						<div className='keyItem occupied'>
						</div>
						<p className='keyText'>Occupied</p>
					</div>
					<div className='keyItemContainer'>
						<div className='keyItem selected'>
						</div>
						<p className='keyText'>Selected</p>
					</div>
					<div className='keyItemContainer'>
						<div className='keyItem premium'>
						</div>
						<p className='keyText'>Premium</p>
					</div>
					<div className='keyItemContainer'>
						<div className='keyItem overWing'>
						</div>
						<p className='keyText'>Over Wing</p>
				</div>
				</div>
				<div className="planeContainer">
					{Object.values(this.state.plane).map(this.renderRows)}
				</div>
			</div>
		)
	}
}