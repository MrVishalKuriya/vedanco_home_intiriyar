import express from 'express';
import Property from '../models/Property.js';

const router = express.Router();

// Get all properties with filters
router.get('/', async (req, res) => {
    try {
        const { type, minPrice, maxPrice, location, interiorStyle, featured } = req.query;

        let query = {};

        if (type) query.type = type;
        if (location) query.location = new RegExp(location, 'i');
        if (interiorStyle) query.interiorStyle = interiorStyle;
        if (featured === 'true') query.featured = true;

        if (minPrice || maxPrice) {
            query.price = {};
            if (minPrice) query.price.$gte = Number(minPrice);
            if (maxPrice) query.price.$lte = Number(maxPrice);
        }

        const properties = await Property.find(query).sort({ createdAt: -1 });

        res.json({
            success: true,
            count: properties.length,
            data: properties
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error fetching properties',
            error: error.message
        });
    }
});

// Get featured properties
router.get('/featured', async (req, res) => {
    try {
        const properties = await Property.find({ featured: true, availability: true })
            .limit(6)
            .sort({ createdAt: -1 });

        res.json({
            success: true,
            count: properties.length,
            data: properties
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error fetching featured properties',
            error: error.message
        });
    }
});

// Get single property
router.get('/:id', async (req, res) => {
    try {
        const property = await Property.findById(req.params.id);

        if (!property) {
            return res.status(404).json({
                success: false,
                message: 'Property not found'
            });
        }

        res.json({
            success: true,
            data: property
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error fetching property',
            error: error.message
        });
    }
});

// Create new property (admin)
router.post('/', async (req, res) => {
    try {
        const property = await Property.create(req.body);

        res.status(201).json({
            success: true,
            message: 'Property created successfully',
            data: property
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'Error creating property',
            error: error.message
        });
    }
});

// Update property (admin)
router.put('/:id', async (req, res) => {
    try {
        const property = await Property.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!property) {
            return res.status(404).json({
                success: false,
                message: 'Property not found'
            });
        }

        res.json({
            success: true,
            message: 'Property updated successfully',
            data: property
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'Error updating property',
            error: error.message
        });
    }
});

// Delete property (admin)
router.delete('/:id', async (req, res) => {
    try {
        const property = await Property.findByIdAndDelete(req.params.id);

        if (!property) {
            return res.status(404).json({
                success: false,
                message: 'Property not found'
            });
        }

        res.json({
            success: true,
            message: 'Property deleted successfully'
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error deleting property',
            error: error.message
        });
    }
});

export default router;
