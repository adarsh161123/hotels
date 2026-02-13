const monogoose = require('mongoose');

const personSchema = new monogoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },  
    email: {
        type: String,
        required: true,
        unique: true
    },
    work: {
        type: String,
        enum: ['Developer', 'Designer', 'Manager', 'Other'],
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    salary: {
        type: Number,
        required: true
    }
}); 

const Person = monogoose.model('Person', personSchema);

module.exports = Person;