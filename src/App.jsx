import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SpecialSection from './components/SpecialSection'
import { Welcome, News, Stats } from './components/MainSections'
import HistoryAndEvents from './components/HistoryAndEvents'
import Facilities from './components/Facilities'
import Publications from './components/Publications'
import Formators from './components/Formators'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Welcome />
      
      {/* Centenary Gallery Section */}
      {/* <section className="centenary">
        <h1 className="centenary-title">CELEBRATIONS</h1>
        <h3 className="centenary-sub">Photo Gallery</h3>
        <div className="centenary-gallery">
          {[1, 2, 3, 4].map((i) => (
            <div className="centenary-card" key={i}>
              <img src="/images/header_logo.png" alt="Gallery" />
            </div>
          ))}
        </div>
        <div className="centenary-btn">
          <a href="#">More Photos</a>
        </div>
      </section> */}

      <News />
      <HistoryAndEvents />
      <SpecialSection />
      <Facilities />
      <Publications />
      <Stats />
      <Formators />
      <Footer />
    </div>
  )
}

export default App