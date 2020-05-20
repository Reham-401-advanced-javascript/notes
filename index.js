'use strict';
require('dotenv').config();
const mongoose = require('mongoose');
const Input = require('./lib/input.js');
const Notes = require('./lib/notes.js');

const mongo = process.env.MONGODB_URI;
mongoose.connect(mongo, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const addNewNote = new Input();
// console.log('input note',addNewNote);
Notes.prototype.execute(addNewNote);

