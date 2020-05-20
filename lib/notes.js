'use strict';
const SchemaNote=require('../model/schema-note.js');

class Note{
  constructor(note){

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

  async add (note) {
    const newNote = new SchemaNote(note);
    const saved = await newNote.save();
    console.log(`Adding Note: ${newNote.payload}`);
    console.log('note saved', saved);

  }
  async list() {
    let allNotes = await SchemaNote.find({});
    console.log('all notes: ', allNotes);
  }

  async delete(note){
    let deleteNote= await SchemaNote.deleteOne({_id:note.id});
    if(note.id){

      console.log('delete done',deleteNote);
    }else{
      console.log('error');

    }
  }
}


module.exports = Note;