# InternTrack

This is a full-stack web application developed to streamline and manage the internship records of students in an academic setting. The primary goal of the system is to provide coordinators with an intuitive and efficient platform to track, view, filter, and manage internship-related data. The system is built using React for the frontend and Node.js with Express.js for the backend, connected to a MongoDB database using Mongoose.

## Purpose

The primary purpose of this project is to simplify and digitize the process of managing student internship records within an educational institution. Traditionally, maintaining these records involved manual entry, scattered data, and difficulty in retrieving specific information. This system aims to overcome these challenges by offering a centralized digital platform where internship details can be securely stored, easily accessed, and efficiently managed by the coordinator. 

### Key Features:
- **Search**: Search for individual student records by registration number.
- **Filters**: Filter records based on company, location (India / Abroad), or internship source (College / Own).
- **View**: View detailed internship records, including company information, duration, location, and proof documents.
- **Delete**: Delete student records when necessary.
- **User Authentication**: Secure authentication using JSON Web Token (JWT).
- **Role-based Access**: Only authorized users can modify or view sensitive information.

## Scope

The scope of this project encompasses the development of a full-stack web application specifically designed for college coordinators to manage and monitor internship records of students. The system allows for the collection, display, filtering, searching, and deletion of internship-related data, including company details, duration, location, and proof documents. 

The application is designed to be user-friendly, scalable, and adaptable to various departments within the institution. The system supports role-based access, ensuring that only authorized users can modify or view sensitive information. Furthermore, the system is flexible enough to be extended with features like PDF report generation, analytics dashboards, or integration with external portals.

## Technology Used

### Frontend:
- React.js
- React Router
- JavaScript
- HTML
- CSS (with inline styling or custom CSS files)

### Backend:
- Node.js
- Express.js

### API Communication:
- Axios (for HTTP requests)

### Database:
- MongoDB
- Mongoose (MongoDB ODM)

### Authentication:
- JSON Web Token (JWT)
- CORS (Cross-Origin Resource Sharing)

### Development Tools:
- Visual Studio Code (VS Code)
- Postman (for API testing)


## Folder Structure

```plaintext
internship-management-system/
├── backend/                # Backend Node.js and Express server
│   ├── models/             # Mongoose models (schemas)
│   ├── routes/             # API routes
│   ├── controllers/        # Logic for handling routes
│   ├── server.js           # Backend entry point
│   └── .env                # Backend environment variables
└── frontend/               # Frontend React application
    ├── public/             # Static files
    ├── src/
    │   ├── components/     # React components
    │   ├── pages/          # React pages (Home, View Records, etc.)
    │   ├── App.js          # Main React app file
    │   └── index.js        # React entry point
    └── .env                # Frontend environment variables
```

## Implementation

### Frontend (React)

- **React Components**: Developed the frontend using React, allowing the internship coordinator to interact with the system in a responsive and user-friendly manner.
  
- **useState**: Used to manage form inputs and store fetched student data.
  
- **React Router**: Implemented for navigation between different pages such as:
    - Coordinator Home
    - View All Students
    - Delete a Record
  
- **Axios**: Used for sending HTTP requests (GET, DELETE) to the backend API.
  
- **Search & Filters**: Implemented search functionality by registration number and added filters for viewing records based on company, location, and internship source.
  
- **Table**: Displayed student details in a structured format with proof document links.
  
- **Styling**: Basic styling using inline CSS and optional custom CSS files.

### Backend (Node.js + Express.js)

- **Node.js & Express**: Built the backend server using Node.js and the Express.js framework for routing and handling API requests.
  
- **RESTful API**: Created RESTful API endpoints such as:
    - `GET /`: Fetch all student records
    - `DELETE /:id`: Delete a specific student record by ID
  
- **MongoDB**: Stored student internship records in MongoDB using Mongoose for defining schemas and performing queries.
  
- **CORS**: Configured CORS to allow cross-origin requests from the frontend.
  
- **JWT Authentication**: Implemented secure authentication using JSON Web Tokens (JWT) for access control.

