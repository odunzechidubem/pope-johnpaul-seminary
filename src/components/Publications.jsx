import React, { useState, useEffect } from 'react';

const Publications = () => {
  const publicationData = [
    {
      id: 1,
      title: "PJPS Philosophical Journal",
      image: "/images/pjpjoph.jpg",
      link: "https://www.acjol.com/journal/pjpjoph",
      target: "_blank",
      rel: "noopener noreferrer"
    },
    {
      id: 2,
      title: "WAJOBS",
      image: "/images/popestature.jpg", 
      link: "/pages/resourcespages/publications.html"
    },
    {
      id: 3,
      title: "Latest Publications",
      image: "/images/popestature.jpg",
      link: "/pages/resourcespages/publications.html"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  // 1. Update items per page based on screen width
  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth <= 600) {
        setItemsPerPage(1); // Mobile: 1 book
      } else if (window.innerWidth <= 900) {
        setItemsPerPage(2); // Tablet: 2 books
      } else {
        setItemsPerPage(3); // Desktop: 3 books
      }
    };

    updateItemsPerPage();
    window.addEventListener('resize', updateItemsPerPage);
    return () => window.removeEventListener('resize', updateItemsPerPage);
  }, []);

  // 2. Dynamic limit logic
  const maxIndex = publicationData.length - itemsPerPage;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  // 3. Auto-slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex, itemsPerPage]);

  return (
    <section className="publications-section">
      <h1 className="pub-title">PJPS Publications</h1>

      <div className="pub-slider-container">
        {/* Navigation Buttons */}
        <button className="pub-nav-btn prev" onClick={handlePrev} aria-label="Previous">❮</button>
        
        <div className="pub-slider-view">
          <div 
            className="pub-track" 
            style={{ 
                transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`,
                width: `${(publicationData.length / itemsPerPage) * 100}%`
            }}
          >
            {publicationData.map((pub) => (
              <a 
                href={pub.link} 
                className="pub-card" 
                key={pub.id} 
                target={pub.target || "_self"}
                rel={pub.rel || ""}
                style={{ width: `${100 / publicationData.length}%` }}
              >
                <div className="pub-image-box">
                  <img src={pub.image} alt={pub.title} />
                </div>
                <p className="pub-name">{pub.title}</p>
              </a>
            ))}
          </div>
        </div>

        <button className="pub-nav-btn next" onClick={handleNext} aria-label="Next">❯</button>
      </div>

      {/* Progress Bar */}
      <div className="pub-progress-bar">
        <div 
          className="pub-progress-fill" 
          style={{ width: `${((currentIndex + 1) / (maxIndex + 1)) * 100}%` }}
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