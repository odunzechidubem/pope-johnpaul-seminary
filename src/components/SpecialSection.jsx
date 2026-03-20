import React from 'react';

const SpecialSection = () => {
  const items = [
    {
      id: "01",
      title: "Excellence in Spirituality",
      image: "/images/spirituality.jpg", 
    },
    {
      id: "02",
      title: "Academic Rigor",
      image: "/images/pjpms_compound.jpg",
    },
    {
      id: "03",
      title: "Community Living",
      image: "/images/seminarians.jpg",
    },
    {
        id: "04",
        title: "Missionary Outreach",
        image: "/images/our_alumni.jpg",
      }
  ];

  return (
    <section className="special-section">
      <div className="special-header">
        <h1>What Makes PJPMS Special?</h1>
        <p>What makes the difference.</p>
      </div>

      <div className="special-gallery">
        {items.map((item) => (
          <div key={item.id} className="special-card" style={{ backgroundImage: `url(${item.image})` }}>
            <div className="special-overlay">
              <div className="special-content">
                <span className="special-number">{item.id}</span>
                <h3 className="special-text">{item.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SpecialSection;