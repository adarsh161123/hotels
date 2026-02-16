const express = require('express');
const router = express.Router();
const Hotel = require('../models/hotel.js');
router.post('/hotel', async (req, res) => {
    try {
        const data = req.body;   
        const hotel = new Hotel(data);
        await hotel.save(); 
        res.status(201).send(hotel);
        console.log('Hotel saved successfully');
    }
    catch (error) {
        res.status(400).send({ error: error.message });
    }
});

router.get('/hotel', async (req, res) => {
    try {
        const hotels = await Hotel.find({});
        res.status(200).send(hotels);
    }
    catch (error) {
        res.status(500).send({ error: error.message });
    }
});

module.exports = router;
