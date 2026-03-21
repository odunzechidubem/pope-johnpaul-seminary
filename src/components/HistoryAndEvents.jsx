import React, { useState } from 'react';

const HistoryAndEvents = () => {
  // 1. Data for the events
  const eventsData = [
    {
      id: 1,
      title: "The Inauguration of the 2025/2026 Academic and Formation Year — 27th October 2025",
      subtitle: "The Inauguration of the 2025/2026 Academic and Formation Year — 27th October 2025",
      image: "/images/inauguration.jpeg",
      description: "The inauguration of the 2025/2026 Academic and Formation Year began with the Patronal Feast, during which the academic year was declared open by Very Rev. Fr. Prof. Josephat Oguejiofor. Awards were presented to outstanding seminarians in recognition of their growth in the four areas of human formation. This underscores the seminary’s commitment to both academic and moral excellence."
    },
    {
      id: 2,
      title: "The visit of the CWO, Awka Diocese — 14th November 2025",
      subtitle: "The visit of the CWO, Awka Diocese — 14th November 2025",
      image: "/images/visit_of_cwo.jpeg",
      description: "The representatives of the CWO were warmly welcomed to the seminary. They encouraged the seminarians to remain steadfast in their vocational journey. They also presented multiple food items to support the seminary community."
    },
    {
      id: 3,
      title: "Cultural Weekend — November 5–6, 2025",
      subtitle: "Cultural Weekend — November 5–6, 2025",
      image: "/images/cultural_weekend.jpeg",
      description: "The event opened with a vibrant cultural parade, followed by activities such as proverbs recitation, Igbo speaking, wrestling, and ìlụ competitions. The theme of the celebration centered on “A Critical Appraisal of Ndukaku.”"
    },
    {
      id: 4,
      title: "Patronal Feast Celebration — 26th October 2025",
      subtitle: "Patronal Feast Celebration — 26th October 2025",
      image: "/images/patronal_feast_celebration.jpeg",
      description: "The event began with a Holy Mass presided over by Rev. Fr. Prof. Josephat Oguejiofor. The seminary received special support for her ongoing projects."
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