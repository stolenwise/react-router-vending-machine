import logo from './logo.svg';
import './App.css';
import VendingMachine from './VendingMachine';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Chips from './Chips';
import Candy from './Candy';
import Soda from './Soda';


function App() {
  return (
    <div className="App">
      
     <BrowserRouter>
    <Routes>
      <Route path="/" element={<VendingMachine />} />
      <Route path="/chips" element={<Chips />} />
      <Route path="/candy" element={<Candy />} />
      <Route path="/soda" element={<Soda />} />
    </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
