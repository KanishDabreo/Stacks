import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Register from './components/Register';
import Login from './components/Login';
import Navbar from './components/Navbar';
import AddExpenses from './components/AddExpenses';
import About from './components/About';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/addexpenses" element={<AddExpenses />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Navbar />
      <Sidebar />
      <Footer/>
    </div>
  );
}

export default App;
