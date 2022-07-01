import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from "react-redux";
import {createStore} from "redux";
import {BrowserRouter, Route} from 'react-router-dom';

import App from './components/App';
import AccountView from "./components/AccountView";
import reducers from './reducers';
import NavigationBar from "./components/Navigation";
import Transactions from "./components/Transactions";
import "./global.css";

ReactDOM.render(
    <Provider store={createStore(reducers)}>

        <BrowserRouter>
            <NavigationBar />
            <Route path="/" exact component={App} />
            <Route path="/transactions" exact component={Transactions} />
            <Route path="/account/:id" render={(props) => <AccountView {...props} />}/>

        </BrowserRouter>
    </Provider>,
    document.querySelector('#root')
);