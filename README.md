# Sign Language Visual Dictionary

A web application that helps users learn sign language through AI-generated visuals and sign language video references.

## Features

- 🔍 Search functionality for sign language words
- 📝 CRUD operations for word entries (Create, Read, Update, Delete)
- 🎨 AI-generated sign language illustrations using FAL.AI
- 🎥 Sign language video references
- 📱 Responsive design
- 🔄 Real-time updates
- 🔍 Instant search filtering

## Tech Stack

### Frontend
- React.js
- React Router for navigation
- Axios for API calls
- CSS for styling

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- CORS for cross-origin requests

### External APIs
- FAL.AI for generating sign language illustrations
- SignASL.org for video references

  ### Prerequisites
- Node.js (v14 or higher)
- MongoDB installed and running
- FAL.AI API key


## API Endpoints
### Words
- GET /words - Retrieve all words
- GET /words/:query - Search for a specific word
- POST /words - Add a new word
  
## Environment Variables
### Backend (.env)
- MONGO_URI : MongoDB connection string
- FAL_API_KEY : FAL.AI API key
- PORT : Server port (default: 3000)
  
## Contributing
1. Fork the repository
2. Create your feature branch ( git checkout -b feature/AmazingFeature )
3. Commit your changes ( git commit -m 'Add some AmazingFeature' )
4. Push to the branch ( git push origin feature/AmazingFeature )
5. Open a Pull Request

## Setup Instructions
1. Clone the repository
2. Install dependencies:
```bash
cd frontend && npm install
cd ../backend && npm install
