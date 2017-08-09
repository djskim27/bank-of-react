import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Transaction extends Component {
  render() {
      const description = this.props.description;
      const amount = this.props.amount;
      const date = this.props.date;
    return (
        <div>
       <p>Description: {description}</p>
       <p>Amount: {amount}</p>
       <p>Date: {date}</p>
       <hr/>
        </div>
    );
  }
}

export default Transaction;