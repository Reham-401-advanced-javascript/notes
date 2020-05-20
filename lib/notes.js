'use strict';
const SchemaNote=require('../model/schema-note.js');

class Note{
  constructor(note){

    // this.id = Math.ceil(Math.random() * 10);
    this.category=note.category;
    this.action=note.action;
    this.payload = note.payload;
    this.id=note.id;
    // console.log('aaaaaaaaaaaaaaaction',note.action);

    // this.execute();
  }

  execute (note) {
    
    console.log('aaaaaaaahmaaaaaaaaaaaaaad',note.action);
    if (note.action==='add'||note.action==='a'){
      console.log('rrrrrrrrrrrrrrrr',note);
      this.add(note);
    }
    if (note.action==='list'){
      this.list();
    }
    if (note.action==='delete'){
      this.delete(note);
    }
        
    
  }

  async add (note) {

    // note.category=this.category;
    let myNote = {
      payload: note.payload,
      category : note.category,
    };
    const newNote = new SchemaNote(myNote);
    // console.log('llllllkkkkkkkkk',newNote);
    const saved = await newNote.save();
    console.log(`Adding Note: ${note.payload}`);
    console.log('note saved', saved);



  }
  async list() {
    let allNotes = await SchemaNote.find({});
    console.log('all notes: ', allNotes);
  }

  async delete(note){
    console.log('iiiiiiddddddd',note.id);

    let deleteNote= await SchemaNote.deleteOne({_id:note.id});
    if(note.id){

      console.log('delete done',deleteNote);
    }else{
      console.log('error');

    }
  }
}


module.exports = Note;