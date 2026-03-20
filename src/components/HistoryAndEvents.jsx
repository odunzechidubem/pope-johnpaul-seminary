import React, { useState } from 'react';

const HistoryAndEvents = () => {
  // 1. Data for the events
  const eventsData = [
    {
      id: 1,
      title: "Centenary Stopover Okpala",
      subtitle: "PJPMS journey",
      image: "/images/road.jpg",
      description: "On the 17th of November, 2023, Mother PJPMS journeyed with her seminarians, formators and Alumni to St. Paul's Seminary, Okpala, Imo State."
    },
    {
      id: 2,
      title: "Igbarim Event",
      subtitle: "------------",
      image: "/images/popestature.jpg",
      description: "In continuation of the PJPMS Centenary activities, the PJPMS Family, on Thursday the 25th day of January, 2024, journied to Igbarim where PJPMS originally took off as St. Paul's Seminary in 1924."
    },
    {
      id: 3,
      title: "Afaha Obong Event",
      subtitle: "------------",
      image: "/images/our_alumni.jpg",
      description: "PJPMS Seminary family visited Queen of Apostles Seminary, Afaha Obong on Friday, 26th April 2024 as part of the Centenary Celebration. The seminary sojourned here during the outbreak of the Nigerian Civil War."
    },
    {
      id: 4,
      title: "Afaha Obong Event",
      subtitle: "------------",
      image: "/images/Rector.jpeg",
      description: "PJPMS Seminary family visited Queen of Apostles Seminary, Afaha Obong on Friday, 26th April 2024 as part of the Centenary Celebration. The seminary sojourned here during the outbreak of the Nigerian Civil War."
    },
    {
      id: 5,
      title: "Afaha Obong Event",
      subtitle: "------------",
      image: "/images/groto.jpg",
      description: "PJPMS Seminary family visited Queen of Apostles Seminary, Afaha Obong on Friday, 26th April 2024 as part of the Centenary Celebration. The seminary sojourned here during the outbreak of the Nigerian Civil War."
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
            <p className="about-sub">Early Years at Onitsha:</p>
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