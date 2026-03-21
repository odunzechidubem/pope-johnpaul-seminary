import React from 'react';

const Facilities = () => {
  const facilityList = [
    {
      id: 1,
      title: "Seminary Chapel",
      image: "/images/chapel.jpeg",
      link: "/pages/facilities/chapel.html"
    },
    {
      id: 2,
      title: "Academic Block",
      image: "/images/academic_block.jpeg",
      link: "/pages/facilities/academic-block.html"
    },
    {
      id: 3,
      title: "Seminary Entrance",
      image: "/images/entrance1.jpg", 
      link: "/pages/facilities/entrance.html"
    },
    {
      id: 4,
      title: "PJPS Nursery and Primary School",
      image: "/images/pjps_nursery_primary_school.jpg", 
      link: "/pages/facilities/nursery-primary.html"
    },
    {
      id: 5,
      title: "Seminary Hostel",
      image: "/images/seminary_hostel.jpg", 
      link: "/pages/facilities/hostel.html"
    },
    {
      id: 6,
      title: "School Sports Facilities",
      isCollage: true, // Special flag for the sports collage
      images: [
        "/images/football_field.jpg",
        "/images/lawn_tennis_court.jpg",
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
                  {/* <div className="sports-overlay-text">
                    <ul>
                      <li>Football Field</li>
                      <li>Lawn Tennis Court</li>
                      <li>BasketBall Court</li>
                    </ul>
                  </div> */}
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