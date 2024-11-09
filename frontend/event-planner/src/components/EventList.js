// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const EventList = () => {
//     const [events, setEvents] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         axios.get('http://localhost:5000/api/events')
//             .then(response => {
//                 setEvents(response.data);
//                 setLoading(false);
//             })
//             .catch(error => {
//                 console.error("Error fetching events:", error);
//                 setLoading(false);
//             });
//     }, []);

//     if (loading) {
//         return <div>Loading...</div>;
//     }

//     return (
//         <div className="event-list">
//             <h2>Upcoming Events</h2>
//             <ul>
//                 {events.length === 0 ? (
//                     <li>No events found</li>
//                 ) : (
//                     events.map(event => (
//                         <li key={event._id}>
//                             <h3>{event.title}</h3>
//                             <p>{event.description}</p>
//                             <p>{new Date(event.date).toLocaleDateString()}</p>
//                             {event.image && <img src={event.image} alt={event.title} />}
//                         </li>
//                     ))
//                 )}
//             </ul>
//         </div>
//     );
// };

// export default EventList;
// components/Header.js

import React from 'react';

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/events">Events</a></li>
                    {/* Add more links here */}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
