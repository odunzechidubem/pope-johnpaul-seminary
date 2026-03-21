import React from 'react';

// 1. Data Array for News
const newsData = [
    {
        id: 1,
        title: "NAPS WEEKEND",
        date: "6th-7th March, 2026",
        day: "6-7",
        month: "Mar",
        image: "/images/naps_weekend1.jpeg",
        category: "latest"
    },
    {
        id: 2,
        title: "The visit of pontifical mission society (PMS)",
        date: "2nd March, 2026",
        day: "2",
        month: "Mar",
        image: "/images/visit_of_pms.jpeg",
        category: "latest"
    },
    {
        id: 3,
        title: "Matriculation Ceremony for the 2025/2026 Academic Year",
        date: "4th March 2026",
        day: "4",
        month: "Mar",
        image: "/images/matriculation_ceremony.jpeg",
        category: "latest"
    },
    {
        id: 4,
        title: "RECTOR CELEBRATES MASS WITH THE SEMINARIANS",
        date: "November 28, 2025",
        day: "28",
        month: "Nov",
        image: "/images/header_logo.png",
        category: "official"
    },
    {
        id: 5,
        title: "GLOBAL SCHOLARS VISIT THE SEMINARY CAMPUS",
        date: "October 25, 2025",
        day: "25",
        month: "Oct",
        image: "/images/header_logo.png",
        category: "official"
    },
    {
        id: 6,
        title: "INAUGURATION OF THE NEW STUDENT COUNCIL BODY",
        date: "October 21, 2025",
        day: "21",
        month: "Oct",
        image: "/images/header_logo.png",
        category: "official"
    }
];

export const Welcome = () => (
    <section className="welcome-section">
        <div className="welcome-container">
            <div className="welcome-image">
                <img src="/images/Rector.jpeg" alt="Rector" />
            </div>
            <div className="welcome-text">
                <h2>Rector's Welcome</h2>
                <p>
                    <strong>"WELCOME TO OUR WEBSITE!</strong><br /><br />
                     This is the official website of Pope John Paul II Major Seminary, Okpuno, Awka, Nigeria. The seminary was established in 1997 as a philosophy campus of Bigard Memorial Seminary Enugu, Nigeria. In the year 2000, it came to be named after Pope John Paul II in gratitude for his visit to Nigeria to beatify our brother Blessed Michael Iwene Tansi. It remained still attached to Bigard in many ecclesiastical issues till 2012 when it gained full autonomy from Rome as an independent Seminary within Onitsha Ecclesiastical Province. It is situated in Okpuno, Awka South, Anambra State, Nigeria. Welcome and explore our website."
                </p>
                <div className="welcome-line"></div>
            </div>
        </div>
    </section>
);

export const News = () => {
    // Filter data based on category
    // const officialUpdates = newsData.filter(item => item.category === "official");
    const latestNews = newsData.filter(item => item.category === "latest");

    // Reusable function to render a news card
    const renderNewsCard = (item) => (
        <div className="news-card" key={item.id}>
            <div className="news-text">
                <h4>{item.title}</h4>
                <p className="news-date">{item.date}</p>
            </div>
            <div className="news-image">
                <img src={item.image} alt={item.title} />
                <span className="date-box">{item.day}<br />{item.month}</span>
            </div>
        </div>
    );

    return (
        <section className="news-section">
            <h1 className="news-title">News & Updates</h1>
            
            <div className="news-container">
                {/* --- OFFICIAL UPDATES --- */}
                {/* <h2 className="news-subtitle">Official Updates</h2>
                <div className="news-grid">
                    {officialUpdates.map(renderNewsCard)}
                </div>
                <div className="news-btn"><a href="/pages/blog.html">READ MORE</a></div> */}

                {/* --- LATEST NEWS --- */}
                <h2 className="news-subtitle">Latest News</h2>
                <div className="news-grid">
                    {latestNews.map(renderNewsCard)}
                </div>
                <div className="news-btn"><a href="/pages/blog.html">READ MORE</a></div>
            </div>
        </section>
    );
};

export const Stats = () => (
    <section className="stats">
        <div><h3>285</h3><p>Students</p></div>
        <div><h3>31</h3><p>Staff</p></div>
        <div><h3>29 Years</h3><p>Experience</p></div>
    </section>
);