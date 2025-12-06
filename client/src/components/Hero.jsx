import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calculator } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-content">
                <div className="hero-text">
                    <h1 className="hero-title">
                        Bring home beautiful interiors
                        <span className="hero-highlight"> that fit your budget</span>
                    </h1>
                    <p className="hero-subtitle">
                        When you give your home the Vedanco touch, you get both beauty and functionality.
                        We employ state-of-the-art technology to ensure your home features a flawless look
                        that lasts a very long time.
                    </p>
                    <div className="hero-cta">
                        <Link to="/contact" className="btn btn-primary btn-large">
                            <Calculator size={22} />
                            Get Instant Estimate
                        </Link>
                        <Link to="/properties" className="btn btn-secondary btn-large">
                            Browse Properties
                            <ArrowRight size={20} />
                        </Link>
                    </div>
                    <div className="hero-features">
                        <div className="hero-feature">
                            <div className="feature-icon">✓</div>
                            <span>10-Year Warranty</span>
                        </div>
                        <div className="hero-feature">
                            <div className="feature-icon">✓</div>
                            <span>Price Match Guarantee</span>
                        </div>
                        <div className="hero-feature">
                            <div className="feature-icon">✓</div>
                            <span>45-Day Delivery</span>
                        </div>
                    </div>
                </div>
                <div className="hero-image">
                    <div className="hero-image-wrapper">
                        <img
                            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&q=85"
                            alt="Beautiful Home Interior"
                            className="hero-img"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
