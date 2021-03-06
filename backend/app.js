import express from "express"
import dotenv from "dotenv"
import bodyParser from 'body-parser'
import connectDB from "./config/db.js"
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoute.js'

connectDB()
dotenv.config()
const app = express()
app.use(express.json())
app.use("/api/products", productRoutes)
app.use("/api/users", userRoutes)


app.get("/", (req, res) => {
  res.send("API IS RUNNING");
});


const PORT = process.env.PORT || 5000
app.listen(PORT, console.log("Server Started", PORT));
