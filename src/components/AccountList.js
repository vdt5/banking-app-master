import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

import {setAccounts} from "../action/accountAction";

class AccountList extends React.Component {
    render() {
        let accountList = this.props.accounts
        return (
            <>
                <div className="container">
                    <div className="row">
                        {accountList.map(account =>
                            <div className="col-md-4 mt-3" key={account.id}>

                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">ID: {account.id}</h5>
                                        <h5 className="card-title">Name: {account.name}</h5>


                                        <Link to={`/account/${account.id}`}>
                                        <a href="#" className="card-link">View Account</a>
                                        </Link>

                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        accounts: state.accounts.accounts
    }
}

export default connect(mapStateToProps, {setAccounts})(AccountList);

