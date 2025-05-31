import react from 'react';
import './VendingMachine.css';
import { Link } from 'react-router-dom';


function VendingMachine() {
    return (
        <div className="VendingMachine">
            <h1>Vending Machine</h1>
            <p>Choose a snack:</p>
            <ul>
                <li><Link to="/chips">Chips</Link></li>
                <li><Link to="/candy">Candy</Link></li>
                <li><Link to="/soda">Soda</Link></li>
            </ul>
        </div>
    )
}

export default VendingMachine;