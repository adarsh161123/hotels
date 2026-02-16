var fs = require('fs');
var os = require('os');
var notes = require('./note.js');
var _ = require('lodash');
var db = require('./db.js');
const Person = require('./models/person.js');
const Hotel = require('./models/hotel.js');
require('dotenv').config();

var express = require('express');   
const app = express()
const routes = require('./routes/personroute.js');
const hotelRoutes = require('./routes/hotelroute.js');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(routes);
app.use(hotelRoutes);




// app.get('/', (req, res) => {
//   res.send('Hello World')
// })
//routes for person
app.use('/person',routes);
app.use('/hotel', hotelRoutes);

// app.get('/person',routes);
// app.post('/person',routes);
// app.put('/person/:id',routes);
// app.delete('/person/:id',routes);






       

const port = process.env.Port || 5000;

app.listen(port, () => {
  console.log('Server is running on http://localhost:3000')
})




