/* eslint-disable react/no-unescaped-entities */
import { React, useState } from 'react';
import { Link } from 'react-router-dom';

import './Login.css';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function submit(e) {
        e.preventDefault();
        console.log(email, password);
    }

    return ( 
        <section className="page_login">
            <h1 className="title">Login</h1>
            <form>
                <input type="text" 
                    name="email" 
                    id="email" 
                    placeholder="Enter email *" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input type="password" 
                    name="password" 
                    id="password" 
                    placeholder="Enter password *" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit" onClick={submit}>Submit</button>
            </form>
            <Link to="/sign">Don't have an account?</Link>
        </section>
    );
}

export default Login;
