'use strict';

class Note{
  constructor(note){

    console.log('neeeeeeeeeeeeeeeeewnote', note);
    this.id = Math.ceil(Math.random() * 10);
    this.inputNote = note.payload;
  }

  execute (note) {
  
    if (note.payload !== undefined && note.action !== undefined) {
      Note.prototype.add(note);
    }
    
    console.log(note);
    return note;
  }

  add (note) {
    const newNote = new Note(note);
    // console.log('neeeeeeeeeeeeeeeeewnote', newNote);
    console.log(`Adding Note: ${newNote.inputNote}`);
    let Message = {
      id: newNote.id,
      note: newNote.inputNote ,
    };
    console.log('Message:', Message);
    return Message;
  }
}


module.exports = Note;