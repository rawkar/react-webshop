import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import { Carousel, Button } from 'react-bootstrap';

const Hero = () => {
  const carouselItems = [
    {
      img: "https://source.unsplash.com/random/1",
      title: "Titel 1",
      text: "Beskrivning för bild 1",
      link: "http://länk1.com"
    },
    {
      img: "https://source.unsplash.com/random/2",
      title: "Titel 2",
      text: "Beskrivning för bild 2",
      link: "http://länk2.com"
    },
    {
      img: "https://source.unsplash.com/random/3",
      title: "Titel 3",
      text: "Beskrivning för bild 3",
      link: "http://länk3.com"
    },
    {
      img: "https://source.unsplash.com/random/4",
      title: "Titel 4",
      text: "Beskrivning för bild 4",
      link: "http://länk4.com"
    }
  ];

  return (
    <Carousel>
      {carouselItems.map((item, idx) => (
        <Carousel.Item key={idx}>
          <img
            className="d-block w-100"
            src={item.img}
            alt={item.title}
          />
          <Carousel.Caption className="d-none d-md-block">
            <h1>{item.title}</h1>
            <p>{item.text}</p>
            <Button href={item.link} variant="primary">Läs mer</Button>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Hero;
