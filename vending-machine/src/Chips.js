import React from 'react';
import { Link } from 'react-router-dom';
import './Chips.css';


function Chips() {
    return (
        <div>
            <h1 style={{ color: "white" }}>Chips</h1>
            <div>
            <img src="https://images.unsplash.com/photo-1694101493190-acc6c4418ad7?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="chips" />
        </div>
        <div>
            <p><Link to="/" style={{ color: "white" }}>Back to the Vending Machine</Link></p>
        </div>
        </div>
       
    )
}

export default Chips;