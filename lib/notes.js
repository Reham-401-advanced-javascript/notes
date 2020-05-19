'use strict';

function Note(note) {
  this.id = Math.ceil(Math.random() * 10);
  // console.log('jjjjjjjjjj',this.id);
  this.inputNote = note.payload;
}

Note.prototype.execute = function (note) {

  // console.log('paaaaaaaaaaaaaaaaaaaayload',note.payload);
  // console.log('aaaaaaaaaaaaaaaaaaactioooon',note.action);

  if (note.payload !== undefined && note.action !== undefined) {
    Note.prototype.add(note);
  }
  return note;
};

Note.prototype.add = function (note) {
  const newNote = new Note(note);
  // console.log('neeeeeeeeeeeeeeeeewnote', newNote);
  console.log(`Adding Note: ${newNote.inputNote}`);
  let Message = {
    id: newNote.id,
    note: newNote.inputNote,
  };
  console.log('Message:', Message);

};


module.exports = Note;