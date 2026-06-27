// backend/server.js
import dns from 'dns';
dns.setServers(['8.8.8.8', '8.8.4.4']);

import express from 'express';
import cors from 'cors';
import session from 'express-session';
import dotenv from 'dotenv';
import passport from 'passport';

import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import geminiRoutes from './routes/gen.js';
import './config/passport.js';
import http from 'http';
import { initSocketHandler } from './controllers/geminiController.js';

dotenv.config();
await connectDB();

const app = express();
app.set('trust proxy', 1);

const server = http.createServer(app);
initSocketHandler(server);

app.use(cors({ origin: process.env.FRONTEND_URL || 'http://localhost:5173', credentials: true }));
app.use(express.json());

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: process.env.NODE_ENV === 'production',
      sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
    },
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use('/auth', authRoutes);
app.use('/gen', geminiRoutes);

server.listen(process.env.PORT, () =>
  console.log(`Backend http://localhost:${process.env.PORT}`)
);