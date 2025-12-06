import mongoose from 'mongoose';
import validator from 'validator';

const bookingSchema = new mongoose.Schema({
    property: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Property',
        required: [true, 'Property reference is required']
    },
    customerName: {
        type: String,
        required: [true, 'Customer name is required'],
        trim: true,
        minlength: 2
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        lowercase: true,
        validate: [validator.isEmail, 'Please provide a valid email']
    },
    phone: {
        type: String,
        required: [true, 'Phone number is required'],
        validate: {
            validator: function (v) {
                return /^[0-9]{10}$/.test(v);
            },
            message: 'Please provide a valid 10-digit phone number'
        }
    },
    bookingType: {
        type: String,
        required: true,
        enum: ['Quote Request', 'Site Visit', 'Purchase Intent', 'Interior Design'],
        default: 'Quote Request'
    },
    message: {
        type: String,
        default: ''
    },
    status: {
        type: String,
        enum: ['Pending', 'Contacted', 'Completed', 'Cancelled'],
        default: 'Pending'
    },
    preferredDate: {
        type: Date
    }
}, {
    timestamps: true
});

// Index for admin queries
bookingSchema.index({ status: 1, createdAt: -1 });

const Booking = mongoose.model('Booking', bookingSchema);

export default Booking;
