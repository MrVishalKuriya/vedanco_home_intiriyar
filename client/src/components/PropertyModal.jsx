import React, { useState } from 'react';
import { X, MapPin, Ruler, Bed, Bath, Car, Check, ChevronLeft, ChevronRight } from 'lucide-react';
import { bookingAPI } from '../utils/api';
import './PropertyModal.css';

const PropertyModal = ({ property, onClose }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [showBookingForm, setShowBookingForm] = useState(false);
    const [formData, setFormData] = useState({
        customerName: '',
        email: '',
        phone: '',
        bookingType: 'Quote Request',
        message: ''
    });
    const [submitting, setSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);

    if (!property) return null;

    const formatPrice = (price) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: 0
        }).format(price);
    };

    const handlePrevImage = () => {
        setCurrentImageIndex((prev) =>
            prev === 0 ? property.images.length - 1 : prev - 1
        );
    };

    const handleNextImage = () => {
        setCurrentImageIndex((prev) =>
            prev === property.images.length - 1 ? 0 : prev + 1
        );
    };

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);

        try {
            await bookingAPI.create({
                ...formData,
                property: property._id
            });
            setSuccess(true);
            setTimeout(() => {
                onClose();
            }, 2000);
        } catch (error) {
            alert('Error submitting booking. Please try again.');
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="modal-backdrop" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>
                    <X size={24} />
                </button>

                <div className="modal-body">
                    {/* Image Gallery */}
                    <div className="modal-gallery">
                        <img
                            src={property.images[currentImageIndex]}
                            alt={property.title}
                            className="modal-image"
                        />
                        {property.images.length > 1 && (
                            <>
                                <button className="gallery-btn gallery-prev" onClick={handlePrevImage}>
                                    <ChevronLeft size={24} />
                                </button>
                                <button className="gallery-btn gallery-next" onClick={handleNextImage}>
                                    <ChevronRight size={24} />
                                </button>
                                <div className="gallery-indicators">
                                    {property.images.map((_, index) => (
                                        <button
                                            key={index}
                                            className={`gallery-indicator ${index === currentImageIndex ? 'active' : ''}`}
                                            onClick={() => setCurrentImageIndex(index)}
                                        />
                                    ))}
                                </div>
                            </>
                        )}
                    </div>

                    <div className="modal-details">
                        <div className="modal-badges">
                            <span className="property-badge property-type">{property.type}</span>
                            {property.featured && (
                                <span className="property-badge property-featured">Featured</span>
                            )}
                        </div>

                        <h2 className="modal-title">{property.title}</h2>
                        <div className="modal-price">{formatPrice(property.price)}</div>

                        <div className="modal-location">
                            <MapPin size={18} />
                            <span>{property.location}</span>
                        </div>

                        <div className="modal-features-grid">
                            <div className="modal-feature">
                                <Bed size={20} />
                                <div>
                                    <div className="feature-label">Bedrooms</div>
                                    <div className="feature-value">{property.bedrooms}</div>
                                </div>
                            </div>
                            <div className="modal-feature">
                                <Bath size={20} />
                                <div>
                                    <div className="feature-label">Bathrooms</div>
                                    <div className="feature-value">{property.bathrooms}</div>
                                </div>
                            </div>
                            <div className="modal-feature">
                                <Ruler size={20} />
                                <div>
                                    <div className="feature-label">Area</div>
                                    <div className="feature-value">{property.area} sqft</div>
                                </div>
                            </div>
                            <div className="modal-feature">
                                <Car size={20} />
                                <div>
                                    <div className="feature-label">Parking</div>
                                    <div className="feature-value">{property.parking}</div>
                                </div>
                            </div>
                        </div>

                        <div className="modal-section">
                            <h3>Description</h3>
                            <p>{property.description}</p>
                        </div>

                        <div className="modal-section">
                            <h3>Interior Style</h3>
                            <span className="interior-style-badge">{property.interiorStyle}</span>
                        </div>

                        {property.amenities && property.amenities.length > 0 && (
                            <div className="modal-section">
                                <h3>Amenities</h3>
                                <ul className="amenities-list">
                                    {property.amenities.map((amenity, index) => (
                                        <li key={index}>
                                            <Check size={18} />
                                            <span>{amenity}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {!showBookingForm ? (
                            <button
                                className="btn btn-primary btn-large modal-cta"
                                onClick={() => setShowBookingForm(true)}
                                disabled={!property.availability}
                            >
                                {property.availability ? 'Book Now / Request Quote' : 'Sold Out'}
                            </button>
                        ) : success ? (
                            <div className="success-message">
                                <Check size={48} />
                                <h3>Booking Request Submitted!</h3>
                                <p>We'll contact you soon.</p>
                            </div>
                        ) : (
                            <form className="booking-form" onSubmit={handleSubmit}>
                                <h3>Book This Property</h3>

                                <div className="form-group">
                                    <label className="form-label">Full Name *</label>
                                    <input
                                        type="text"
                                        name="customerName"
                                        className="form-input"
                                        required
                                        value={formData.customerName}
                                        onChange={handleInputChange}
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
                                        onChange={handleInputChange}
                                    />
                                </div>

                                <div className="form-group">
                                    <label className="form-label">Phone *</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        className="form-input"
                                        required
                                        pattern="[0-9]{10}"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                    />
                                </div>

                                <div className="form-group">
                                    <label className="form-label">Booking Type *</label>
                                    <select
                                        name="bookingType"
                                        className="form-select"
                                        value={formData.bookingType}
                                        onChange={handleInputChange}
                                    >
                                        <option>Quote Request</option>
                                        <option>Site Visit</option>
                                        <option>Purchase Intent</option>
                                        <option>Interior Design</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label className="form-label">Message</label>
                                    <textarea
                                        name="message"
                                        className="form-textarea"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="btn btn-primary btn-large"
                                    disabled={submitting}
                                >
                                    {submitting ? 'Submitting...' : 'Submit Request'}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PropertyModal;
