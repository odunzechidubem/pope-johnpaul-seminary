import React from 'react';

const Facilities = () => {
  const facilityList = [
    {
      id: 1,
      title: "Bigard Chapel",
      image: "/images/chapel.jpg",
      link: "/pages/facilities/chapel.html"
    },
    {
      id: 2,
      title: "Academic Block",
      image: "/images/pjpms_compound.jpg",
      link: "/pages/facilities/academic-block.html"
    },
    {
      id: 3,
      title: "Bigard Auditorium",
      image: "/images/entrance1.jpg", 
      link: "/pages/facilities/auditorium.html"
    },
    {
      id: 4,
      title: "St. James' Library",
      image: "/images/header_logo.png", // Replace with library image
      link: "/pages/facilities/library.html"
    },
    {
      id: 5,
      title: "St Luke's Clinic",
      image: "/images/header_logo.png", // Replace with clinic image
      link: "/pages/facilities/clinic.html"
    },
    {
      id: 6,
      title: "School Sports Facilities",
      isCollage: true, // Special flag for the sports collage
      images: [
        "/images/header_logo.png",
        "/images/header_logo.png",
        "/images/header_logo.png",
        "/images/header_logo.png"
      ],
      link: "/pages/facilities/sports.html"
    }
  ];

  return (
    <section className="facilities-section">
      <h1 className="facilities-title">Our Facilities</h1>
      
      <div className="facilities-grid">
        {facilityList.map((item) => (
          <a href={item.link} className="facility-card" key={item.id}>
            <div className="facility-image-wrapper">
              {item.isCollage ? (
                <div className="sports-collage">
                  {item.images.map((img, index) => (
                    <img key={index} src={img} alt="sport" />
                  ))}
                  <div className="sports-overlay-text">
                    <ul>
                      <li>Football Field</li>
                      <li>Lawn Tennis Court</li>
                      <li>BasketBall Court</li>
                    </ul>
                  </div>
                </div>
              ) : (
                <img src={item.image} alt={item.title} className="facility-img" />
              )}
            </div>
            <h3 className="facility-name">{item.title}</h3>
          </a>
        ))}
      </div>

      <div className="facilities-footer">
        <a href="/pages/facilities/all.html" className="see-more-btn">
          See More Of Our Facilities
        </a>
      </div>
    </section>
  );
};

export default Facilities;