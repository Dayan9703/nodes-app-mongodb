const { Router } = require('express');
const router = Router()

const { renderNoteForm, createNewNote, renderNotes, renderEditForm, updateNote, deleteNote } = require('../controllers/notes.controller');
const { route } = require('./index.routes');

//new notes
router.get('/notes/add', renderNoteForm);

router.post('/notes/new-note', createNewNote);

//get all routes
router.get('/notes', renderNotes);

//edit notes
router.get('/notes/edit/:id', renderEditForm);

router.put('/notes/edit/:id', updateNote);

//delete notes
router.delete('/notes/delete/:id', deleteNote);

module.exports = router;