import express from 'express';
import formRoutes from './routes/formRoutes.js';

const app = express();
app.use(express.urlencoded({ extended: true }));

app.use("/",formRoutes);

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});