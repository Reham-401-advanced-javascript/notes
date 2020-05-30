'use strict';
const mongoose = require('mongoose');

const schemaNote = new mongoose.Schema({
  payload: { type: 'string', required: true },
  category: { type: 'string',required:true },
});
// module.exports.schema = schemaNote.obj;
module.exports = mongoose.model('schemaNote', schemaNote);