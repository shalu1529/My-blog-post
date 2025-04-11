# 📝 Full Stack Blog App

A full-featured blog application where users can create, edit, delete, and browse posts with category filtering and pagination. Authentication ensures only authorized users can manage their own posts.

---
-this is the link of client folder repo :-https://github.com/shalu1529/client

-backend-link:-https://blog-co8w.onrender.com/
-frontend-link:-https://blog-co8w.onrender.com/

## 🚀 Tech Stack

**Frontend:**
- Next.js (App Router)
- Tailwind CSS
- React Icons

**Backend:**
- Node.js
- Express.js
- MongoDB + Mongoose
- Cookie-parser
- CORS
- JSON Web Token (JWT)

---

## 📁 .env.example

### Backend (`server/.env`)

- PORT=5000 MONGO_URI=your_mongodb_connection_string
- JWT_SECRET=your_jwt_secret


 ## Features
-🔐 Authentication – Secure login & register system using JWT

-📝 Create Post – Users can write and publish posts with categories

-✏️ Edit Post – Authenticated users can update their own posts

-🗑️ Delete Post – Authenticated users can delete only their posts

-🗂️ Category Filter – Filter posts based on categories

-📃 Pagination – Navigate through posts page by page

-👤 Dashboard – Shows logged-in user's own posts only

-🔍 Single Post Page – Detailed view with edit/delete options (if owner)


## Vs code file Structure pictures
![image](https://github.com/user-attachments/assets/1ae5ceea-9f8d-4cc6-9bdc-e3f7910cbf1f)
![image](https://github.com/user-attachments/assets/b2b73c2b-1e4f-4325-9251-73cf3c49663d)

## Installation steps

 1 Clone the Repository

git clone https://github.com/shalu1529/My-blog-post.git
cd Server

2️ Install Dependencies

npm install

3️ Set the Environment Variables (.env)

4️ Run the Script

node server.js







