export const setAccounts = (accounts) => {

    return {
        type: 'SET_ACCOUNTS',
        payload: {
            accounts
        }
    }
};
/*
export const deposit = (id, amount) => {
    return {
        type: 'DEPOSIT_MONEY',
        payload: {
            id, amount
        }
    };
};
export const withdraw = (id, amount) => {
    return {
        type: 'WITHDRAW_MONEY',
        payload: {
            id, amount
        }
    };
}; */
