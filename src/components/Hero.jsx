import React, { useState, useEffect } from 'react';

const Hero = () => {
    const slides = [
        { img: "/images/entrance1.jpg", text: "WELCOME TO POPE JOHN PAUL II MAJOR SEMINARY OKPUNO, AWKA" },
        { img: "/images/pjps_compound.jpg", text: "OUR SCHOOL COMPOUND" },
        { img: "/images/students.jpg", text: "OUR NEW STUDENTS" },
        { img: "/images/seminarians.jpg", text: "FORMATION OF FUTURE PRIESTS" },
        { img: "/images/chapel.jpeg", text: "SCHOOL CHAPEL" }
    ];

    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [slides.length]);

    const nextSlide = () => setCurrent((current + 1) % slides.length);
    const prevSlide = () => setCurrent((current - 1 + slides.length) % slides.length);

    return (
        <section className="hero">
            <button className="prev" onClick={prevSlide}>❮</button>
            <button className="next" onClick={nextSlide}>❯</button>
            <div className="slider">
                {slides.map((slide, index) => (
                    <div key={index} className={`slide ${index === current ? 'active' : ''}`}>
                        <img src={slide.img} alt={slide.text} />
                        <h1>{slide.text}</h1>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Hero;