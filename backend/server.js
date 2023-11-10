// import express from "express";
// import dotenv from 'dotenv'
// import userRouter from './routes/user.route.js';
// import authRouter from './routes/auth.route.js';
// import adminRouter from './routes/admin.route.js'
// import connectDB from "./config/db.js";
// dotenv.config();
// import cookieParser from "cookie-parser";
// const port =process.env.PORT || 8000
// const app = express();
// import cors from 'cors'
// import { errorHandler, notFound } from "./middleware/errorMiddleware.js";

// connectDB();

// app.use(express.json());
// app.use(express.urlencoded({ extended:true }))
// app.use(cors({
//     origin:"*"
//   }))

// app.use(cookieParser());

// app.use('/api/user',userRouter);
// app.use('/api/auth',authRouter);
// app.use('/api/admin',adminRouter);

// app.get('/',(req,res) => res.send("Backend Server is Ready"));


// app.use(notFound)
// app.use(errorHandler)
// app.listen(port,()=>console.log(`Backend Server started on port  ${port}`))