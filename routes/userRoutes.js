import express from 'express';
import{ showHome, createUser, editUser, updateUser, deleteUser } from '../controllers/userController.js';



const router = express.Router();

router.get("/", showHome);
router.post("/submit", createUser);
router.get("/edit/:id", editUser);
router.post("/edit/:id", updateUser);
router.post("/delete/:id", deleteUser);

export default router;