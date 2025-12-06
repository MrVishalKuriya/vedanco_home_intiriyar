# Vedanco Home Interior

Full-stack home interior and property buying platform built with React, Express, and MongoDB.

## Features

- Browse premium BHK properties (1BHK to 4BHK, Villas, Penthouses)
- Advanced filtering by type, price, location, and interior style
- Property details with image gallery
- Booking/quote request system
- Contact form
- Responsive design
- Premium modern UI with animations

## Tech Stack

**Frontend:**
- React 18 with Vite
- React Router for navigation
- Axios for API calls
- Lucide React for icons
- Vanilla CSS with custom design system

**Backend:**
- Node.js with Express
- MongoDB with Mongoose
- CORS enabled
- RESTful API architecture

## Project Structure

```
vedanco_home_intiriyar_and_baing/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── utils/         # API utilities
│   │   ├── App.jsx        # Main app component
│   │   └── main.jsx       # Entry point
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
│
└── server/                # Express backend
    ├── models/            # Mongoose schemas
    ├── routes/            # API routes
    ├── seeds/             # Database seed files
    ├── server.js          # Express server
    ├── package.json
    └── .env              # Environment variables
```

## Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- MongoDB (local or MongoDB Atlas)

### Backend Setup

1. Navigate to server directory:
```bash
cd server
```

2. Install dependencies:
```bash
npm install
```

3. Configure environment variables in `.env`:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/vedanco_home_interior
JWT_SECRET=vedanco_jwt_secret_key_2024_secure
NODE_ENV=development
```

4. Seed the database with sample data:
```bash
npm run seed
```

5. Start the server:
```bash
npm run dev
```

Server will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to client directory:
```bash
cd client
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

Frontend will run on `http://localhost:3000`

## API Endpoints

### Properties
- `GET /api/properties` - Get all properties (with optional filters)
- `GET /api/properties/featured` - Get featured properties
- `GET /api/properties/:id` - Get single property
- `POST /api/properties` - Create property (admin)
- `PUT /api/properties/:id` - Update property (admin)
- `DELETE /api/properties/:id` - Delete property (admin)

### Bookings
- `POST /api/bookings` - Create booking/quote request
- `GET /api/bookings` - Get all bookings (admin)
- `GET /api/bookings/:id` - Get single booking
- `PUT /api/bookings/:id` - Update booking status (admin)

### Contact
- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Get all contacts (admin)
- `PUT /api/contact/:id` - Update contact status (admin)

## Usage

1. **Browse Properties**: Visit the Properties page to explore all available properties
2. **Filter**: Use the sidebar filters to narrow down your search by type, price, location, or interior style
3. **View Details**: Click on any property card to view full details and image gallery
4. **Book/Request Quote**: Fill out the booking form within the property modal
5. **Contact**: Use the contact page for general inquiries

## Development

- Frontend uses Vite for fast development and hot module replacement
- Backend uses Node's `--watch` flag for auto-reload during development
- MongoDB for data persistence
- CORS enabled for cross-origin requests

## Production Build

### Frontend
```bash
cd client
npm run build
```

### Backend
```bash
cd server
npm start
```

## License

MIT

## Contact

For questions or support, contact: info@vedanco.com
