import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-grid">
                    {/* Company Info */}
                    <div className="footer-section">
                        <div className="footer-logo">
                            <Building2 size={32} />
                            <span>Vedanco</span>
                        </div>
                        <p className="footer-description">
                            Transform your living space with premium BHK properties and luxury home interiors.
                            Your dream home awaits.
                        </p>
                        <div className="footer-social">
                            <a href="#" className="social-link" aria-label="Facebook">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="social-link" aria-label="Twitter">
                                <Twitter size={20} />
                            </a>
                            <a href="#" className="social-link" aria-label="Instagram">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="social-link" aria-label="LinkedIn">
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-section">
                        <h3 className="footer-title">Quick Links</h3>
                        <ul className="footer-links">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/properties">Properties</Link></li>
                            <li><Link to="/how-it-works">How It Works</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Property Types */}
                    <div className="footer-section">
                        <h3 className="footer-title">Property Types</h3>
                        <ul className="footer-links">
                            <li><Link to="/properties?type=1BHK">1 BHK Apartments</Link></li>
                            <li><Link to="/properties?type=2BHK">2 BHK Apartments</Link></li>
                            <li><Link to="/properties?type=3BHK">3 BHK Apartments</Link></li>
                            <li><Link to="/properties?type=4BHK">4 BHK Apartments</Link></li>
                            <li><Link to="/properties?type=Villa">Luxury Villas</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="footer-section">
                        <h3 className="footer-title">Contact Us</h3>
                        <ul className="footer-contact">
                            <li>
                                <MapPin size={18} />
                                <span>SG Highway, Ahmedabad, Gujarat 380015</span>
                            </li>
                            <li>
                                <Phone size={18} />
                                <span>+91 98765 43210</span>
                            </li>
                            <li>
                                <Mail size={18} />
                                <span>info@vedanco.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Vedanco Home Interior. All rights reserved.</p>
                    <div className="footer-bottom-links">
                        <Link to="/privacy">Privacy Policy</Link>
                        <span>•</span>
                        <Link to="/terms">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
