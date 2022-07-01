const TRANSACTION_STATE = {
    transactions: []
};

const sortTransactions = (state) => {
    let TransactionState = {
        transactions: [...state.transactions]
    };
    return TransactionState;
}

const transactionReducer = (state = sortTransactions(TRANSACTION_STATE), action) => {
    switch (action.type) {
        case 'GET_TRANSACTIONS':
            return action.payload;
            break;
        case 'SET_TRANSACTION':
            const {accountId, type, amount} = action.payload;
            const transactionIndex = state.transactions.findIndex(t => t.accountId === this.props.accounts.id);
            state.transactions[transactionIndex].accountId = accountId;
            state.transactions[transactionIndex].type = type;
            state.transactions[transactionIndex].amount = amount;
            return sortTransactions(state);
        default:
            return state;
    }
}

export default transactionReducer;