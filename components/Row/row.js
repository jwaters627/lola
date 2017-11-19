import React from 'react';
import styles from './row.scss';

export default class Row extends React.Component {
	 constructor(props) {
	    super(props);
	    this.state = {
	 
	    };
    }

	render() {
		return(
			<div className="rowContainer">
				{this.props.rowNumber}
			</div>
		)
	}
}