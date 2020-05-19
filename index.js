'use strict';
const Input = require('./lib/input.js');
const Notes = require('./lib/notes.js');

const addNewNote = new Input();
// console.log('input note',addNewNote);
Notes.prototype.execute(addNewNote);

