import { React, useState } from 'react';
import { Link } from 'react-router-dom';

import './Sign.css';

function Sign() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function submit(e) {
        e.preventDefault();
        console.log(name, email, password);
    }

    return ( 
        <section className="page_sign">
            <h1 className="title">Sign Up</h1>
            <form>
                <input type="text"
                    name="name" 
                    id="name" 
                    placeholder="Enter your name *" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
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
            <Link to="/login">Already a user?</Link>
        </section>
    );
}

export default Sign;
