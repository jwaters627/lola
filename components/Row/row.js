import React from 'react';
import styles from './row.scss';

import Seat from '../Seat/seat';
import classNames from 'classnames';

export default class Row extends React.Component {
	 constructor(props) {
	    super(props);
	    this.state = {
	 
	    };
    }
	

	renderSeat = (seatObject) =>{
		return <Seat selectedSeat={this.props.selectedSeat} selectSeat={this.props.selectSeat} seat={seatObject} />
	}

	render() {
		let rowClass = classNames(
          'rowContainer',
          {
            'firstClass': (this.props.rowClass == "First"),
            'businessClass': (this.props.rowClass == "Business"),
            'economyClass': (this.props.rowClass == "Economy")
          } 
        )
		return(
			<div className={rowClass}>
				<p className='rowNumber'>{this.props.row[0].row}</p>
				{this.props.row.map(this.renderSeat)}
				<p className='rowNumber'>{this.props.row[0].row}</p>
			</div>
		)
	}
}