'use strict';
require('@code-fellows/supergoose');

const Note = require('../model/notes-collection.js');
jest.spyOn(global.console, 'log');

describe('note model()', () => {

  it('create() a new note', () => {
    // const option=new Note();
    const myNote = { payload: 'test', category: 'school' };
    return Note.create(myNote).then((record) => {
      Object.keys(myNote).forEach((key) => {
        expect(record[key]).toEqual(myNote[key]);
      });
    });

  });
  it('can get(category) ', () => {
    let obj = { payload: 'test',list: 'school'};
    return Note.get(obj).then(item => {
      console.log('item inside get test',item);
      Object.keys(item[0]).forEach(key => {
        console.log('obj inside get test',obj);
        expect(item[key]).toEqual(obj[key]);
      });
    });


  });
 
 
}); 