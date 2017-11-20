import React from 'react';
import styles from './seat.scss';

import classNames from 'classnames';

export default class Seat extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
   
      };
    }
  

  
  render() {
    let seatClass = classNames(
          'seatContainer',
          {
            'aisle': (this.props.seat.name == 'Aisle'),
            'first': (this.props.seat.class == 'First'),
          } 
        )

        let letterClass = classNames(
          'seatLetter',
          {
            'aisle': (this.props.seat.name == 'Aisle'),
            'occupied': (this.props.seat.occupied),
            'premium': (this.props.seat.premium),
            'selected': (this.props.selectedSeat == this.props.seat && !this.props.seat.occupied),
            'firstClass': (this.props.seat.class == 'First')
          } 
        )

    return(
      <div className={seatClass}>
        <h4 onClick={() => this.props.selectSeat(this.props.seat)} className={letterClass}>{this.props.seat.seat}</h4>
      </div>
    )
  }
}