import React, { useState } from 'react';
import '../styles/Portfolio.css';
import { Modal } from 'react-bootstrap';
import data from '../services/data';
import play from '../icons/play.png';

function Portfolio() {
  const [urlVideo, setUrlVideo] = useState('');
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(!show);

  const handleClick = (url) => {
    setUrlVideo(url);
  }

  return (
    <section className="section-portfolio" id="portfolio">
      <div className="portfolio-sub-container">
        <div className="title-portfolio">
          <h1>PORTFÓLIO</h1>
        </div>
        <div className="video-maker">
          <div className="row1" onClick={handleShow}>
            <Modal
              show={show}
              backdrop="static"
              keyboard={false}
            >
              <Modal.Header closeButton>
                <iframe
                  src={urlVideo}
                  title="video"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  frameBorder="0"
                  className='play-on'
                />
              </Modal.Header>
            </Modal>
            <div className="description-video-container">
              {
                Object.values(data).map((video) => {
                  return (
                    <div className="description-video" key={video.id} onClick={() => handleClick(video.url)}>
                      <video poster={video.poster} className="video_play" />
                      <div className="on_play">
                        <img src={play} alt="play" />
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;

