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
    let obj = { payload: 'test', category: 'school' };
    return Note.get(obj.category)
      .then(item => {
        Object.keys(obj).forEach(key => {
          expect(item[0][key]).toEqual(obj[key]);
        });
      });


  });
 
 
}); 