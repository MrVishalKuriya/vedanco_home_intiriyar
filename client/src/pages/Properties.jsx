import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import PropertyCard from '../components/PropertyCard';
import PropertyModal from '../components/PropertyModal';
import { propertyAPI } from '../utils/api';
import { SlidersHorizontal, Search } from 'lucide-react';
import './Properties.css';

const Properties = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [properties, setProperties] = useState([]);
    const [selectedProperty, setSelectedProperty] = useState(null);
    const [loading, setLoading] = useState(true);
    const [showFilters, setShowFilters] = useState(false);

    const [filters, setFilters] = useState({
        type: searchParams.get('type') || '',
        minPrice: '',
        maxPrice: '',
        location: '',
        interiorStyle: ''
    });

    useEffect(() => {
        fetchProperties();
    }, [filters]);

    const fetchProperties = async () => {
        setLoading(true);
        try {
            const params = {};
            if (filters.type) params.type = filters.type;
            if (filters.minPrice) params.minPrice = filters.minPrice;
            if (filters.maxPrice) params.maxPrice = filters.maxPrice;
            if (filters.location) params.location = filters.location;
            if (filters.interiorStyle) params.interiorStyle = filters.interiorStyle;

            const response = await propertyAPI.getAll(params);
            setProperties(response.data.data);
        } catch (error) {
            console.error('Error fetching properties:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleFilterChange = (e) => {
        setFilters({ ...filters, [e.target.name]: e.target.value });
    };

    const handleClearFilters = () => {
        setFilters({
            type: '',
            minPrice: '',
            maxPrice: '',
            location: '',
            interiorStyle: ''
        });
        setSearchParams({});
    };

    return (
        <div className="properties-page">
            <div className="properties-header">
                <div className="container">
                    <h1>Explore Properties</h1>
                    <p>Find your perfect home from our curated collection</p>
                </div>
            </div>

            <div className="properties-container">
                {/* Filters Sidebar */}
                <aside className={`filters-sidebar ${showFilters ? 'show' : ''}`}>
                    <div className="filters-header">
                        <h3>Filters</h3>
                        <button className="btn-text" onClick={handleClearFilters}>
                            Clear All
                        </button>
                    </div>

                    <div className="filter-group">
                        <label className="filter-label">Property Type</label>
                        <select name="type" className="form-select" value={filters.type} onChange={handleFilterChange}>
                            <option value="">All Types</option>
                            <option value="1BHK">1 BHK</option>
                            <option value="2BHK">2 BHK</option>
                            <option value="3BHK">3 BHK</option>
                            <option value="4BHK">4 BHK</option>
                            <option value="Villa">Villa</option>
                            <option value="Flat">Flat</option>
                            <option value="Penthouse">Penthouse</option>
                        </select>
                    </div>

                    <div className="filter-group">
                        <label className="filter-label">Price Range</label>
                        <div className="price-inputs">
                            <input
                                type="number"
                                name="minPrice"
                                className="form-input"
                                placeholder="Min Price"
                                value={filters.minPrice}
                                onChange={handleFilterChange}
                            />
                            <span>-</span>
                            <input
                                type="number"
                                name="maxPrice"
                                className="form-input"
                                placeholder="Max Price"
                                value={filters.maxPrice}
                                onChange={handleFilterChange}
                            />
                        </div>
                    </div>

                    <div className="filter-group">
                        <label className="filter-label">Location</label>
                        <input
                            type="text"
                            name="location"
                            className="form-input"
                            placeholder="Search location..."
                            value={filters.location}
                            onChange={handleFilterChange}
                        />
                    </div>

                    <div className="filter-group">
                        <label className="filter-label">Interior Style</label>
                        <select name="interiorStyle" className="form-select" value={filters.interiorStyle} onChange={handleFilterChange}>
                            <option value="">All Styles</option>
                            <option value="Modern">Modern</option>
                            <option value="Contemporary">Contemporary</option>
                            <option value="Traditional">Traditional</option>
                            <option value="Minimalist">Minimalist</option>
                            <option value="Luxury">Luxury</option>
                            <option value="Scandinavian">Scandinavian</option>
                            <option value="Industrial">Industrial</option>
                        </select>
                    </div>
                </aside>

                {/* Properties Grid */}
                <div className="properties-content">
                    <div className="properties-toolbar">
                        <button
                            className="filters-toggle"
                            onClick={() => setShowFilters(!showFilters)}
                        >
                            <SlidersHorizontal size={20} />
                            <span>Filters</span>
                        </button>
                        <p className="results-count">
                            {loading ? 'Loading...' : `${properties.length} properties found`}
                        </p>
                    </div>

                    {loading ? (
                        <div className="loading-container">
                            <div className="loading-spinner"></div>
                        </div>
                    ) : properties.length === 0 ? (
                        <div className="no-results">
                            <Search size={64} />
                            <h3>No Properties Found</h3>
                            <p>Try adjusting your filters to see more results</p>
                            <button className="btn btn-primary" onClick={handleClearFilters}>
                                Clear Filters
                            </button>
                        </div>
                    ) : (
                        <div className="properties-grid">
                            {properties.map((property) => (
                                <PropertyCard
                                    key={property._id}
                                    property={property}
                                    onClick={setSelectedProperty}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {selectedProperty && (
                <PropertyModal
                    property={selectedProperty}
                    onClose={() => setSelectedProperty(null)}
                />
            )}
        </div>
    );
};

export default Properties;
