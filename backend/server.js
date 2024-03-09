import express from "express";
import authRoutes from "./routes/auth.routes.js"
import messageRoutes from "./routes/message.Routes.js"
import userRoutes from "./routes/user.routes.js"
const app = express();
import dotenv from "dotenv";
import connectDB from "./db/dbConnect.js";
import cookieParser from "cookie-parser";
dotenv.config();
const PORT = process.env.PORT || 5000;

connectDB();
app.use(express.json())
app.use(cookieParser());
app.use("/api/auth",authRoutes) 
app.use("/api/messages",messageRoutes)
app.use("/api/users", userRoutes);

app.get("/", ( req ,res  )=>{
    return   res.send("Welcome to the API");

})
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})