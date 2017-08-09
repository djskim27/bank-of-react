import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Transaction from './Transaction'
import DebitForm from './DebitForm'

class Debits extends Component {
  render() {
      const accountBalance = this.props.accountBalance;
      const debitList = this.props.debits;
      const debitComponents = debitList.map((debit, index) => {
          return <Transaction 
          description={debit.description}
          amount={debit.amount}
          date={debit.date}
          key={index}
          id={index}
          />
      })
    return (
        <div>
        <div>Account Balance: {accountBalance}</div>
        <h1>Add A Debit</h1>
        <DebitForm addNewDebit={this.props.addNewDebit}/>
        <h1>Debits</h1>
        
        
        <hr/>
        {debitComponents}

        </div>
    );
  }
}

export default Debits;