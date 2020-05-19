'use strict';
const minimist = require('minimist');
const Input = require('../lib/input.js');



jest.mock('minimist');
minimist.mockImplementation(() => {
  return {
    action: 'add'||'a',
    payload: 'note',
       
  };
});

describe('INPUT MODULE', () => {
  describe('MethodValidator()', () => {
    it('default to undefined when its called with no method', () => {
      const addNewNote = new Input();
      expect(addNewNote.MethodValidator()).toEqual(undefined);
    });
    it('default to undefined when its called with invalid method', () => {
      const addNewNote = new Input();
      expect(addNewNote.MethodValidator('sa')).toEqual(undefined);
    });
    it('uses the right methods when specified', () => {
      const addNewNote = new Input();
      expect(addNewNote.MethodValidator(addNewNote.method)).toEqual(addNewNote.method);
      expect(addNewNote.MethodValidator('add')).toEqual('add');
      expect(addNewNote.MethodValidator('a')).toEqual('a');

    });
  });
});

describe('payLoadValidator()', () => {
  it('return undefined when note is empty', () => {
    const addNewNote = new Input();
    expect(addNewNote.payLoadValidator()).toBeUndefined();
  });
  it('return the note when note is not empty', () => {
    const addNewNote = new Input();
    expect(addNewNote.payLoadValidator('This is a really cool thing')).toEqual('This is a really cool thing');
  });

});