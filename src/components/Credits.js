import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Transaction from './Transaction'
import CreditForm from './CreditForm'

class Credits extends Component {
  render() {
      const accountBalance = this.props.accountBalance;
      const creditList = this.props.credits;
      const creditComponents = creditList.map((credit, index) => {
          return <Transaction 
          description={credit.description}
          amount={credit.amount}
          date={credit.date}
          index={index}
          id={index}
          />
      })
    return (
        <div>
        <div>Account Balance: {accountBalance}</div>
        <h1>Add A Credit</h1>
        <CreditForm addNewCredit={this.props.addNewCredit}/>
        <h1>Debits</h1>
        
        
        <hr/>
        {creditComponents}

        </div>
    );
  }
}

export default Credits;