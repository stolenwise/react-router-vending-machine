import React from 'react';
import { Link } from 'react-router-dom';


function Candy() {
    return (
        <div>
            <h1>Candy</h1>
            <div>
            <div>
            <img src="https://images.unsplash.com/photo-1632687380457-05a1271e873b?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="chips" />
        </div>
            <p><Link to="/">Back to the Vending Machine</Link></p>
            </div>
        </div>
    )
}

export default Candy;