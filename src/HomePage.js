import React from 'react';
import Header from './Header';
import Hero from './Hero';
import ProductGrid from './ProductGrid';








const HomePage = () => {
  const products = [
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
    // Och så vidare...
  ];

  return (
    <div>
      <Header />
      <Hero />
      <ProductGrid products={products} />
    </div>
  );
};


export default HomePage;
