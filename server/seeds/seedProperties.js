import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Property from '../models/Property.js';

dotenv.config();

const properties = [
    {
        title: 'Luxury 3BHK Apartment with Modern Interior',
        type: '3BHK',
        price: 8500000,
        location: 'Ahmedabad, Satellite',
        area: 1850,
        images: [
            'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9',
            'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c',
            'https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4'
        ],
        description: 'Stunning 3BHK apartment featuring contemporary interior design with premium finishes. Spacious living areas, modular kitchen, and floor-to-ceiling windows offering panoramic city views.',
        amenities: ['Modular Kitchen', 'Gym', 'Swimming Pool', 'Parking', 'Security', 'Power Backup', 'Lift'],
        interiorStyle: 'Contemporary',
        availability: true,
        featured: true,
        bedrooms: 3,
        bathrooms: 3,
        parking: 2
    },
    {
        title: 'Elegant 2BHK with Minimalist Design',
        type: '2BHK',
        price: 5500000,
        location: 'Ahmedabad, Prahlad Nagar',
        area: 1250,
        images: [
            'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3',
            'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68'
        ],
        description: 'Beautifully designed 2BHK apartment with minimalist interior theme. Perfect for young professionals and small families. Features smart home integration.',
        amenities: ['Smart Home', 'Modular Kitchen', 'Clubhouse', 'Garden', 'Parking', 'Security'],
        interiorStyle: 'Minimalist',
        availability: true,
        featured: true,
        bedrooms: 2,
        bathrooms: 2,
        parking: 1
    },
    {
        title: 'Premium 4BHK Penthouse',
        type: '4BHK',
        price: 15000000,
        location: 'Ahmedabad, SG Highway',
        area: 3200,
        images: [
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
            'https://images.unsplash.com/photo-1600566752355-35792bedcfea'
        ],
        description: 'Luxurious 4BHK penthouse with world-class amenities. Features private terrace, jacuzzi, and bespoke luxury interiors crafted by renowned designers.',
        amenities: ['Private Terrace', 'Jacuzzi', 'Home Theater', 'Wine Cellar', 'Gym', 'Parking', 'Concierge'],
        interiorStyle: 'Luxury',
        availability: true,
        featured: true,
        bedrooms: 4,
        bathrooms: 5,
        parking: 3
    },
    {
        title: 'Cozy 1BHK Smart Apartment',
        type: '1BHK',
        price: 3200000,
        location: 'Ahmedabad, Bodakdev',
        area: 650,
        images: [
            'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267',
            'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688'
        ],
        description: 'Compact yet spacious 1BHK apartment with modern amenities. Perfect for bachelors and young couples starting their journey. Fully furnished with contemporary interiors.',
        amenities: ['Fully Furnished', 'Smart Home', 'Gym', 'Security', 'Parking'],
        interiorStyle: 'Modern',
        availability: true,
        featured: false,
        bedrooms: 1,
        bathrooms: 1,
        parking: 1
    },
    {
        title: 'Spacious 3BHK with Traditional Touch',
        type: '3BHK',
        price: 7200000,
        location: 'Ahmedabad, Vastrapur',
        area: 1650,
        images: [
            'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d'
        ],
        description: 'Thoughtfully designed 3BHK apartment blending traditional aesthetics with modern convenience. Vastu-compliant layout with premium wooden finishes.',
        amenities: ['Wooden Flooring', 'Pooja Room', 'Balcony', 'Parking', 'Security', 'Lift'],
        interiorStyle: 'Traditional',
        availability: true,
        featured: false,
        bedrooms: 3,
        bathrooms: 2,
        parking: 2
    },
    {
        title: 'Modern 2BHK Industrial Loft',
        type: '2BHK',
        price: 6800000,
        location: 'Ahmedabad, Thaltej',
        area: 1400,
        images: [
            'https://images.unsplash.com/photo-1600585152220-90363fe7e115'
        ],
        description: 'Unique industrial-themed 2BHK loft apartment with exposed brick walls, high ceilings, and modern fixtures. Perfect for creative professionals.',
        amenities: ['High Ceilings', 'Loft Space', 'Modular Kitchen', 'Terrace', 'Parking'],
        interiorStyle: 'Industrial',
        availability: true,
        featured: false,
        bedrooms: 2,
        bathrooms: 2,
        parking: 1
    },
    {
        title: 'Scandinavian 2BHK Apartment',
        type: '2BHK',
        price: 5800000,
        location: 'Ahmedabad, Maninagar',
        area: 1150,
        images: [
            'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c'
        ],
        description: 'Light and airy 2BHK apartment with Scandinavian design philosophy. Features natural materials, neutral colors, and functional minimalism.',
        amenities: ['Natural Lighting', 'Wooden Accents', 'Garden View', 'Parking', 'Security'],
        interiorStyle: 'Scandinavian',
        availability: true,
        featured: true,
        bedrooms: 2,
        bathrooms: 2,
        parking: 1
    },
    {
        title: 'Villa with 3BHK Layout',
        type: 'Villa',
        price: 12000000,
        location: 'Ahmedabad, Ambli',
        area: 2800,
        images: [
            'https://images.unsplash.com/photo-1600585154526-990dced4db0d'
        ],
        description: 'Independent villa with 3BHK configuration. Private garden, swimming pool, and terrace. Perfect for families seeking privacy and luxury.',
        amenities: ['Private Garden', 'Swimming Pool', 'Terrace', 'Garage', 'Security System'],
        interiorStyle: 'Luxury',
        availability: true,
        featured: true,
        bedrooms: 3,
        bathrooms: 4,
        parking: 2
    },
    {
        title: 'Contemporary 1BHK Studio',
        type: '1BHK',
        price: 2800000,
        location: 'Ahmedabad, Gurukul',
        area: 580,
        images: [
            'https://images.unsplash.com/photo-1600566752355-35792bedcfea'
        ],
        description: 'Efficient studio-style 1BHK apartment with open layout. Ideal investment for rental income or first-time buyers.',
        amenities: ['Open Layout', 'Modular Kitchen', 'Security', 'Lift'],
        interiorStyle: 'Contemporary',
        availability: true,
        featured: false,
        bedrooms: 1,
        bathrooms: 1,
        parking: 1
    },
    {
        title: 'Luxurious 3BHK Flat',
        type: 'Flat',
        price: 9200000,
        location: 'Ahmedabad, Science City',
        area: 2100,
        images: [
            'https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4'
        ],
        description: 'Expansive 3BHK flat with premium specifications. Features imported fittings, designer lighting, and smart home automation.',
        amenities: ['Smart Automation', 'Imported Fittings', 'Gym', 'Clubhouse', 'Swimming Pool', 'Parking'],
        interiorStyle: 'Luxury',
        availability: true,
        featured: true,
        bedrooms: 3,
        bathrooms: 3,
        parking: 2
    }
];

async function seedDatabase() {
    try {
        // Connect to MongoDB
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('✅ Connected to MongoDB');

        // Clear existing properties
        await Property.deleteMany({});
        console.log('🗑️  Cleared existing properties');

        // Insert new properties
        const createdProperties = await Property.insertMany(properties);
        console.log(`✅ Successfully seeded ${createdProperties.length} properties`);

        // Display summary
        console.log('\n📊 Seeding Summary:');
        console.log(`   - 1BHK: ${createdProperties.filter(p => p.type === '1BHK').length}`);
        console.log(`   - 2BHK: ${createdProperties.filter(p => p.type === '2BHK').length}`);
        console.log(`   - 3BHK: ${createdProperties.filter(p => p.type === '3BHK').length}`);
        console.log(`   - 4BHK: ${createdProperties.filter(p => p.type === '4BHK').length}`);
        console.log(`   - Villa: ${createdProperties.filter(p => p.type === 'Villa').length}`);
        console.log(`   - Featured: ${createdProperties.filter(p => p.featured).length}`);

        process.exit(0);
    } catch (error) {
        console.error('❌ Error seeding database:', error.message);
        process.exit(1);
    }
}

seedDatabase();
