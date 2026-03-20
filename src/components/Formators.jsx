import React, { useState, useEffect } from 'react';

const Formators = () => {
    const [position, setPosition] = useState(0);
    const cardWidth = 340; 
    const totalCards = 6;
    const visibleCards = 3;
    const maxPosition = -(cardWidth * (totalCards - visibleCards));

    const moveNext = () => {
        setPosition(prev => prev <= maxPosition ? 0 : prev - cardWidth);
    };

    const movePrev = () => {
        setPosition(prev => prev >= 0 ? maxPosition : prev + cardWidth);
    };

    useEffect(() => {
        const timer = setInterval(moveNext, 4000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="formators">
            <h2 className="formators-title">Meet Our Formators</h2>
            <div className="formators-slider">
                <button className="slide-btn formator-prev" onClick={movePrev}>&#10094;</button>
                <div className="formators-track" style={{ transform: `translateX(${position}px)` }}>
                    {[1, 2, 3, 4, 1, 2].map((id, index) => (
                        <div className="formator-card" key={index}>
                            <img src={`/images/fr${id}.jpg`} alt="Fr" />
                            <h3>Rev. Fr. Name</h3>
                            <p className="role">Rector</p>
                            <p className="email">Email: info@pjpms.org</p>
                        </div>
                    ))}
                </div>
                <button className="slide-btn formator-next" onClick={moveNext}>&#10095;</button>
            </div>
        </section>
    );
};

export default Formators;