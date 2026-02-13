console.log('Starting notes.js');


var add = (a,b) => a+b;
var result = add(5,10);
console.log(result); 

var age = 25;
var name = 'Andrew';

module.exports = {
    add,
    age,
    name
}