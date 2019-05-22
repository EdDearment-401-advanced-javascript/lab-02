'use strict';

//const List = require('./list-constructor.js');
const List = require('./list.js');

let stuff = new List();
stuff.push('a');
stuff.push('b');
stuff.push('c');

let last = stuff.pop();
console.log(stuff);
let first = stuff.shift();
console.log(stuff);
stuff.unshift('d');
console.log(stuff);
