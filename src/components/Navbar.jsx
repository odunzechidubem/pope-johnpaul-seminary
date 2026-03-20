import React, { useState } from 'react';

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  // Toggle the main hamburger menu
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  // Toggle main dropdowns (Mobile only)
  const handleDropdownClick = (e, name) => {
    if (window.innerWidth <= 900) {
      e.preventDefault();
      setActiveDropdown(activeDropdown === name ? null : name);
      setActiveSubmenu(null); // Close submenu if switching main dropdown
    }
  };

  // Toggle nested submenus (Mobile only)
  const handleSubmenuClick = (e, name) => {
    if (window.innerWidth <= 900) {
      e.preventDefault();
      e.stopPropagation(); // Prevent closing the main dropdown
      setActiveSubmenu(activeSubmenu === name ? null : name);
    }
  };

  return (
    <header>
      <a href="/" className="logo">
        <div className="logo-area">
          <img src="/images/header_logo.png" alt="PJPMS Memorial Seminary Logo" />
          <span className="site-name">POPE JOHN PAUL II MAJOR SEMINARY</span>
        </div>
      </a>

      {/* Hamburger button for mobile */}
      <button className="nav-toggle" onClick={toggleNav} aria-label="Toggle navigation">
        &#9776;
      </button>

      <nav className={`nav-links ${isNavOpen ? 'show' : ''}`}>
        <a href="/">HOME</a>

        {/* ABOUT US */}
        <div className="dropdown">
          <a href="#" onClick={(e) => handleDropdownClick(e, 'about')}>▼ABOUT US</a>
          <div className={`dropdown-content ${activeDropdown === 'about' ? 'active' : ''}`}>
            <a href="/pages/aboutpages/aboutcurrentrector.html">About the Current Rector</a>
            <a href="/pages/aboutpages/school-history.html">School History</a>
            <a href="/pages/aboutpages/rectors.html">Rectors</a>
            <a href="/pages/aboutpages/staff.html">Staff</a>
            <a href="/pages/aboutpages/house-formation-advisers.html">Houses Formation Advisers</a>
            <a href="/pages/aboutpages/congregations.html">Congregations / Independent Missions</a>
            <a href="/pages/aboutpages/cardinal-bishop-alumni.html">Cardinals, Bishops, Alumni of PJPMS</a>
            <a href="/pages/aboutpages/seminarians.html">Seminarians</a>
            <a href="/pages/contact.html">Contact Us</a>
          </div>
        </div>

        {/* COUNCILS */}
        <div className="dropdown">
          <a href="#" onClick={(e) => handleDropdownClick(e, 'councils')}>▼COUNCILS</a>
          <div className={`dropdown-content ${activeDropdown === 'councils' ? 'active' : ''}`}>
            <a href="/pages/councilspages/governing-body.html">Governing Body</a>
            <a href="/pages/councilspages/administrative-council.html">Administrative Council</a>
            <a href="/pages/councilspages/academic-council.html">Academic Council</a>
            <a href="/pages/councilspages/financial-council.html">Financial Council</a>
            <a href="/pages/councilspages/library-council.html">Library Council</a>
            <a href="/pages/councilspages/spiritual-council.html">Spiritual Council</a>
            <a href="/pages/councilspages/student-council.html">Students’ Councils</a>
          </div>
        </div>

        {/* ACADEMIC PROGRAMS */}
        <div className="dropdown">
          <a href="#" onClick={(e) => handleDropdownClick(e, 'academics')}>▼ACADEMIC PROGRAMS</a>
          <div className={`dropdown-content ${activeDropdown === 'academics' ? 'active' : ''}`}>
            <a href="/pages/academicprogramspages/philosophy.html">Philosophy</a>
            {/* <a href="/pages/academicprogramspages/theology.html">Theology</a> */}
            <a href="/pages/academicprogramspages/affiliations.html">Affiliations</a>
            {/* <a href="/pages/academicprogramspages/academic-regulations.html">Academic Regulations</a> */}
          </div>
        </div>

        {/* ADMISSIONS */}
        <div className="dropdown">
          <a href="#" onClick={(e) => handleDropdownClick(e, 'admissions')}>▼ADMISSIONS</a>
          <div className={`dropdown-content ${activeDropdown === 'admissions' ? 'active' : ''}`}>
            <a href="#">STAFF RECRUITMENT / ADMISSION BOARD</a>
            <div className="submenu">
              <a href="#" onClick={(e) => handleSubmenuClick(e, 'staffRecruit')}>▼Staff Recruitment</a>
              <div className={`submenu-content ${activeSubmenu === 'staffRecruit' ? 'active' : ''}`}>
                <a href="/pages/admissionspages/staff-recruitment-board.html">Staff Recruitment Board</a>
                <a href="/pages/admissionspages/process-of-recruitment.html">Process of Recruitment</a>
              </div>
            </div>
            <a href="/pages/admissionspages/process-of-admission.html">Process of Admission</a>
          </div>
        </div>

        {/* RESOURCES */}
        <div className="dropdown">
          <a href="#" onClick={(e) => handleDropdownClick(e, 'resources')}>▼RESOURCES</a>
          <div className={`dropdown-content ${activeDropdown === 'resources' ? 'active' : ''}`}>
            <a href="/pages/resourcespages/publications.html">Publications</a>
            <a href="/pages/resourcespages/academic-calendar.html">Academic Calendar</a>
            <div className="submenu">
              <a href="#" onClick={(e) => handleSubmenuClick(e, 'library')}>▼Library Resources</a>
              <div className={`submenu-content ${activeSubmenu === 'library' ? 'active' : ''}`}>
                <a href="/pages/resourcespages/online-catalogue.html">Online Catalogue</a>
                <a href="/pages/resourcespages/open-resources.html">Open Resources</a>
                <a href="/pages/resourcespages/repository.html">Repository</a>
                <a href="/pages/resourcespages/secure-resources.html">Secure Resources</a>
              </div>
            </div>
            <a href="/pages/resourcespages/student-handbook.html">Student Handbook</a>
            <a href="/pages/resourcespages/code-of-conduct.html">Code of Conduct</a>
            <a href="/pages/resourcespages/alumni-network.html">Alumni Network</a>
          </div>
        </div>

        {/* LECTURERS' PROFILES */}
        <div className="dropdown">
          <a href="#" onClick={(e) => handleDropdownClick(e, 'lecturers')}>▼LECTURERS' PROFILES</a>
          <div className={`dropdown-content ${activeDropdown === 'lecturers' ? 'active' : ''}`}>
            <a href="/pages/lecturersprofilepages/lecturers-in-theology.html">Lecturers in the Department of Theology</a>
            <a href="/pages/lecturersprofilepages/lecturers-in-philosophy.html">Lecturers in the Department of Philosophy</a>
          </div>
        </div>

        {/* <a href="/pages/blog.html">BLOG</a> */}
      </nav>
    </header>
  );
};

export default Navbar;