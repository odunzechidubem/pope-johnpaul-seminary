import React, { useState } from 'react';

const HistoryAndEvents = () => {
  // 1. Data for the events
  const eventsData = [
    {
      id: 1,
      title: "Lorem ipsum dolor",
      subtitle: "PJPMS journey",
      image: "/images/road.jpg",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum minima magnam dolorum cumque maiores voluptate ullam asperiores, incidunt perspiciatis cum!"
    },
    {
      id: 2,
      title: "Lorem ipsum dolor",
      subtitle: "PJPMS journey",
      image: "/images/popestature.jpg",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum minima magnam dolorum cumque maiores voluptate ullam asperiores, incidunt perspiciatis cum!"
    },
    {
      id: 3,
      title: "Lorem ipsum dolor",
      subtitle: "PJPMS journey",
      image: "/images/students.jpg",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum minima magnam dolorum cumque maiores voluptate ullam asperiores, incidunt perspiciatis cum!"
    },
    {
      id: 4,
      title: "Lorem ipsum dolor",
      subtitle: "PJPMS journey",
      image: "/images/seminarians.jpg",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum minima magnam dolorum cumque maiores voluptate ullam asperiores, incidunt perspiciatis cum!"
    },
    {
      id: 5,
      title: "Lorem ipsum dolor",
      subtitle: "PJPMS journey",
      image: "/images/groto.jpg",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum minima magnam dolorum cumque maiores voluptate ullam asperiores, incidunt perspiciatis cum!"
    }
  ];

  // 2. State to track which event is currently "Large"
  const [selectedEvent, setSelectedEvent] = useState(eventsData[0]);

  // 3. Logic to get the events for the side (the ones not selected)
  const sideEvents = eventsData.filter(event => event.id !== selectedEvent.id);

  return (
    <>
      {/* PAST EVENTS SECTION */}
      <section className="past-events">
        <h1 className="past-title">Past Events</h1>
        <div className="events-container">
          
          {/* LEFT LARGE EVENT (Displaying the selected state) */}
          <div className="event-large fade-in" key={selectedEvent.id}>
            <img src={selectedEvent.image} alt={selectedEvent.title} />
            <h2>{selectedEvent.subtitle}</h2>
            <p>{selectedEvent.description}</p>
          </div>

          {/* RIGHT SIDE EVENTS (Clicking one sets it as selected) */}
          <div className="event-side">
            {sideEvents.map((event) => (
              <div 
                className="event-card" 
                key={event.id} 
                onClick={() => setSelectedEvent(event)}
                style={{ cursor: 'pointer' }}
              >
                <img src={event.image} alt={event.title} />
                <h3>{event.subtitle}</h3>
                <p>{event.description.substring(0, 100)}...</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT HISTORY SECTION */}
      <section className="about-history">
        <h1 className="about-title">ABOUT US</h1>
        <div className="about-container">
          {/* LEFT TEXT */}
          <div className="about-text">
            <h2>A BRIEF HISTORY OF</h2>
            <h3>POPE JOHN PAUL II MAJOR SEMINARY</h3>
            <p>
              Pope John Paul II Major Seminary, Okpuno (Awka South L.G. A) was opened on November 20, 1997 as a campus of
              Bigard Memorial Seminary, Enugu. The seminary was established to cater for the philosophical formation of
              seminarians from the Onitsha Ecclesiastical Province.
            </p>
            <p>
              The first batch of seminarians that were admitted into the seminary in 1997 were those that had completed
              their first year of philosophy in Bigard Memorial Seminary, Enugu. With over one thousand seminarians in
              Bigard, formation became quite ...
            </p>
            <a href="/pages/aboutpages/school-history.html" className="about-btn">READ MORE</a>
          </div>

          {/* RIGHT VIDEO */}
          <div className="about-video">
            <iframe 
              src="https://www.youtube.com/embed/QkBhHDKqfTg" 
              title="Seminary Video" 
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen>
            </iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default HistoryAndEvents;