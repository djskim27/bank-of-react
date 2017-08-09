import React, {Component} from 'react';
import axios from "axios";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home';
import UserProfile from './components/UserProfile'
import Debits from './components/Debits'
import Credits from './components/Credits'

class App extends Component {

  constructor() {
    super();

    this.state = {
      accountBalance: 0,
      currentUser: {
        userName: 'bob_loblaw',
        memberSince: '08/23/99',
      },
      debits: [],
      credits: [],
      totalDebit: 0,
      totalCredit: 0
    }
  }
  componentWillMount(){
    this._getDebits();
    this._getCredits();


   
  }

_getDebits = () => {
     axios.get("/debits").then((res) => {
      
      const debits = res.data;
      this.setState(
        {
          debits: debits
        }
      );
      
    }).catch((error) => {
      console.log(error);
    });
 }

_getCredits = () => {
   axios.get("/credits").then((res) => {
      
        const credits = res.data;
      this.setState(
        {
          credits: credits
        }
      );
      
    }).catch((error) => {
      console.log(error);
    })

 }

 _calculateAccountBalance = () => {
 
  const credits = this.state.credits;

  const totalCredits = credits.reduce((totalCredits, credit) => {
    return totalCredits + credit.amount;
  }, 0)
  
  const debits = this.state.debits;
  const totalDebits = debits.reduce((totalDebits, debit) => {
    return totalDebits + debit.amount;
  }, 0)

  return totalCredits - totalDebits

 
 }

 _addNewDebit = (newDebit) => {
   const debits = [...this.state.debits];
   debits.push(newDebit);
   this.setState({debits});
 }

 _addNewCredit = (newCredit) => {
   const credits = [...this.state.credits];
   credits.push(newCredit);
   this.setState({credits});
 }

  

  render() {

    const accountBalance = this._calculateAccountBalance();

    const HomeComponent = () => (<Home accountBalance={accountBalance}/>);
    const UserProfileComponent = () => (
        <UserProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince}  />
    );
    const DebitsComponent = () => (
      <Debits 
      debits={this.state.debits} 
      accountBalance={accountBalance}
      addNewDebit = {this._addNewDebit}
      />
    )
    const CreditsComponent = () => (
      <Credits 
      credits={this.state.credits} 
      accountBalance={accountBalance}
      addNewCredit = {this._addNewCredit}
      />
    )
    return (
        <Router>
          <div>
            <Route exact path="/" render={HomeComponent}/>
            <Route exact path="/userProfile" render={UserProfileComponent}/>
            <Route exact path="/debits" render={DebitsComponent}/>
            <Route exact path="/credits" render={CreditsComponent}/>
          </div>
        </Router>
    );
  }
}

export default App;