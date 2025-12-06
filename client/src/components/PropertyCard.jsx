import React from 'react';
import { MapPin, Ruler, Bed, Bath, Car, ArrowRight } from 'lucide-react';
import './PropertyCard.css';

const PropertyCard = ({ property, onClick = () => { } }) => {
    const formatPrice = (price) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: 0
        }).format(price);
    };

    return (
        <div className="property-card" onClick={() => onClick(property)}>
            <div className="property-card-image-wrapper">
                <img
                    src={property.images[0]}
                    alt={property.title}
                    className="property-card-image"
                    loading="lazy"
                />
                <div className="property-card-badges">
                    <span className="property-badge property-type">{property.type}</span>
                    {property.featured && (
                        <span className="property-badge property-featured">Featured</span>
                    )}
                </div>
                {!property.availability && (
                    <div className="property-sold-overlay">
                        <span>SOLD</span>
                    </div>
                )}
            </div>

            <div className="property-card-content">
                <div className="property-price">{formatPrice(property.price)}</div>
                <h3 className="property-title">{property.title}</h3>

                <div className="property-location">
                    <MapPin size={16} />
                    <span>{property.location}</span>
                </div>

                <div className="property-divider"></div>

                <div className="property-features">
                    <div className="property-feature">
                        <Bed size={18} />
                        <span>{property.bedrooms} Beds</span>
                    </div>
                    <div className="property-feature">
                        <Bath size={18} />
                        <span>{property.bathrooms} Baths</span>
                    </div>
                    <div className="property-feature">
                        <Ruler size={18} />
                        <span>{property.area} sqft</span>
                    </div>
                    {property.parking > 0 && (
                        <div className="property-feature">
                            <Car size={18} />
                            <span>{property.parking}</span>
                        </div>
                    )}
                </div>

                <button className="property-card-btn">
                    View Details
                    <ArrowRight size={16} />
                </button>
            </div>
        </div>
    );
};

export default PropertyCard;
