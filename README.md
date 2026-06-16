# 🚀 PromptForge – AI-Powered Machine Learning Companion

**PromptForge** is a powerful AI-driven SaaS platform that simplifies the end-to-end creation of machine learning and deep learning models. Designed with simplicity and productivity in mind, PromptForge lets users describe their problem in plain English and returns production-ready code, optimized model pipelines, and even dataset suggestions.

---

## 🌐 Live Links

```text
🔗 Live App: https://PromptForgenew.netlify.app

```

---

## ✨ Features

- 🧠 **Chat-Based Model Creation** – Describe your ML or DL task in plain language
- ⚡ **Real-Time Code Generation** – Clean, efficient, and optimized Python code powered by Google Gemini AI
- 📊 **Smart Dataset Recommendations** – Relevant datasets fetched via Kaggle API
- 📁 **One-Click Notebook Export** – Download `.ipynb` files that are ready to train
- 🕑 **Session History Management** – Retrieve previous code, chats, and datasets
- 📈 **Performance Optimized** – Lighthouse Score: 96 (Performance), 100 (Accessibility), 93 (Best Practices), 100 (SEO)

---

## 📦 Tech Stack

| Layer        | Technologies Used                                    |
|--------------|-------------------------------------------------------|
| **Frontend** | Next.js, Tailwind CSS, Monaco Editor                  |
| **Backend**  | Node.js, Express.js                                   |
| **Database** | MongoDB                                               |
| **AI Engine**| Gemini AI (Google), Optuna for Hyperparameter Tuning |
| **Auth**     | GitHub OAuth                                          |
| **APIs**     | Kaggle API                                            |

---

## 💡 Use Cases

```text
✅ ML Beginners – Get working models without learning advanced syntax
✅ Data Scientists – Prototype ideas faster
✅ Educators – Generate assignments or teaching demos instantly
✅ Developers – Use chat to convert business problems into ML code
✅ Researchers – Speed up experimentation with model variations
```

---

## 🔧 Local Development Setup

### 1. Clone the Repository

```bash
git clone https://github.com/kaurpreetman/PromptForge.git
cd PromptForge
```

---

### 2. Install Dependencies

#### Backend

```bash
cd backend
npm install
```

#### Frontend

```bash
cd ../frontend
npm install
```

---

### 3. Environment Variables

Create `.env` files in both `backend/` and `frontend/`.

#### 📁 backend/.env

```env
PORT=5000
MONGO_URI=your_mongo_connection_string
GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret
KAGGLE_USERNAME=your_kaggle_username
KAGGLE_KEY=your_kaggle_api_key
GEMINI_KEY=your_gemini_api
GITHUB_CALLBACK_URL=http://localhost:5000/auth/github/callback
```


### 4. Run the Application Locally

#### Start Backend Server

```bash
cd backend
npx nodemon server.js
```

#### Start Frontend Dev Server

```bash
cd ../frontend
npm run dev
```

Visit `http://localhost:5173` in your browser 🚀

---



## 🤝 Contributing

We welcome contributions! Here's how to get started:

```bash
# Fork the repo
# Create your branch
git checkout -b feature/awesome-feature

# Make changes, commit, push
git commit -m "Add awesome feature"
git push origin feature/awesome-feature

# Open a Pull Request
```

---


## 👩‍💻 Made With Love

Developed by Manpreet ❤️

