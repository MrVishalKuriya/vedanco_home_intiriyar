import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, Building2, Phone, Info, Wrench } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const navLinks = [
        { path: '/', label: 'Home', icon: Home },
        { path: '/about', label: 'About Us', icon: Info },
        { path: '/properties', label: 'Properties', icon: Building2 },
        { path: '/how-it-works', label: 'How It Works', icon: Wrench },
        { path: '/contact', label: 'Contact', icon: Phone }
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    <img src="./vedanco-logo.png" alt="Vedanco" className="logo-image" style={{ height: '50px', width: 'auto' }} />
                </Link>

                {/* Desktop Navigation */}
                <ul className="navbar-menu">
                    {navLinks.map((link) => (
                        <li key={link.path}>
                            <Link
                                to={link.path}
                                className={`navbar-link ${isActive(link.path) ? 'active' : ''}`}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                <Link to="/contact" className="btn btn-primary navbar-cta">
                    Get Quote
                </Link>

                {/* Mobile Menu Toggle */}
                <button
                    className="navbar-toggle"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="navbar-mobile-menu">
                    {navLinks.map((link) => {
                        const Icon = link.icon;
                        return (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`navbar-mobile-link ${isActive(link.path) ? 'active' : ''}`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <Icon size={20} />
                                <span>{link.label}</span>
                            </Link>
                        );
                    })}
                    <Link
                        to="/contact"
                        className="btn btn-primary"
                        style={{ marginTop: '1rem' }}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Get Quote
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
