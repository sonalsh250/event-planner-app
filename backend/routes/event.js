const express = require('express');
const Event = require('../models/eventModel');

const router = express.Router();

// GET all events
router.get('/events', async (req, res) => {
    try {
        const events = await Event.find();
        res.json(events);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// POST create an event
router.post('/events', async (req, res) => {
    const { title, description, date, location, image } = req.body;
    const event = new Event({ title, description, date, location, image });
    try {
        await event.save();
        res.status(201).json(event);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
