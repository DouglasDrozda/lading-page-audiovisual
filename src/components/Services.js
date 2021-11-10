import React from 'react';
import '../styles/Services.css';
import editorVideo from '../images/editorVideo.png';

function Services() {
  return (
    <section className="services-container" id="sevicos">
      <div className="services-sub-container">
        <div className="services-title">
          <h1>SERVIÇOS</h1>
        </div>
        <div className="services-contain">
          <div className="services">
            <div className="services-img-container">
              <img src={editorVideo} alt="icone-video" width="85px" className="services-img" />
            </div>
            <h4>Lorem Ipsum</h4>
            <div className="services-text">
              <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
            </div>
          </div>
          <div className="services">
            <div className="services-img-container">
              <img src={editorVideo} alt="icone-video" width="85px" className="services-img" />
            </div>
            <h4>Lorem Ipsum</h4>
            <div className="services-text">
              <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
            </div>
          </div>
          <div className="services">
            <div className="services-img-container">
              <img src={editorVideo} alt="icone-video" width="85px" className="services-img" />
            </div>
            <h4>Lorem Ipsum</h4>
            <div className="services-text">
              <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
            </div>
          </div>
          <div className="services">
            <div className="services-img-container">
              <img src={editorVideo} alt="icone-video" width="85px" className="services-img" />
            </div>
            <h4>Lorem Ipsum</h4>
            <div className="services-text">
              <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
            </div>
          </div>
          <div className="services">
            <div className="services-img-container">
              <img src={editorVideo} alt="icone-video" width="85px" className="services-img" />
            </div>
            <h4>Lorem Ipsum</h4>
            <div className="services-text">
              <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
            </div>
          </div>
          <div className="services">
            <div className="services-img-container">
              <img src={editorVideo} alt="icone-video" width="85px" className="services-img" />
            </div>
            <h4>Lorem Ipsum</h4>
            <div className="services-text">
              <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
