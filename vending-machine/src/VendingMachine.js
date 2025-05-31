import react from 'react';
import './VendingMachine.css';
import { Link } from 'react-router-dom';


function VendingMachine() {
    return (
        <div className="VendingMachine">
            
            <h1 styles={{color: "white"}} >Vending Machine</h1>
            <p>Choose a snack:</p>
            <ul>
                <li><Link to="/chips" style={{ color: "white" }}>Chips</Link></li>
                <li><Link to="/candy" style={{ color: "white" }}>Candy</Link></li>
                <li><Link to="/soda" style={{ color: "white" }}>Soda</Link></li>
            </ul>
        </div>
    )
}

export default VendingMachine;