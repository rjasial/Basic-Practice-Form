import express from 'express';
import userRoutes from './routes/userRoutes.js';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();



const app = express();
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', './views');

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("✅ MongoDB Connected"))
.catch(err => console.error("❌ MongoDB Error:", err));

app.use("/",userRoutes);

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});