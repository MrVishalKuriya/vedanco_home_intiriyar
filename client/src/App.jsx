import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/Home';
import Properties from './pages/Properties';
import About from './pages/About';
import HowItWorks from './pages/HowItWorks';
import Contact from './pages/Contact';
import './index.css';

const App = () => {
    return (
        <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
            <div className="app">
                <Navbar />
                {/* <main> */}
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/properties" element={<Properties />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/how-it-works" element={<HowItWorks />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
                {/* </main> */}
                <Footer />
            </div>
        </Router>
    );
}

export default App;