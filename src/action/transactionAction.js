export const getTransactions = (transactions) => {
    return {
        type: 'GET_TRANSACTIONS',
        payload: {
            transactions
        }
    }
};

export const addTransactions = (accountId, type, amount) => {
    return {
        type: 'SET_TRANSACTIONS',
        payload: {
            accountId, type, amount
        }
    }
};