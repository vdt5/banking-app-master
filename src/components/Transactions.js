import React from "react";
import {connect} from "react-redux";
import {setAccounts} from "../action/accountAction";
import {getTransactions} from "../action/transactionAction";

class Transactions extends React.Component {

    state = {
        transactionList: [],
        accountID: '',
        amount: ''
    }

    componentDidMount() {
        this.getTransactionsList();

    }

    getTransactionsList() {
        let transaction = this.props.transactions;
        console.log(transaction.accountId);
        this.setState({accountID: this.props.transactions.amount, transactionList: transaction });
    }

    render() {

        let accountList = this.props.accounts;
        const transaction = this.props.transactions;

        return(
            <div className="container">
                {transaction.map(transaction =>
                    <div className="alert alert-success mt-3" role="alert">
                        {accountList.map(account =>
                        <h5>{transaction.accountId}</h5>
                        )}
                    </div>
                )}
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        transactions: state.transactions.transactions,
        accounts: state.accounts.accounts,
    }
}

export default connect(mapStateToProps, {getTransactions, setAccounts})(Transactions);