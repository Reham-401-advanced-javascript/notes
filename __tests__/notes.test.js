'use strict';
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