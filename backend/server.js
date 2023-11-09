import express from "express";
import dotenv from 'dotenv';
dotenv.config();
// import userRoutes from './routes/userRoutes.js';
// import adminRouter from './routes/adminRoutes.js';
import authRoutes from './routes/authRoutes.js';

import connectDB from "./config/db.js";
import cookieParser from "cookie-parser";
const app = express();
import cors from 'cors'
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";
const port =process.env.PORT || 8000

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended:true }))
app.use(cors({
    origin:"*"
  }))

app.use(cookieParser());

// app.use('/api/users', userRoutes)
// app.use('/api/admin', adminRouter)
app.use('/api/auth', authRoutes)


app.get('/',(req,res) => res.send("Backend Server is Ready"));


app.use(notFound)
app.use(errorHandler)
app.listen(port,()=>console.log(`Backend Server started on port  ${port}`))