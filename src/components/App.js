import React from "react";
import axios from "axios";
import {connect} from "react-redux";

import {setAccounts} from "../action/accountAction";
import {getTransactions} from "../action/transactionAction";
import AccountList from "./AccountList";

class App extends React.Component {

    componentDidMount() {
        this.getAccounts();
        this.getTransactions();
    }

    getAccounts() {
        axios.get(`http://my-json-server.typicode.com/vishalt1295/banking-app/accounts`)
            .then(response => {
                this.props.setAccounts(response.data);
            });
    };

    getTransactions() {
        axios.get(`http://my-json-server.typicode.com/vishalt1295/banking-app/transactions`)
            .then(res => {
                this.props.setTransactions(res.data);
            });
    };


    render() {
        return <AccountList/>
    }

}

const mapStateToProps = (state) => {
    return {
        accounts: state.accounts.accounts,
        transactions: state.transactions.transactions
    }
}

export default connect(mapStateToProps, {setAccounts, getTransactions})(App);