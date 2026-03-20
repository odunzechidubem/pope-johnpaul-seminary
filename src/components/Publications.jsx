import React, { useState, useEffect } from 'react';

const Publications = () => {
  const publicationData = [
    {
      id: 1,
      title: "PJPMS Centenary Publication",
      image: "/images/popestature.jpg", // Replace with your book cover image
      link: "/pages/resourcespages/publications.html"
    },
    {
      id: 2,
      title: "PJPMS Centenary Publication",
      image: "/images/popestature.jpg",
      link: "/pages/resourcespages/publications.html"
    },
    {
      id: 3,
      title: "PJPMS Centenary Publication",
      image: "/images/popestature.jpg",
      link: "/pages/resourcespages/publications.html"
    },
    {
      id: 4,
      title: "PJPMS Theological Journal",
      image: "/images/popestature.jpg",
      link: "/pages/resourcespages/publications.html"
    },
    {
        id: 5,
        title: "Formation Handbook",
        image: "/images/popestature.jpg",
        link: "/pages/resourcespages/publications.html"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 4000); // Slides every 4 seconds
    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % (publicationData.length - 2)); 
    // "- 2" ensures we don't slide into empty space when showing 3 at a time
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + (publicationData.length - 2)) % (publicationData.length - 2));
  };

  return (
    <section className="publications-section">
      <h1 className="pub-title">PJPMS Publications</h1>

      <div className="pub-slider-container">
        <button className="pub-nav-btn prev" onClick={handlePrev}>❮</button>
        
        <div className="pub-slider-view">
          <div 
            className="pub-track" 
            style={{ transform: `translateX(-${currentIndex * 33.33}%)` }}
          >
            {publicationData.map((pub) => (
              <a href={pub.link} className="pub-card" key={pub.id}>
                <div className="pub-image-box">
                  <img src={pub.image} alt={pub.title} />
                </div>
                <p className="pub-name">{pub.title}</p>
              </a>
            ))}
          </div>
        </div>

        <button className="pub-nav-btn next" onClick={handleNext}>❯</button>
      </div>

      {/* Progress Bar shown in your screenshot */}
      <div className="pub-progress-bar">
        <div 
          className="pub-progress-fill" 
          style={{ width: `${((currentIndex + 1) / (publicationData.length - 2)) * 100}%` }}
        ></div>
      </div>
      <div className="facilities-footer">
        <a href="/pages/publications.html" className="see-more-btn">
          See More
        </a>
      </div>
    </section>
  );
};

export default Publications;