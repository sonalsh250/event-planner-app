// const express = require('express');
// const cors = require('cors');
// const mongoose = require('mongoose');
// require('dotenv').config();

// const app = express();
// const port = process.env.PORT || 5000;

// // Middleware
// app.use(cors());
// app.use(express.json()); // Parse incoming JSON

// // MongoDB Connection
// mongoose.connect(process.env.MONGO_URI)
//     .then(() => console.log('MongoDB Connected'))
//     .catch(err => console.log(err));  

// //insert data to eventmodal
// // const User = require('./models/eventmodel');
// // async function insert()
// // {
// //     await User.create({
// //        title:'event1',
// //        description:'birthday',
// //        date:'11-09-2024',
// //        location:'jamshedpur',
// //     });
// // }
// // insert();

// // Routes
// const eventRoutes = require('./routes/event');
// app.use('/api', eventRoutes);

// app.get('/', (req, res) => {
//     res.send('Welcome to the Event Planner API');
// });

// // Start Server
// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json()); // Parse incoming JSON

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

// Import Event model
const Event = require('./models/eventModel');

// Insert Event Route (for testing)
app.post('/api/insertEvent', async (req, res) => {
    try {
        const newEvent = new Event({
            title: 'Sample Event',
            description: 'This is a sample event.',
            date: new Date('2024-11-09'),
            location: 'Jamshedpur', 
            image: 'image_url_here',
        });

        await newEvent.save();
        res.status(201).json({ message: 'Event inserted successfully!', event: newEvent });
    } catch (err) {
        console.error('Error inserting event:', err);
        res.status(500).json({ message: 'Failed to insert event', error: err.message });
    }
});

// Routes
const eventRoutes = require('./routes/event');
app.use('/api', eventRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to the Event Planner API');
});

// Start Server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
