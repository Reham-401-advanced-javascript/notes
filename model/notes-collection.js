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
    // mongoose.disconnect();
    return saved ;
    
   
  }
  async get(note) {
    let allNotes;
    // console.log('zzzzzz',note.category);
    if (note.list===true){
      allNotes = await SchemaNote.find({});
      for(let i = 0; i<allNotes.length; i++){
        console.log(
          `          ${allNotes[i].payload}
          Category: ${allNotes[i].category}    ID: ${allNotes[i]._id}
          ----------------------------------------`);
      }
    }else {
      console.log('note inside get',note);
      allNotes = await SchemaNote.find({category: note.list});
      for(let i = 0; i<allNotes.length; i++){
        console.log(
          `          ${allNotes[i].payload}
          Category: ${allNotes[i].category}    ID: ${allNotes[i]._id}
          ----------------------------------------`);
      }
    }
    // mongoose.disconnect();
    return allNotes;
    
  }
  
  async update(note) {

    let myNote = {
      _id:note.id,
      payload: note.edit,
    }; 
    // console.log('bbbbbb',note);
    // console.log('oooooo',myNote);

    let updateResult= SchemaNote.findOneAndUpdate(myNote._id , myNote,{new:true});
    console.log('updated',updateResult._update);
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