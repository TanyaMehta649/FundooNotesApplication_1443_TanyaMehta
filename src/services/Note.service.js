import Note from '../models/note.model';
import HttpStatus from 'http-status-codes';

export const createNote = async (body) => {

    const data = await Note.create(body);
    return {
        code: HttpStatus.CREATED,
        data: data,
        message: "Note created Successfully!"
    }
}