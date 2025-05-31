import react from 'react';
import { Link } from 'react-router-dom';



function NavBar() {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/chips">Chips</Link>
            <Link to="/candy">Candy</Link>
            <Link to="/soda">Soda</Link>
        </div>
    )
}

