import express from 'express'
import { userAuth } from '../middlewares/auth.middleware';
import * as NoteController from '../controllers/note.controller'

const router = express.Router();


router.post("", userAuth, NoteController.createNote)


export default router;


