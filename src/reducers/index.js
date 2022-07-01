import {combineReducers} from "redux";
import accountReducer from './accountReducer';
import transactionReducer from "./transactionReducer";
/*
const DEFAULT_STATE = {
    accounts: [],
};

const sortAccounts = (state) => {
    let newState = {
        accounts: [...state.accounts],

    };
    return newState;
}

const accountReducer = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case 'SET_ACCOUNTS':
            return action.payload;
        case 'DEPOSIT_MONEY':
            let deposit = state.accounts.findIndex(acc => {
                return acc.id === action.payload.id;
            });
            console.log(deposit);
            state.accounts[deposit].balance = state.accounts[deposit].balance + action.payload.amount;
            return sortAccounts(state);

        case 'WITHDRAW_MONEY':
            let withdraw = state.accounts.findIndex(acc => {
                return acc.id === action.payload.id;
            });
            state.accounts[withdraw].balance = state.accounts[withdraw].balance - action.payload.amount;
        break;
            default:
            return state;
    }
}
*/
export default combineReducers({
    accounts: accountReducer,
    transactions: transactionReducer
});