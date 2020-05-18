'use strict';
const Input = require('./lib/input.js');
const Notes = require('./lib/notes.js');

const addNewNote = new Input();
// console.log('xxxxxxxxxxxxxxxxx',addNewNote);
Notes.prototype.execute(addNewNote);

