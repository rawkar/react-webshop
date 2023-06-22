import React from 'react';
import Container from 'react-bootstrap/Container';
import Header from './Header';
import Hero from './Hero';
import ProductGrid from './ProductGrid';


import Image1 from './images/produkt1.webp';


const HomePage = () => {
  const products = [
    {
      id: 1,
      name: 'Electric Vegetable Chopper',
      description: 'Kitchen Portable Electric Vegetable Chopper Mini Food Processor',
      price: 99,
      image: Image1,
    },
    {
      id: 2,
      name: 'Produkt 2',
      description: 'Detta är en beskrivning för Produkt 2',
      price: 200,
      image: 'url-till-bild-2',
    },
    {
      id: 3,
      name: 'Produkt 3',
      description: 'Detta är en beskrivning för Produkt 3',
      price: 300,
      image: 'url-till-bild-3',
    },

    {
      id: 4,
      name: 'Produkt 4',
      description: 'Detta är en beskrivning för Produkt 4',
      price: 300,
      image: 'url-till-bild-4',
    },

    {
      id: 1,
      name: 'Produkt 1',
      description: 'Detta är en beskrivning för Produkt 1',
      price: 100,
      image: 'url-till-bild-1',
    },
    {
      id: 2,
      name: 'Produkt 2',
      description: 'Detta är en beskrivning för Produkt 2',
      price: 200,
      image: 'url-till-bild-2',
    },
    {
      id: 3,
      name: 'Produkt 3',
      description: 'Detta är en beskrivning för Produkt 3',
      price: 300,
      image: 'url-till-bild-3',
    },

    {
      id: 4,
      name: 'Produkt 4',
      description: 'Detta är en beskrivning för Produkt 4',
      price: 300,
      image: 'url-till-bild-3',
    },
    // Och så vidare...
  ];

  return (
    <div>
      <Header />
      <Hero />
      <Container>
        <ProductGrid products={products} />
      </Container>
    </div>
  );
};

export default HomePage;