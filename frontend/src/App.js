import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Dashboard from './components/dashboard/Dashboard';
import Register from './components/Register';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Expenses from './components/Expenses';
import About from './components/about/About';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Profile from './components/Profile';
import Income from './components/dashboard/Income';
import { useState } from 'react';
import Context from 'react-bootstrap/esm/AccordionContext';

function App() {
  const user = getUser();
  const [ count, setCount ] = useState("");
  const [ isLoggedIn, setIsLoggedIn ] = useState(false);

  useEffect(() => {
    if (user) {
      setIsLoggedIn(true);
    }
  }, [])

  return (
    <Context.Provider value={{count, setCount}} >
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard"  element={<Dashboard />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/expenses" element={<Expenses />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/incomes" element={<Income />} />
      </Routes>
      <Navbar setIsLoggedIn={setIsLoggedIn} />
      <Sidebar isLoggedIn={isLoggedIn} />
      <Footer />
    </div>
    </Context.Provider>
  );
}

export default App;
