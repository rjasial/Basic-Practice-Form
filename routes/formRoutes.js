import express from 'express';
import {showForm, handleFormSubmission} from '../controllers/formController.js';


const router = express.Router();
router.get('/', showForm);
router.post('/submit', handleFormSubmission);

export default router;