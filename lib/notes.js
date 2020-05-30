'use strict';
const SchemaNote=require('../model/notes-collection.js');

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
    
    // console.log('aaaaaaaaaaaaaaaaaaaaa',note.action);
    if (note.action==='add'||note.action==='a'){
      // console.log('rrrrrrrrrrrrrrrr',note);
      this.add(note);
    }
    if (note.action==='list'){
      this.list(note);
    }
    if (note.action==='delete'){
      this.delete(note);
    }

    if (note.action==='update'){
      this.update(note);
    }
        
    
  }

  async add (note) {

    // note.category=this.category;
    let addResult= SchemaNote.create(note);
    return addResult;

  }
  async list(note) {

    let listResult = await SchemaNote.get(note);
    return listResult;
  }

  async update(note) {
    let updateResult = await SchemaNote.update(note);
    return updateResult;
  }

  async delete(note){
    let deleteResult=await SchemaNote.delete(note);
    return deleteResult;

  }
}


module.exports = Note;