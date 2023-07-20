import React from 'react';
import { Link } from 'react-router-dom';

import './NoAccount.css';

function NoAccount() {
    return ( 
        <div className="noaccount">
            <h1>Log in to access your to-do list!</h1>
            <div className="buttons">
                <Link to="/login" className="button_login">Login</Link>
                <Link to="/sign" className="button_sign">Sign up</Link>
            </div>
        </div>
    );
}

export default NoAccount;
