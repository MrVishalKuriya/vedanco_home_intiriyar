import React, { useState } from 'react';
import { contactAPI } from '../utils/api';
import { Mail, Phone, MapPin, Send, Check } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });
    const [submitting, setSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);

        try {
            await contactAPI.submit(formData);
            setSuccess(true);
            setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
            setTimeout(() => setSuccess(false), 5000);
        } catch (error) {
            alert('Error submitting form. Please try again.');
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="contact-page">
            <div className="contact-header">
                <h1>Get In Touch</h1>
                <p>Have questions? We'd love to hear from you.</p>
            </div>

            <div className="contact-container">
                <div className="contact-info">
                    <h2>Contact Information</h2>
                    <p>Fill out the form and our team will get back to you within 24 hours.</p>

                    <div className="contact-details">
                        <div className="contact-detail">
                            <div className="contact-icon">
                                <Phone size={24} />
                            </div>
                            <div>
                                <h4>Phone</h4>
                                <p>+91 98765 43210</p>
                            </div>
                        </div>

                        <div className="contact-detail">
                            <div className="contact-icon">
                                <Mail size={24} />
                            </div>
                            <div>
                                <h4>Email</h4>
                                <p>info@vedanco.com</p>
                            </div>
                        </div>

                        <div className="contact-detail">
                            <div className="contact-icon">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h4>Office</h4>
                                <p>SG Highway, Ahmedabad, Gujarat 380015</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="contact-form-wrapper">
                    {success ? (
                        <div className="success-message">
                            <Check size={64} />
                            <h3>Message Sent Successfully!</h3>
                            <p>Thank you for contacting us. We'll get back to you soon.</p>
                        </div>
                    ) : (
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-row">
                                <div className="form-group">
                                    <label className="form-label">Full Name *</label>
                                    <input
                                        type="text"
                                        name="name"
                                        className="form-input"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="form-group">
                                    <label className="form-label">Email *</label>
                                    <input
                                        type="email"
                                        name="email"
                                        className="form-input"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label className="form-label">Phone *</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        className="form-input"
                                        required
                                        pattern="[0-9]{10}"
                                        value={formData.phone}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="form-group">
                                    <label className="form-label">Subject *</label>
                                    <input
                                        type="text"
                                        name="subject"
                                        className="form-input"
                                        required
                                        value={formData.subject}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="form-label">Message *</label>
                                <textarea
                                    name="message"
                                    className="form-textarea"
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                />
                            </div>

                            <button type="submit" className="btn btn-primary btn-large" disabled={submitting}>
                                {submitting ? 'Sending...' : 'Send Message'}
                                <Send size={20} />
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Contact;
