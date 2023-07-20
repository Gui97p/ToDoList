import React from 'react';
import Header from './components/Header/Header';
import { Outlet } from 'react-router-dom';

import './App.css';

function App() {
    return (
        <div className="app">
            <Header />
            <main className="container">
                <Outlet />
            </main>
        </div>
    );
}

export default App;
