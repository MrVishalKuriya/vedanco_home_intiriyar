import React from 'react';
import { Target, Award, Users, TrendingUp } from 'lucide-react';
import './About.css';

const About = () => {
    return (
        <div className="about-page">
            <div className="about-header">
                <h1>About Vedanco</h1>
                <p>Transforming Houses Into Dream Homes</p>
            </div>

            <div className="container section">
                <div className="about-intro">
                    <h2>Our Story</h2>
                    <p>
                        Founded with a vision to revolutionize the home interior industry, Vedanco has been
                        helping families find their dream homes for over a decade. We combine premium property
                        selection with world-class interior design services to create living spaces that truly
                        reflect your personality and lifestyle.
                    </p>
                    <p>
                        Our team of experienced designers, architects, and real estate professionals work together
                        to ensure every property we offer meets the highest standards of quality, aesthetics, and
                        functionality. From compact 1BHK apartments to sprawling luxury villas, we have something
                        for everyone.
                    </p>
                </div>

                <div className="values-grid">
                    <div className="value-card">
                        <div className="value-icon">
                            <Target size={40} />
                        </div>
                        <h3>Our Mission</h3>
                        <p>To make luxury living accessible and provide personalized interior solutions that exceed expectations.</p>
                    </div>

                    <div className="value-card">
                        <div className="value-icon">
                            <Award size={40} />
                        </div>
                        <h3>Quality First</h3>
                        <p>Every property undergoes rigorous quality checks to ensure premium standards and lasting value.</p>
                    </div>

                    <div className="value-card">
                        <div className="value-icon">
                            <Users size={40} />
                        </div>
                        <h3>Customer Focus</h3>
                        <p>Your satisfaction is our priority. We provide end-to-end support throughout your journey.</p>
                    </div>

                    <div className="value-card">
                        <div className="value-icon">
                            <TrendingUp size={40} />
                        </div>
                        <h3>Innovation</h3>
                        <p>We stay ahead of design trends and incorporate the latest technologies in our properties.</p>
                    </div>
                </div>

                <div className="stats-section">
                    <div className="stat-item">
                        <h3>500+</h3>
                        <p>Properties Delivered</p>
                    </div>
                    <div className="stat-item">
                        <h3>1000+</h3>
                        <p>Happy Families</p>
                    </div>
                    <div className="stat-item">
                        <h3>50+</h3>
                        <p>Design Styles</p>
                    </div>
                    <div className="stat-item">
                        <h3>10+</h3>
                        <p>Years Experience</p>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default About;
