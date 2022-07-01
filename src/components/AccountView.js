import React from "react";
import {connect} from "react-redux";
import {setAccounts} from "../action/accountAction";
import {addTransactions} from "../action/transactionAction";
import Transactions from "./Transactions";

class AccountView extends React.Component {

    state = {
        userBalance: '',
        userID: '',
        userName: '',
        amount: '',
        typeOfTransaction: ''

    };

    componentDidMount() {
        // console.log(this.props.match.params.id);
        this.getAccounts();
    }

    getAccounts() {
        const accId = this.props.match.params.id;
        const account = this.props.accounts.find(acc => acc.id.toString() === accId.toString());
        this.setState({userBalance: account.balance, userID: account.id, userName: account.name});
    }

    /*onChange = (event) => {
        this.setState({
            amount: event.target.value
        })
    }

    handleTransaction = (event) => {
        event.preventDefault();
        this.props.deposit(this.props.id, this.props.balance, event.target.id);
        this.props.withdraw(this.props.id, this.props.balance, event.target.id);
    } */

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.addTransactions(this.props.accountId, this.props.amount, this.props.type);
        this.setState({userBalance: '', typeOfTransaction: '', amount: ''})
    }

    render() {

        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card mt-3">
                            <div className="card-body " style={{width: "18em"}}>
                                <h5 className="card-title">ID: {this.state.userID}</h5>
                                <h5 className="card-title">Name: {this.state.userName}</h5>
                                <h5 className="card-title">Current Balance: ${this.state.userBalance}</h5>

                                <form onSubmit={this.onFormSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="amount">Amount:</label>
                                        <input type="text" className="form-control" name="userBalance"
                                               onChange={event => this.setState({amount: event.target.value})} />

                                    </div>
                                    <button type="submit" className="btn btn-success">Deposit</button>
                                    <button type="submit" className="btn btn-danger float-right">Withdraw</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <Transactions accountId={this.accId} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        accounts: state.accounts.accounts
    }
}

export default connect(mapStateToProps, {setAccounts, addTransactions})(AccountView);