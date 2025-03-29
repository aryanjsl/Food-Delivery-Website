import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://aryanjsl999:985958595@cluster0.sauqi.mongodb.net/food-delivery').then(()=>console.log("db connected"));
}