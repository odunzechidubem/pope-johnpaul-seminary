import React from 'react';

export const Welcome = () => (
    <section className="welcome-section">
        <div className="welcome-container">
            <div className="welcome-image">
                <img src="/images/Rector.jpeg" alt="Rector" />
            </div>
            <div className="welcome-text">
                <h2>Rector's Welcome</h2>
                <p>
                    <strong>"WELCOME TO OUR WEBSITE!</strong><br />
                     This is the official website of Pope John Paul II Major Seminary, Okpuno, Awka, Nigeria. The seminary was established in 1997 as a philosophy campus of Bigard Memorial Seminary Enugu, Nigeria. In the year 2000, it came to be named after Pope John Paul II in gratitude for his visit to Nigeria to beatify our brother Blessed Michael Iwene Tansi. It remained still attached to Bigard in many ecclesiastical issues till 2012 when it gained full autonomy from Rome as an independent Seminary within Onitsha Ecclesiastical Province. It is situated in Okpuno, Awka South, Anambra State, Nigeria. Welcome and explore our website."
                </p>
                <div className="welcome-line"></div>
            </div>
        </div>
    </section>
);

export const News = () => (
    <section className="news-section">
        <h1 className="news-title">News & Updates</h1>
        <div className="news-container">
            <h2 className="news-subtitle">Official Updates</h2>
            <div className="news-grid">
                {[1, 2, 3].map((item) => (
                    <div className="news-card" key={item}>
                        <div className="news-text">
                            <h4>PJPS INAUGURATES THE...</h4>
                            <p className="news-date">October 21, 2025</p>
                        </div>
                        <div className="news-image">
                            <img src="/images/header_logo.png" alt="" />
                            <span className="date-box">21<br />Oct</span>
                        </div>
                    </div>
                ))}
            </div>
            <div className="news-btn"><a href="#">READ MORE</a></div>
        </div>
    </section>
);

export const Stats = () => (
    <section className="stats">
        {/* <div><h3>2000+</h3><p>Alumni</p></div> */}
        <div><h3>285</h3><p>Students</p></div>
        <div><h3>31</h3><p>Staff</p></div>
        <div><h3>29 Years</h3><p>Experience</p></div>
    </section>
);