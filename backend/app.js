import express from "express"
import dotenv from "dotenv"
import connectDB from "./config/db.js"
import productRoutes from './routes/productRoutes.js'

connectDB()
dotenv.config()
const app = express()

app.use("/api/products", productRoutes)


app.get("/", (req, res) => {
  res.send("API IS RUNNING");
});


const PORT = process.env.PORT || 5000
app.listen(PORT, console.log("Server Started", PORT));
