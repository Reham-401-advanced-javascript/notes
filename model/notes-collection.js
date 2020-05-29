'use strict';
const mongoose = require('mongoose');

const SchemaNote=require('../model/schema-note.js');

class NoteClass {
  constructor() {}
  async create(note) {
    let myNote = {
      payload: note.payload,
      category : note.category,
    };
    const newNote = new SchemaNote(myNote);
    // console.log('llllllkkkkkkkkk',newNote);
    const saved = await newNote.save();
    console.log(`Adding Note: ${note.payload}`);
    console.log('note saved', saved);
    mongoose.disconnect();
    return saved ;
    
   
  }
  async get(note) {
    let allNotes;
    console.log('zzzzzz',note.category);
    if (note.category===undefined){
      allNotes = await SchemaNote.find({});
      console.log('all noteeeeeeees: ', allNotes);
    }else {
      allNotes = await SchemaNote.find({category: note.category});
      console.log('all notes: ', allNotes);

    }
    mongoose.disconnect();
    return allNotes;
    
  }
  
  async update(note) {
    let myNote = {
      _id:note.id,
      payload: note.payload,
      new:true ,
    }; 
    let updateResult= SchemaNote.findByIdAndUpdate(myNote);
    console.log('updated',updateResult);
    mongoose.disconnect(); 
    return updateResult;
  }
  async  delete(note) {
    let deleteNote= await SchemaNote.deleteOne({_id:note.id});
    if(note.id){

      console.log('delete done',deleteNote);
    }else{
      console.log('error');

    }
    mongoose.disconnect();
    return deleteNote;
  }
    
}
module.exports = new NoteClass(); 