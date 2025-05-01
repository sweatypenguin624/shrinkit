# 🔗 ShrinkIt - URL Shortener

**ShrinkIt** is a minimalist and efficient URL shortener built with Express.js and TypeScript. It allows users to generate concise links for lengthy URLs and handles redirection seamlessly. Ideal for quick testing and prototyping, ShrinkIt uses in-memory storage and is designed for easy integration with frontend applications.

---

## 🚀 Features

- 🔐 **Unique Short Links**: Generate unique, short links for any long URL.
- 🔄 **Seamless Redirection**: Redirects short links to their original URLs effortlessly.
- 🧪 **Lightweight Storage**: Utilizes in-memory storage for rapid testing and development.
- 🌐 **CORS Enabled**: Supports Cross-Origin Resource Sharing for frontend integration.

---

## 🛠️ Tech Stack

| Component        | Technology       |
|------------------|------------------|
| Backend          | Express.js       |
| Language         | TypeScript       |
| Unique ID Gen.   | nanoid           |
| Styling (if applicable) | Tailwind CSS |
| Build Tool       | Vite             |
| Package Manager  | Bun              |

---

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/sweatypenguin624/shrinkit.git
   cd shrinkit

	2.	Install dependencies
bun install

	3.	Start the development server
bun run dev

🧪 Usage
	•	Shorten a URL:
	•	Send a POST request to /api/shorten with JSON:
{
  "url": "https://your-long-url.com"
}

•	You’ll receive a short URL like http://localhost:3000/abc123.

	•	Redirect:
	•	Navigate to http://localhost:3000/abc123 to be redirected to the original URL.📄 License

This project is licensed under the MIT License. See the LICENSE file for more info.

⸻

📬 Contact

For questions or contributions:
	•	GitHub: @sweatypenguin624

⸻

Simplify your links with ShrinkIt!
