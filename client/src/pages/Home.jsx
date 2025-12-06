import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calculator, ArrowRight, HomeIcon, Palette, Clock, Shield, Star, Sofa, Users, Award, Phone } from 'lucide-react';
import Hero from '../components/Hero';
import PropertyCard from '../components/PropertyCard';
import { propertyAPI } from '../utils/api';
import './Home.css';

const HomePage = () => {
    const [featuredProperties, setFeaturedProperties] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchFeaturedProperties();
    }, []);

    const fetchFeaturedProperties = async () => {
        try {
            const response = await propertyAPI.getFeatured();
            setFeaturedProperties(response.data.data || []);
        } catch (error) {
            console.error('Error fetching featured properties:', error);
            setFeaturedProperties([]);
        } finally {
            setLoading(false);
        }
    };

    // Room styles data
    const roomStyles = [
        {
            id: 1,
            title: 'Living Room',
            type: 'Modern',
            image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=600&q=80',
            description: 'Create a welcoming space with contemporary designs and comfortable seating.'
        },
        {
            id: 2,
            title: 'Bedroom',
            type: 'Minimalist',
            image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80',
            description: 'Transform your bedroom into a serene retreat with calming colors.'
        },
        {
            id: 3,
            title: 'Kitchen',
            type: 'Contemporary',
            image: 'https://images.unsplash.com/photo-1600566753190-4e2a09cf159d?w=600&q=80',
            description: 'Design a functional and stylish kitchen with modern appliances.'
        }
    ];

    // Services data
    const services = [
        { icon: <HomeIcon size={32} />, title: 'Space Planning' },
        { icon: <Palette size={32} />, title: 'Color Consultation' },
        { icon: <Clock size={32} />, title: '3D Rendering' },
        { icon: <Shield size={32} />, title: 'Quality Assurance' },
        { icon: <Star size={32} />, title: 'Custom Design' },
        { icon: <Sofa size={32} />, title: 'Furniture Selection' }
    ];

    return (
        <div className="home-page">
            {/* Hero Section */}
            <Hero />
            
            {/* Homes for Every Style */}
            <section className="homes-style-section">
                <div className="container">
                    <div className="section-header">
                        <div>
                            <h2 className="section-title">Homes for Every Style</h2>
                            <p className="section-subtitle">Discover our signature interior design themes tailored to your lifestyle</p>
                        </div>
                        <Link to="/properties" className="btn btn-secondary">
                            View All Styles
                        </Link>
                    </div>
                    
                    <div className="room-styles-grid">
                        {roomStyles.map((room) => (
                            <div key={room.id} className="room-style-card">
                                <div className="room-image-wrapper">
                                    <img src={room.image} alt={room.title} className="room-image" />
                                    <div className="room-overlay">
                                        <span className="room-type-badge">{room.type}</span>
                                    </div>
                                </div>
                                <div className="room-info">
                                    <h3>{room.title}</h3>
                                    <p>{room.description}</p>
                                    <Link to="/properties" className="room-cta">
                                        Explore Designs <ArrowRight size={18} />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            
            {/* Estimator Section */}
            <section className="estimator-section">
                <div className="container">
                    <div className="text-center mb-4">
                        <h2 className="section-title">Plan Your Dream Home</h2>
                        <p className="section-subtitle">Get instant estimates and schedule consultations with our experts</p>
                    </div>
                    
                    <div className="estimator-grid">
                        <div className="estimator-card">
                            <div className="estimator-icon">
                                <Calculator size={40} />
                            </div>
                            <h3>Cost Estimator</h3>
                            <p>Calculate the cost of your dream home renovation with our instant estimator tool.</p>
                            <Link to="/contact" className="btn btn-primary">Get Estimate</Link>
                        </div>
                        
                        <div className="estimator-card">
                            <div className="estimator-icon">
                                <Users size={40} />
                            </div>
                            <h3>Book Consultation</h3>
                            <p>Schedule a free consultation with our interior design experts today.</p>
                            <Link to="/contact" className="btn btn-primary">Book Now</Link>
                        </div>
                        
                        <div className="estimator-card">
                            <div className="estimator-icon">
                                <Award size={40} />
                            </div>
                            <h3>Design Guarantee</h3>
                            <p>We offer a satisfaction guarantee on all our interior design projects.</p>
                            <Link to="/about" className="btn btn-primary">Learn More</Link>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Services Section */}
            <section className="services-section">
                <div className="container">
                    <div className="text-center mb-4">
                        <h2 className="section-title">Our Premium Services</h2>
                        <p className="section-subtitle">Comprehensive interior solutions tailored to your unique needs</p>
                    </div>
                    
                    <div className="services-grid">
                        {services.map((service, index) => (
                            <div key={index} className="service-item">
                                <div className="service-icon">
                                    {service.icon}
                                </div>
                                <h4>{service.title}</h4>
                            </div>
                        ))}
                    </div>
                    
                    <div className="warranty-section">
                        <div className="warranty-card">
                            <Shield size={48} />
                            <h3>10-Year Warranty</h3>
                            <p>All our interior work comes with a comprehensive 10-year warranty for your peace of mind.</p>
                        </div>
                        
                        <div className="warranty-card">
                            <Phone size={48} />
                            <h3>24/7 Support</h3>
                            <p>Dedicated customer support team available round the clock for all your queries.</p>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Featured Properties */}
            <section className="featured-properties">
                <div className="container">
                    <div className="section-header">
                        <div>
                            <h2 className="section-title">Featured Properties</h2>
                            <p className="section-subtitle">Handpicked selection of our finest interior design projects</p>
                        </div>
                        <Link to="/properties" className="btn btn-secondary">
                            View All Properties
                        </Link>
                    </div>
                    
                    {loading ? (
                        <div className="loading-container">
                            <div className="loading-spinner"></div>
                        </div>
                    ) : (
                        <div className="properties-grid">
                            {(featuredProperties || []).slice(0, 3).map((property) => (
                                <PropertyCard key={property._id} property={property} />
                            ))}
                        </div>
                    )}
                </div>
            </section>
            
            {/* CTA Section */}
            <section className="cta-section">
                <div className="container">
                    <div className="cta-content">
                        <h2>Ready to Transform Your Home?</h2>
                        <p>Join thousands of satisfied customers who have redefined their living spaces with Vedanco</p>
                        <div className="cta-buttons">
                            <Link to="/contact" className="btn btn-primary">
                                <Phone size={20} />
                                Schedule Consultation
                            </Link>
                            <Link to="/properties" className="btn btn-secondary">
                                <ArrowRight size={20} />
                                Browse Projects
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;