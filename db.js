const monogoose = require('mongoose');
const monogourl = 'mongodb://localhost:27017/hotels';

monogoose.connect(monogourl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}); 

const db = monogoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

module.exports = db;