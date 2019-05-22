'use strict';

// These 2 should be interchangeable!
const List = require('../list.js');
// const List = require('../list-constructor.js');

describe('List Data Structure', () => {

  it('starts with a length of -1 and an empty data set', () => {
    let stuff = new List();
    expect(stuff.length).toEqual(0);
    expect(stuff.data).toEqual({});
  });

  it('pushes items to the end of the data set', () => {
    let stuff = new List();
    stuff.push('a');
    stuff.push('b');
    expect(stuff.length).toEqual(2);
    expect(stuff.data[1]).toEqual('b');
  });

  it('pops items off the end of the data set', () => {
    let stuff = new List();
    stuff.push('a');
    stuff.push('b');
    stuff.pop();
    expect(stuff.length).toEqual(1);
    expect(stuff.data[0]).toEqual('a');
  });

  it('it removes the first element of the data set', () => { 
    let stuff = new List();
    stuff.push('a');
    stuff.push('b');
    stuff.shift();
    expect(stuff.length).toEqual(1);
    expect(stuff.data[0]).toEqual('b');
  });

  it('it adds an item to the front of the array', () => {
    let stuff = new List();
    stuff.push('a');
    stuff.push('b');
    stuff.unshift('c');
    expect(stuff.length).toEqual(3);
    expect(stuff.data[2]).toEqual('b');
    expect(stuff.data[0]).toEqual('c');
    expect(stuff.data[1]).toEqual('a');
  });
  it('it can go through the array', () => {
    let stuff = new List();
    stuff.push('a');
    stuff.push('b');
    stuff.push('c');
    expect(stuff.length).toEqual(3);
    expect(stuff.data[2]).toEqual('b');
    expect(stuff.data[3]).toEqual('c');
    expect(stuff.data[0]).toEqual('a');
  });

});
