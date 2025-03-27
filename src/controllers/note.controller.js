import * as NoteService from '../services/Note.service';

export const createNote = async (req, res) => {
  const data = await NoteService.createNote(req.body);
  res.status(data.code).json({
    code: data.code,
    data: data.data,
    message: data.message
  });
};
