import React, { useState, useEffect } from 'react';

const Footer = () => {
  const [showScrollBtn, setShowScrollBtn] = useState(false);

  // Handle the scroll-to-top button visibility
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollBtn(true);
      } else {
        setShowScrollBtn(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <footer>
        <div className="footer-grid">
          {/* Left: Logo + description */}
          <div className="footer-left">
            <img src="/images/header_logo.png" alt="PJPMS Logo" className="footer-logo" />
            <h3>Pope John Paul II Major Seminary</h3>
          </div>

          {/* Center: Quick Links */}
          <div className="footer-center">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/admissions.html">Admissions</a></li>
              <li><a href="/programs.html">Programs</a></li>
              <li><a href="/resources.html">Library</a></li>
              <li><a href="/pages/aboutpages/school-history.html">School History</a></li>
            </ul>
          </div>

          {/* Right: Contact Us */}
          <div className="footer-right">
            <h3>Contact Us</h3>
            <p>
              No. 1, Pope John Paul Seminary Avenue, P O Box 1668, Okpuno Awka
              South LGA, Anambra State, Nigeria.
            </p>
            <p>
              <a href="mailto:info@popejohnpaulseminary.org" className="contact-link">
                info@popejohnpaulseminary.org
              </a>
            </p>
            <p>
              <a href="tel:+2349038304594" className="contact-link">
                +234 903 830 4594
              </a>
            </p>
            
            <div className="social-icons">
              {/* Facebook */}
              <a href="#" aria-label="Facebook" className="social-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="#1877F2">
                  <path d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.31h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.326V1.326C24 .593 23.407 0 22.675 0z" />
                </svg>
              </a>

              {/* Twitter */}
              <a href="#" aria-label="Twitter" className="social-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="#1DA1F2">
                  <path d="M23.954 4.569c-.885.392-1.83.656-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-2.723 0-4.932 2.208-4.932 4.932 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.729-.666 1.577-.666 2.475 0 1.708.869 3.216 2.188 4.099-.807-.026-1.566-.247-2.228-.616v.062c0 2.386 1.698 4.374 3.95 4.827-.413.112-.849.171-1.296.171-.317 0-.626-.03-.928-.086.627 1.956 2.444 3.377 4.6 3.417-1.68 1.318-3.808 2.104-6.115 2.104-.397 0-.788-.023-1.175-.069 2.179 1.397 4.768 2.212 7.548 2.212 9.054 0 14-7.496 14-13.986 0-.21-.005-.423-.014-.634.962-.695 1.8-1.562 2.462-2.549z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a href="#" aria-label="LinkedIn" className="social-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="#0A66C2">
                  <path d="M22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.207 24 24 23.226 24 22.271V1.729C24 .774 23.207 0 22.225 0zM7.081 20.452H3.543V9h3.538v11.452zM5.312 7.496c-1.134 0-2.053-.923-2.053-2.059a2.054 2.054 0 1 1 4.107 0c0 1.136-.919 2.059-2.054 2.059zM20.452 20.452h-3.537v-5.604c0-1.337-.027-3.061-1.865-3.061-1.868 0-2.154 1.458-2.154 2.964v5.701h-3.538V9h3.395v1.561h.049c.473-.897 1.631-1.845 3.357-1.845 3.593 0 4.254 2.365 4.254 5.444v6.292z" />
                </svg>
              </a>

              {/* Instagram */}
              <a href="#" aria-label="Instagram" className="social-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="#E1306C">
                  <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.34 3.608 1.314.975.975 1.252 2.242 1.314 3.608.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.34 2.633-1.314 3.608-.975.975-2.242 1.252-3.608 1.314-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.062-2.633-.34-3.608-1.314-.975-.975-1.252-2.242-1.314-3.608-.058-1.265-.07-1.645-.07-4.849s.012-3.584.07-4.849c.062-1.366.34-2.633 1.314-3.608C4.517 2.573 5.784 2.296 7.15 2.234c1.265-.058 1.645-.07 4.85-.07zm0-2.163C8.741 0 8.332.012 7.052.07 5.773.128 4.605.36 3.633 1.332 2.66 2.305 2.428 3.473 2.37 4.752.012 8.332 0 8.741 0 12s.012 3.668.07 4.948c.058 1.279.29 2.447 1.263 3.42.973.973 2.141 1.205 3.42 1.263C8.332 23.988 8.741 24 12 24s3.668-.012 4.948-.07c1.279-.058 2.447-.29 3.42-1.263.973-.973 1.205-2.141 1.263-3.42C23.988 15.668 24 15.259 24 12s-.012-3.668-.07-4.948c-.058-1.279-.29-2.447-1.263-3.42-.973-.973-2.141-1.205-3.42-1.263C15.668.012 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <p className="copyright">
          © {new Date().getFullYear()} Pope John Paul II Major Seminary. All Rights Reserved.
        </p>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollBtn && (
        <button id="scrollToTopBtn" onClick={scrollToTop} title="Go to top">
          ↑
        </button>
      )}
    </>
  );
};

export default Footer;