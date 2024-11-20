import React from 'react';
import bodyImage from '../images/img1.jpg';  // Adjust the path to your image

const BodyImage = () => {
    return (
        <section
            className="body-image"
            style={{
                backgroundImage: `url(${bodyImage})`,   // Set the background image
                backgroundSize: 'cover',                // Ensure the image covers the whole area
                backgroundPosition: 'center',           // Position the image at the center
                height: 'calc(100vh - 56px)',            // Ensure the image height fills the rest of the viewport below header
                width: '100%',                           // Make sure the image takes up full width
            }}
        >
        </section>
    );
};

export default BodyImage;
