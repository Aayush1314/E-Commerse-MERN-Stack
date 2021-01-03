import mongoose from "mongoose";
import dotenv from "dotenv";
import users from "./data/user.js";
import products from "./data/products.js";
import USERS from "./models/userModel.js";
import PRODUCTS from "./models/productModel.js";
import connectDB from "./config/db.js";

dotenv.config();
connectDB();

const importDATA = async () => {
  try {
    await USERS.deleteMany();
    await PRODUCTS.deleteMany();

    const createdUsers = await USERS.insertMany(users);
    const adminUser = createdUsers[0]._id;
    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser };
    });
    await PRODUCTS.insertMany(sampleProducts);
    console.log("DATA IMPORTED");
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

const deleteDATA = async () => {
  try {
    await USERS.deleteMany();
    await PRODUCTS.deleteMany();

    console.log("DATA DESTROYED");
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  deleteDATA();
} 
else {
    importDATA()
}
