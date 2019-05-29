'use strict';

const List = require('./list-constructor.js');
//const List = require('./list.js');

let stuff = new List();
stuff.push('a');
stuff.push('b');
stuff.push('c');
console.log('ORIGINAL:', stuff);

let last = stuff.pop();
console.log('POP:', stuff);
console.log(last);
let first = stuff.shift();
console.log('SHIFT:', stuff);
console.log(first);
let newFirst = stuff.unshift('d');
console.log('UNSHIFT:', stuff);
console.log(newFirst);
let all = stuff.forEach(console.log('ALL:', stuff));
console.log(all);
