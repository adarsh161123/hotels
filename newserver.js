var fs = require('fs');
var os = require('os');
var notes = require('./note.js');
var _ = require('lodash');
var db = require('./db.js');
const Person = require('./models/person.js');

var express = require('express');   
const app = express()
const bodyParser = require('body-parser');
app.use(bodyParser.json());



app.get('/', (req, res) => {
  res.send('Hello World')
})

app.post('/person', async (req, res) => {
    try {
        const data = req.body;   
        const person = new Person(data);
        await person.save();

        res.status(201).send(person);

        console.log('Person saved successfully');
    } catch (error) {
        res.status( 
400).send({ error: error.message });
    }
});

app.get('/person', async (req, res) => {
    try {
        const people = await Person.find({});
        res.status(200).send(people);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});
       



app.listen(5000, () => {
  console.log('Server is running on http://localhost:3000')
})

app.get('/idli', (req, res) => {

    var idli = {
        name: 'idli',
        price: 10
    }
  res.send(idli)
})

var user = os.userInfo();
fs.appendFile('greeting.txt', `Hello ${user.username}!`, function (err) {
    if (err) {  
        console.log('Unable to write to file');
    }
});

console.log('Hello World',user.username);
console.log('Result of add function:', notes.add(5,10),'Age:', notes.age, 'Name:', notes.name);

var data = [1,2,3,"Andrew", "Sarah", 4, 5, 6, "Bob", "Alice", 6, "Bob", "Alice"];
var result = _.uniq(data);
console.log(result);

function add (a, b) {
  return a + b;
}
var result = add(56, 10);
console.log(result);


var add = function (a, b) {
  return a + b;
}   
var result = add(56, 10);
console.log(result);

var add = (a, b) => {
  return a + b;
}   
var result = add(56, 10);
console.log(result);

var add = (a, b) => a + b;
var result = add(56, 10);
console.log(result);

  function add (a,b) {
    return a+b}
    var result = add(5,10);
    console.log(result);

    var add = function add (a,b) {
    return a+b}
    var result = add(5,10);
    console.log(result);

    var add = (a,b) =>{
        return a+b;
    }
    var result = add(5,10);
    console.log(result);

var add = (a,b) =>a+b;
var result = add(5,10);
console.log(result);




