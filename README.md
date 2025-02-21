🌸 Worood Flower Shop

A web-based flower shop built with React, Firebase Realtime Database, and React Router.

🚀 Features

🌼 Browse all flowers

🔍 View product details

➕ Add new products (Admin)

✏️ Update existing products (Admin)

❌ Delete products (Admin)

🔐 User authentication with Firebase

🛠️ Technologies Used

Frontend: React, React Router, React Firebase Hooks

Backend: Firebase Realtime Database (REST API)

Styling: CSS

Package Manager: npm

📂 Folder Structure
src/
├── assets/          # Static assets (images, logos, etc.)
├── components/      # UI components
│   ├── AboutUs.jsx
│   ├── AddProduct.jsx
│   ├── AllFlowers.jsx
│   ├── DeleteProduct.jsx
│   ├── HomePage.jsx
│   ├── Navbar.jsx
│   ├── ProductDetails.jsx
│   ├── UpdateProduct.jsx
│   ├── UserAuth.jsx
├── styles/          # CSS files
│   ├── styling.css
├── utils/           # Utility functions
│   ├── auth.js      # Firebase authentication logic
│   ├── api.js       # API requests
├── config/          # Firebase configuration
│   ├── firebase.js
├── App.jsx          # Main application component
├── main.jsx         # React entry point
└── index.html       # Main HTML file

🔧 Setup Instructions

1️⃣ Clone the Repository
git clone https://github.com/your-username/worood-flower-shop.git
cd worood-flower-shop

2️⃣ Install Dependencies
npm install

3️⃣ Configure Firebase
Create a Firebase Project at Firebase Console.
Enable Authentication (Email/Password) & Realtime Database.
Replace Firebase credentials in src/config/firebase.js:
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  databaseURL: "YOUR_DATABASE_URL",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};

export const app = initializeApp(firebaseConfig);

4️⃣ Run the Development Server
npm run dev

The app should be running at http://localhost:5173 (if using Vite).

✅ Usage

Guests can browse flowers but cannot add/update/delete.

Logged-in Users can manage products.

Click on the "User" page to sign in or register.

📌 Future Improvements

🌍 Multi-language support

🛒 Shopping cart functionality

📦 Order management system

🤝 Contributing

Pull requests are welcome! Open an issue for suggestions or bug reports.

📜 License

MIT License © 2025 Worood Flower Shop