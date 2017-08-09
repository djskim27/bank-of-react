import React, { Component } from 'react';

class DebitForm extends Component {

    constructor() {
        super();

        this.state = {
            newDebit: {}
        }
    }

    _handleNewDebitChange = (event) => {
        const attributeName = event.target.name;
        const attributeValue = (event.target.value);

        const newDebit = {...this.state.newDebit};
        newDebit[attributeName] = attributeValue;

        this.setState({ newDebit})
    };

    _handleNewDebitChangeNumber = (event) => {
        const attributeName = event.target.name;
        const attributeValue = parseFloat(event.target.value);

        const newDebit = {...this.state.newDebit};
        newDebit[attributeName] = attributeValue;

        this.setState({ newDebit})
    };

    _addNewDebit = (event) => {
        event.preventDefault();

        this.props.addNewDebit(this.state.newDebit);
    }

    render() {
        return(
            <div>
                <form onSubmit={this._addNewDebit}>
                    <div>
                        <input name="description" placeholder="Description" onChange={this._handleNewDebitChange}/>
                    </div>
                    <div>
                        <input type="number" name="amount" placeholder="Amount" onChange={this._handleNewDebitChangeNumber} step="0.01"/>
                    </div>
                     <div>
                        <input name="date" placeholder="date" onChange={this._handleNewDebitChange} />
                    </div>
                     <div>
                        <input type="submit" value="Add New Debit"/>
                    </div>
                </form>
            </div>
        )
    }
}

export default DebitForm;