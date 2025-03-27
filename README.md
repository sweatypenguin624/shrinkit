
# ShrinkIt - URL Shortener

ShrinkIt is a simple and efficient URL shortener built with Express.js. It allows users to generate short links for long URLs and redirect them seamlessly.

## 🚀 Features
- Generate short, unique links for long URLs
- Redirect short links to the original URLs
- Simple and lightweight (in-memory storage for quick testing)
- CORS support for frontend integration

## 🛠️ Tech Stack
- **Backend:** Express.js, nanoid
- **Storage:** In-memory Map (can be extended to use databases like MongoDB or PostgreSQL)
- **Security:** Basic input validation

## 📦 Installation

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/yourusername/shrinkit.git
cd shrinkit
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Start the Server
```sh
npm start
```
Server runs on `http://localhost:5002` by default.

## 🔗 API Endpoints

### 📌 Shorten a URL
**POST** `/shorten`
- **Request Body:**
  ```json
  { "url": "https://example.com" }
  ```
- **Response:**
  ```json
  { "shortUrl": "http://localhost:5002/abc123" }
  ```

### 🔄 Redirect to Original URL
**GET** `/:shortId`
- Redirects to the original URL stored for `shortId`.

## 🏗️ Deployment
To deploy ShrinkIt, ensure the following:
- Replace `localhost` with your server URL.
- Use a database (MongoDB, PostgreSQL) instead of in-memory storage for persistence.
- Set `PORT=process.env.PORT || 5002` in your Express app for cloud deployment.

## 📜 License
MIT License.

## 🤝 Contributing
Feel free to submit issues or pull requests to improve ShrinkIt!

---
Made with ❤️ by [Your Name](https://github.com/yourusername).

