'use strict';
const Schema=require('../model/schema-note.js');

class NoteClass {
  constructor() {}
  create(note) {
    const newRecord = new Schema(note);
    return newRecord.save();
  }
  get(category) {
    if (category) {
      return Schema.find({category:category});
    } else {
      return Schema.find({});
    }
  }
  update(_id, note) {
    return Schema.findByIdAndUpdate(_id, note, { new: true });
  }
  delete(_id) {
    return Schema.findByIdAndDelete(_id); 
  }
}
module.exports = new NoteClass(); 