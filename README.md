# PromptForge

**AI-powered companion for the complete machine learning workflow.**

PromptForge lets users describe a machine learning problem in plain English and instantly receive production-ready code, optimized model pipelines, and relevant dataset recommendations — turning natural language into working ML solutions in minutes.

[**Live Demo →**](https://your-app.vercel.app) *(update with your deployed URL)*

---

## Overview

Building a machine learning model traditionally requires navigating dataset selection, preprocessing, model architecture, and hyperparameter tuning — each step demanding specialized knowledge. PromptForge collapses this workflow into a conversational interface: describe the problem, and the platform handles the rest.

---

## Features

- **Conversational Model Builder** — Create ML/DL models through a natural-language chat interface
- **AI-Generated Code** — Clean, optimized Python code generated in real time via Google Gemini AI
- **Smart Dataset Discovery** — Relevant dataset recommendations pulled directly from the Kaggle API
- **Hyperparameter Optimization** — Automated tuning powered by Optuna
- **One-Click Notebook Export** — Download ready-to-run Jupyter Notebooks (`.ipynb`)
- **Session History** — Revisit previous conversations, generated code, and datasets at any time
- **GitHub Authentication** — Secure sign-in via GitHub OAuth

### Performance

| Metric | Score |
|---|---|
| Performance | 96 |
| Accessibility | 100 |
| Best Practices | 93 |
| SEO | 100 |

---

## Tech Stack

| Layer | Technologies |
|---|---|
| **Frontend** | React, Vite, React Router, Tailwind CSS, Monaco Editor |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB |
| **AI Engine** | Google Gemini AI, Optuna |
| **Authentication** | GitHub OAuth |
| **External APIs** | Kaggle API |

---

## Use Cases

- **ML Beginners** — Build functional models without deep coding expertise
- **Data Scientists** — Rapidly prototype and validate ideas
- **Educators** — Generate assignments, demos, and teaching materials
- **Developers** — Translate business requirements directly into ML solutions
- **Researchers** — Accelerate experimentation across model variations

---

## Getting Started

### Prerequisites

- Node.js (v18+)
- A MongoDB connection string (e.g. from MongoDB Atlas)
- API keys for Gemini, Kaggle, and a GitHub OAuth App

### 1. Clone the Repository

```bash
git clone https://github.com/KratikaSingh12/PromptForge
cd PromptForge
```

### 2. Install Dependencies

```bash
# Backend
cd backend
npm install

# Frontend
cd ../frontend
npm install
```

### 3. Configure Environment Variables

Create a `.env` file inside `backend/`:

```env
PORT=5000
MONGO_URI=your_mongo_connection_string
GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret
GITHUB_CALLBACK_URL=http://localhost:5000/auth/github/callback
KAGGLE_USERNAME=your_kaggle_username
KAGGLE_KEY=your_kaggle_api_key
GEMINI_KEY=your_gemini_api_key
SESSION_SECRET=your_random_session_secret
FRONTEND_URL=http://localhost:5173
```

> **Note:** In production (e.g. Render), `PORT` is assigned automatically by the host — don't hardcode it there. Update `GITHUB_CALLBACK_URL` and `FRONTEND_URL` to your deployed URLs as well.

### 4. Run Locally

```bash
# Start the backend
cd backend
npx nodemon server.js

# In a separate terminal, start the frontend
cd frontend
npm run dev
```

The app will be available at `http://localhost:5173`.

---

## Contributing

Contributions are welcome.

```bash
# Fork the repository, then:
git checkout -b feature/awesome-feature
git commit -m "Add awesome feature"
git push origin feature/awesome-feature
# Open a Pull Request
```

---

## Developer

Built by **Kratika**