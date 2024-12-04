import React from 'react';
// import weddingTable from '../images/weddingTable2.jpg'; 
import Founders from '../images/Founders.jpg'; 
// import PersonalTouch from '../images/PersonalTouch.jpg'; 
// import FlawlessExecution from '../images/FlawlessExecution2.jpeg'; 

const HeroSection = () => {
    return (
        <section
            className="d-flex justify-content-center align-items-center text-center"
            style={{
                padding: '20px 200px 20px 200px', 
                background: '#EEEFF1' // Optional: Adjust background color
            }}
        >
            <div>
                <h1 className="display-4" style={{color: '#16099D'}} id='about'>We Are Brilliant.</h1>
                <p className="lead" style={{color: '#16099D'}}>
                    SN Event Planners is a budget-friendly event planning company dedicated to creativity, quality, and personalized service. We draw inspiration from your unique story to craft one-of-a-kind weddings and events, ensuring every detail is thoughtfully planned and has a huge impact. With a focus on seamless coordination, we make your planning experience stress-free and flawless.
                </p>
                
                {/* Line Break */}
                <hr style={{ borderTop: '2px solid #16099D', margin: '40px 0' }} />

                {/* Second Paragraph and Image Section */}
                {/* <div className="row no-gutters mt-4" 
                    style={{
                        background: '#F7DFD0',
                        maxWidth: '1200px', // Optional: You can tweak this for a more responsive layout
                        margin: '0 auto'
                    }}
                > */}
                    {/* Paragraph Section */}
                    {/* <div className="col-md-6 d-flex justify-content-center align-items-center">
                        <div>
                            <h1 className="display-4" style={{color: '#16099D'}}>Crafting Unique Experiences</h1>
                            <p className="lead" style={{fontSize: '1.2rem', padding: '20px', color: '#16099D'}}>
                                Here at SN Event Planners, we believe every event tells a unique story. We craft each experience with careful attention to detail, ensuring your vision is brought to life with elegance and precision. We work collaboratively to ensure your event is cohesive and thoughtful. We believe that even the smallest details can have a huge impact.
                            </p>
                        </div>
                    </div> */}
                    
                    {/* Image Section */}
                    {/* <div className="col-md-6">
                        <img 
                            src={weddingTable} 
                            alt="Event Planning" 
                            className="img-fluid" 
                            style={{height: '100%', width: '100%', objectFit: 'cover'}} 
                        />
                    </div>
                </div> */}

                {/* Line Break */}
                {/* <hr style={{ borderTop: '2px solid #16099D', margin: '40px 0' }} /> */}
                
                {/* Third Paragraph and Image Section (Founders Picture) */}
                <div className="row no-gutters mt-4" 
                    style={{
                        background: '#11407D',
                        maxWidth: '1200px', // Optional: You can tweak this for a more responsive layout
                        margin: '0 auto'
                    }}
                >
                    {/* Image Section */}
                    <div className="col-md-6">
                        <img 
                            src={Founders} 
                            alt="Event Planning" 
                            className="img-fluid" 
                            style={{height: '100%', width: '100%', objectFit: 'cover'}} 
                        />
                    </div>

                    {/* Paragraph Section */}
                    <div className="col-md-6 d-flex justify-content-center align-items-center">
                        <div>
                            <h1 className="display-4 text-light">Two Brothers, One Passion</h1>
                            <p className="lead text-light" style={{fontSize: '1.2rem', padding: '20px'}}>
                                We are a dynamic duo fueled by creativity and a shared vision for exceptional events. As brothers, we have embarked on this journey together, bringing our dedication and unique perspectives to every celebration. While we collaborate with talented professionals, our hands-on approach ensures that each event receives the care and attention it deserves. At SN Event Planners, we don't just plan events - we create unforgettable moments that leave lasting impressions.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Line Break */}
                <hr style={{ borderTop: '2px solid #16099D', margin: '40px 0' }} />

                {/* Fourth Paragraph and Image Section (Personal Touches) */}
                {/* <div className="row no-gutters mt-4" 
                    style={{
                        background: '#F7DFD0',
                        maxWidth: '1200px', // Optional: You can tweak this for a more responsive layout
                        margin: '0 auto'
                    }}
                > */}
                    {/* Paragraph Section */}
                    {/* <div className="col-md-6 d-flex justify-content-center align-items-center">
                        <div>
                            <h1 className="display-4" style={{color: '#16099D'}}>Personal Touches</h1>
                            <p className="lead" style={{fontSize: '1.2rem', padding: '20px', color: '#16099D'}}>
                            You don’t only want a beautiful event, you want it to be YOUR beautiful event. We believe that behind every event is a story. So, whether it’s a bespoke escort card display or creative ways to make each guest feel included, we’re here to help you tell your story.
                            </p>
                        </div>
                    </div> */}
                    
                    {/* Image Section */}
                    {/* <div className="col-md-6">
                        <img 
                            src={PersonalTouch} 
                            alt="Event Planning" 
                            className="img-fluid" 
                            style={{height: '100%', width: '100%', objectFit: 'cover'}} 
                        />
                    </div>
                </div> */}

                {/* Line Break */}
                {/* <hr style={{ borderTop: '2px solid #16099D', margin: '40px 0' }} /> */}
                
                {/* Fifth Paragraph and Image Section (Flawless Excecution) */}
                {/* <div className="row no-gutters mt-4" 
                    style={{
                        background: '#11407D',
                        maxWidth: '1200px', // Optional: You can tweak this for a more responsive layout
                        margin: '0 auto'
                    }}
                > */}
                    {/* Image Section */}
                    {/* <div className="col-md-6">
                        <img 
                            src={FlawlessExecution} 
                            alt="Event Planning" 
                            className="img-fluid" 
                            style={{height: '100%', width: '100%', objectFit: 'cover'}} 
                        />
                    </div> */}

                    {/* Paragraph Section */}
                    {/* <div className="col-md-6 d-flex justify-content-center align-items-center">
                        <div>
                            <h1 className="display-4 text-light">Flawless Excecution</h1>
                            <p className="lead text-light" style={{fontSize: '1.2rem', padding: '20px'}}>
                            We specialize in planning and designing weddings and events in private homes and raw spaces. We pride ourselves on flawless execution with high level touches. Weekend affairs, multiple days of tent installation, ferries and travel logistics are a typical day at the office.
                            </p>
                        </div>
                    </div>
                </div> */}

                {/* Line Break */}
                {/* <hr style={{ borderTop: '2px solid #16099D', margin: '40px 0' }} /> */}

            </div>
        </section>
    );
};

export default HeroSection;
