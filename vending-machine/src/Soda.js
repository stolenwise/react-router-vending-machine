import react from 'react';
import { Link } from 'react-router-dom';


function Soda() {
    return (
        <div>
            <h1>Soda</h1>
            <div>
            <div>
            <img src="https://images.unsplash.com/photo-1527960471264-932f39eb5846?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="chips" />
        </div>
            <p><Link to="/">Back to the Vending Machine</Link></p>
            </div>
        </div>
    )
}

export default Soda;