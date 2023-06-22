import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Styles/Hero.css';

// Importera bilderna
import Image1 from './images/klocka.png';
import Image2 from './images/kaffe.png';
import Image3 from './images/kamera.png';
import Image4 from './images/lurar.png';

const Hero = () => {
    const images = [
        { src: Image1, alt: 'Alt text for image 1', title: 'Title 1', description: 'Description 1', link: 'LINK_1' },
        { src: Image2, alt: 'Alt text for image 2', title: 'Title 2', description: 'Description 2', link: 'LINK_2' },
        { src: Image3, alt: 'Alt text for image 3', title: 'Title 3', description: 'Description 3', link: 'LINK_3' },
        { src: Image4, alt: 'Alt text for image 4', title: 'Title 4', description: 'Description 4', link: 'LINK_4' },
    ];

    return (
        <Carousel>
            {images.map((img, index) => (
                <Carousel.Item key={index}>
                    <img
                        className="d-block w-100"
                        src={img.src}
                        alt={img.alt}
                    />
                    <Carousel.Caption>
                        <h1>{img.title}</h1>
                        <p>{img.description}</p>
                        <a href={img.link}>Learn More</a>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    );
};

export default Hero;
