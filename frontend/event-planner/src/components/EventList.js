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
