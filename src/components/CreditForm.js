import React, { Component } from 'react';

class CreditForm extends Component {

    constructor() {
        super();

        this.state = {
            newCredit: {}
        }
    }

    _handleNewCreditChange = (event) => {
        const attributeName = event.target.name;
        const attributeValue = (event.target.value);

        const newCredit = {...this.state.newCredit};
        newCredit[attributeName] = attributeValue;

        this.setState({ newCredit})
    };

    _handleNewCreditChangeNumber = (event) => {
        const attributeName = event.target.name;
        const attributeValue = parseFloat(event.target.value);

        const newCredit = {...this.state.newCredit};
        newCredit[attributeName] = attributeValue;

        this.setState({ newCredit})
    };

    _addNewCredit = (event) => {
        event.preventDefault();

        this.props.addNewCredit(this.state.newCredit);
    }

    render() {
        return(
            <div>
                <form onSubmit={this._addNewCredit}>
                    <div>
                        <input name="description" placeholder="Description" onChange={this._handleNewCreditChange}/>
                    </div>
                    <div>
                        <input type="number" name="amount" placeholder="Amount" onChange={this._handleNewCreditChangeNumber} step="0.01"/>
                    </div>
                     <div>
                        <input name="date" placeholder="date" onChange={this._handleNewCreditChange} />
                    </div>
                     <div>
                        <input type="submit" value="Add New Credit"/>
                    </div>
                </form>
            </div>
        )
    }
}

export default CreditForm;