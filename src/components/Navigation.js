import React from 'react';
import { Link } from "react-router-dom";

export default class  NavigationBar extends React.Component {
    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a className="navbar-brand" href="#">Banking App</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">Accounts</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/transactions">Transactions</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </>
        );
    }
}

