import mongoose from 'mongoose';

const propertySchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Property title is required'],
        trim: true
    },
    type: {
        type: String,
        required: [true, 'Property type is required'],
        enum: ['1BHK', '2BHK', '3BHK', '4BHK', 'Flat', 'Villa', 'Penthouse']
    },
    price: {
        type: Number,
        required: [true, 'Price is required'],
        min: 0
    },
    location: {
        type: String,
        required: [true, 'Location is required'],
        trim: true
    },
    area: {
        type: Number,
        required: [true, 'Area is required'],
        min: 0
    },
    images: [{
        type: String,
        required: true
    }],
    description: {
        type: String,
        required: [true, 'Description is required'],
        minlength: 20
    },
    amenities: [{
        type: String
    }],
    interiorStyle: {
        type: String,
        enum: ['Modern', 'Contemporary', 'Traditional', 'Minimalist', 'Luxury', 'Scandinavian', 'Industrial'],
        default: 'Modern'
    },
    availability: {
        type: Boolean,
        default: true
    },
    featured: {
        type: Boolean,
        default: false
    },
    bedrooms: {
        type: Number,
        required: true,
        min: 1
    },
    bathrooms: {
        type: Number,
        required: true,
        min: 1
    },
    parking: {
        type: Number,
        default: 0
    }
}, {
    timestamps: true
});

// Index for faster queries
propertySchema.index({ type: 1, price: 1, location: 1 });
propertySchema.index({ featured: 1 });

const Property = mongoose.model('Property', propertySchema);

export default Property;
