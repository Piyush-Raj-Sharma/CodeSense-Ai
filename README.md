
# ⚡ CodeSense AI

> An intelligent and sleek web-based code analyzer powered by AI — built for developers to understand, debug, and manage their code effortlessly.

---

## 🚀 Features

- 🧠 **AI-Powered Explanations** – Understand any block of code instantly.
- 🐞 **Debug with AI** – Detect bugs and get smart suggestions.
- 🌐 **Multi-language Support** – JavaScript, Python, Java, C++, and more.
- 📁 **Session Management** – Save, load, and manage multiple coding sessions.
- 🎨 **Beautiful Dark-Themed UI** – Built with TailwindCSS and React.
- ⚙️ **Mobile Responsive** – Works seamlessly across devices.

---

## 🔧 Tech Stack

| Frontend      | Backend         | Styling         | Libraries         |
|---------------|------------------|------------------|--------------------|
| React.js      | Express.js (Node) | Tailwind CSS     | Axios, Lucide-React, React Router |

---

## 📸 Screenshots

| Home Page | Code Editor |
|-----------|-------------|
| ![Home](https://github.com/user-attachments/assets/f01264af-ac12-4ec0-befe-53b607ac61f7) | ![Editor](https://github.com/user-attachments/assets/e953df3e-de7f-4f74-a6b2-191752b4031d) |

---

## 📁 Project Structure

```
codesense-ai/
├── public/
├── src/
│   ├── api/               # Axios config
│   ├── components/        # UI Components
│   ├── context/           # CodeContext for global state
│   ├── pages/             # Route-based pages
│   ├── routes/            # React Router route definitions
│   ├── App.jsx
│   └── main.jsx
├── backend/               # backend (Node + Express)
├── tailwind.config.js
├── package.json
└── README.md
```
---

## 🛠️ Local Setup

### 1. Clone the Repo

```bash
git clone https://github.com/yourusername/codesense-ai.git
cd codesense-ai
```

### 2. Install Dependencies

This project relies on the following core libraries and tools:

| Package | Description |
|---------|-------------|
| **react-router-dom** `^7.6.2` | Declarative routing for React web apps. |
| **lucide-react** `^0.523.0` | Beautiful and consistent icon set for React. |
| **react-simple-code-editor** `^0.14.1` | Lightweight code editor component for React. |
| **prismjs** `^1.30.0` | Syntax highlighting engine used within the editor. |
| **axios** `^1.10.0` | Promise-based HTTP client for API communication. |
| **express** `^5.1.0` | Minimal and flexible Node.js web application framework. |
| **cors** `^2.8.5` | CORS middleware for Express. |
| **dotenv** `^17.2.0` | Loads environment variables from `.env`. |
| **nanoid** `^5.1.5` | Secure and URL-friendly unique ID generator. |
| **node-fetch** `^3.3.2` | Lightweight `fetch` implementation for Node.js. |

```bash
npm install
```

### 3. Run the Frontend (Vite)

```bash
npm run dev
```

### 4. Backend Setup (Optional)

If you're running the Express backend for AI API:
```bash
cd backend
npm install
node server.js
```

> 📝 Make sure to update `axiosConfig.js` with your backend endpoint if using local API.

---

## 📌 Roadmap

- [ ] 🔐 User Auth & Code Sync (Firebase/Auth0)
- [ ] 🧠 Smarter AI Actions (Optimize, Refactor, Rename)
- [ ] 🎨 Editor Theme Customization
- [ ] 🪄 AI-Powered Auto-complete
- [ ] 🌍 Multi-language Expansion (SQL, PHP, Rust, etc.)

---

## 👨‍💻 Author

**Piyush Raj**  
Frontend Developer | Java & JavaScript Enthusiast  
[GitHub](https://github.com/Piyush-Raj-Sharma) • [LinkedIn](https://www.linkedin.com/in/piyush-raj-sharma/)

---

## 📄 License

This project is licensed under the **MIT License**.  
Feel free to use, fork, and contribute!

> Built with ❤️ by developers, for developers.
