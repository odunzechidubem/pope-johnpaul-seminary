import React, { useState, useEffect } from 'react';

const Formators = () => {
    // 1. The List of Formators
    const formatorsList = [
        {
            id: 1,
            name: "Very Rev. Fr. Dr Cyril Udebunu",
            role: "Rector",
            email: "cyudeb@yahoo.co.uk",
            image: "/images/Rector.jpeg"
        },
        {
            id: 2,
            name: "Rev. Fr. Dr. Anacletus Ogbunkwu",
            role: "Vice Rector",
            email: "franacletus@gmail.com",
            image: "/images/formator-icon.png"
        },
        {
            id: 3,
            name: "Rev. Fr. Dr. Felix Akamonye",
            role: "Formator",
            email: "monye29@gmail.com",
            image: "/images/formator-icon.png"
        },
        {
            id: 4,
            name: "Rev. Fr. Dominic Anyalagbuna, Dominic",
            role: "Formator",
            email: "adebse@gmail.com",
            image: "/images/fr_dominic.jpeg"
        },
        {
            id: 5,
            name: "Rev. Fr. Dr. Anthony Odunze",
            role: "Formator",
            email: "ifeanyiodunze19@gmail.com",
            image: "/images/FrAnthony.jpeg"
        },
        {
            id: 6,
            name: "Rev. Fr. Dr. Bernardino Muoka",
            role: "Formator",
            email: "bernamtu@yahoo.com",
            image: "/images/formator-icon.png"
        },
        {
            id: 7,
            name: "Rev. Fr. Dr. Lawrence Ezeazodosiaku",
            role: "Spiritual Director",
            email: "frdiliyahweh@yahoo.com",
            image: "/images/formator-icon.png"
        },
        {
            id: 9,
            name: "Rev. Fr. Dr. Linus Nnabuenyi",
            role: "Spiritual Director",
            email: "christolinus@yahoo.com",
            image: "/images/fr_linus_nnabuenyi.jpeg"
        },
        {
            id: 10,
            name: "Rev. Fr. Felix Odibe",
            role: "Formator",
            email: "iodibefelix@yahoo.com",
            image: "/images/formator-icon.png"
        },
        {
            id: 11,
            name: "Rev. Fr. Dr. Paschal-Paul Okeke",
            role: "Spiritual Director",
            email: "paschalpaul94@yahoo.co.uk",
            image: "/images/fr_paschal-paul.jpeg"
        },
        {
            id: 12,
            name: "Rev. Fr. Dr. Linus Okika",
            role: "Formator",
            email: "nnajiokikafr@yahoo.com",
            image: "/images/formator-icon.png"
        },
        {
            id: 13,
            name: "Rev. Fr. Emmanuel Oko",
            role: "Formator",
            email: "fadamonk@yahoo.com",
            image: "/images/fr_okoh.jpeg"
        },
        {
            id: 14,
            name: "Rev. Fr. Stephen Ugwuja",
            role: "Spiritual Director",
            email: "stephenugwuja2013@gmail.com",
            image: "/images/fr_stephen.jpeg"
        }
    ];

    // 2. Slider Logic
    const [position, setPosition] = useState(0);
    const cardWidth = 340; 
    const totalCards = formatorsList.length; // Now dynamic based on list size
    const visibleCards = 3;
    
    // Calculate the maximum the slider can move left
    const maxPosition = -(cardWidth * (totalCards - visibleCards));

    const moveNext = () => {
        setPosition(prev => (prev <= maxPosition ? 0 : prev - cardWidth));
    };

    const movePrev = () => {
    setPosition(prev => (prev === 0 ? maxPosition : prev + cardWidth));
};

    // Auto-slide every 4 seconds
    useEffect(() => {
        const timer = setInterval(moveNext, 4000);
        return () => clearInterval(timer);
    }, [position]); // Added dependency to keep timer fresh

    return (
        <section className="formators">
            <h2 className="formators-title">Meet Our Formators</h2>
            
            <div className="formators-slider">
                <button className="slide-btn formator-prev" onClick={movePrev}>&#10094;</button>
                
                <div 
                    className="formators-track" 
                    style={{ transform: `translateX(${position}px)` }}
                >
                    {formatorsList.map((fr) => (
                        <div className="formator-card" key={fr.id}>
                            <img src={fr.image} alt={fr.name} />
                            <h3>{fr.name}</h3>
                            <p className="role">{fr.role}</p>
                            <p className="email">Email: {fr.email}</p>
                        </div>
                    ))}
                </div>

                <button className="slide-btn formator-next" onClick={moveNext}>&#10095;</button>
            </div>
        </section>
    );
};

export default Formators;