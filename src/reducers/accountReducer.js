const DEFAULT_STATE = {
    accounts: [],
};

const sortAccounts = (state) => {
    let newState = {
        accounts: [...state.accounts]
    };
    return newState;
}

const accountReducer = (state = sortAccounts(DEFAULT_STATE), action) => {
    switch (action.type) {
        case 'SET_ACCOUNTS':
            return action.payload;
        default:
            return state;
    }
}

export default accountReducer;