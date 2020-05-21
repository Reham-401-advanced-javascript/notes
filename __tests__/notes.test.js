'use strict';
// require('@code-fellows/supergoose');
const NOTES = require('../lib/notes.js');


jest.spyOn(global.console, 'log');

describe('execute()', () => {
  it('It will not  log to the console if there is error in action or payload or there empty command given ', ()=> {
     
    expect(console.log).not.toHaveBeenCalled();
  });
  
  it('add  note  when call execute()  with valid action and payload', ()=> {
    const newNote = {action:'a' , payload: 'This is a really cool thing'};
    const note = new NOTES(newNote);
    note.execute(newNote.action,newNote.payload);
    expect(console.log).toHaveBeenCalled();
  });
});


// describe( 'note Model', () => {
//   it('add() a new note', () => {
//     const addNote = { action: 'add',payload:'testing note', category: 'school' };
//     const note = new NOTES(addNote);
    
//     return note.add(addNote).then((record) => {
//       Object.keys(addNote).forEach((key) => {
//         expect(record[key]).toEqual(addNote[key]);
//       });
//     });
//   });
//   it('read() read note by id ', () => {
//     const addNote = { action: 'add',payload:'testing note', category: 'school' };
//     const expectedItem ={ action: 'add',payload:'testing note', category: 'school' };
//     return NOTES.add(addNote).then((record) => {
//       return NOTES.list(record._id).then((item) => {
//         Object.keys(addNote).forEach((key) => {
//           expect(item[key]).toEqual(expectedItem[key]);
//         });
//       });
//     });
//   });
// });