import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Register from './components/Register';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Expenses from './components/Expenses';
import About from './components/About';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Profile from './components/Profile';
import Context from './app-context';
import { useState } from 'react';

function App() {
  const [ count, setCount ] = useState("");
  return (
    <Context.Provider value={{count, setCount}} >
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard"  element={<Dashboard />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/expenses" element={<Expenses />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Navbar />
      <Sidebar />
      <Footer />
    </div>
    </Context.Provider>
  );
}

export default App;
