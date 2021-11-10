import React, { useState } from 'react';

import '../styles/Portfolio.css';

import data from '../services/data';
import play from '../icons/play.png';

function Portfolio() {
  const [classPlay, setClassPlay] = useState('play-off');
  const [urlVideo, setUrlVideo] = useState('');
  
  const handleClick = (url) => {
    setUrlVideo(url);
    setClassPlay('play-on');
  }

  return (
    <section className="section-portfolio" id="portfolio">
      <div className="portfolio-sub-container">
        <div className="title-portfolio">
          <h1>PORTFÓLIO</h1>
        </div>
        <div className="video-maker">
          <div className="row1">
            {
              Object.values(data).map((video) => {
                return (
                  <div className="description-video" key={ video.id } onClick={ () => handleClick(video.url) }>
                    <video poster={ video.poster } className="video_play">
                      <source src={ video.url } type="video/mp4" />
                    </video>
                    <div className="on_play">
                      <img src={ play } alt="play" />
                    </div>
                  </div>
                )
              })
            }
            <iframe
              src={ urlVideo }
              title="video"
              allow="autoplay; fullscreen; picture-in-picture"
              allowfullscreen
              frameborder="0"
              className={ classPlay }
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
