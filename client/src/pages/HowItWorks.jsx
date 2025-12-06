import React from 'react';
import { Search, Calendar, Palette, Key } from 'lucide-react';
import './HowItWorks.css';

const HowItWorks = () => {
    const steps = [
        {
            icon: Search,
            title: 'Browse Properties',
            description: 'Explore our curated collection of premium BHK properties with various interior styles and price ranges.'
        },
        {
            icon: Calendar,
            title: 'Schedule a Visit',
            description: 'Book a site visit or virtual tour at your convenience. Our team will guide you through the property.'
        },
        {
            icon: Palette,
            title: 'Customize Interiors',
            description: 'Work with our expert designers to customize the interiors according to your taste and requirements.'
        },
        {
            icon: Key,
            title: 'Move In',
            description: 'Complete the paperwork and move into your dream home. We ensure a smooth handover process.'
        }
    ];

    return (
        <div className="how-it-works-page">
            <div className="how-header">
                <h1>How It Works</h1>
                <p>Your journey to the perfect home in 4 simple steps</p>
            </div>

            <div className="container section">
                <div className="steps-container">
                    {steps.map((step, index) => {
                        const Icon = step.icon;
                        return (
                            <div key={index} className="step-card">
                                <div className="step-number">{index + 1}</div>
                                <div className="step-icon">
                                    <Icon size={40} />
                                </div>
                                <h3>{step.title}</h3>
                                <p>{step.description}</p>
                            </div>
                        );
                    })}
                </div>

                <div className="cta-box">
                    <h2>Ready to Get Started?</h2>
                    <p>Browse our properties and take the first step towards your dream home</p>
                    <a href="/properties" className="btn btn-primary btn-large">
                        Explore Properties
                    </a>
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;
