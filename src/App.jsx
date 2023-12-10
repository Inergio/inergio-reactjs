import React, { useState, useEffect, useRef } from 'react';
import './App.scss';
import Header from './components/Header'
import { LandingSection } from './components/LandingSection';
import { CardSection } from './components/CardSection';
import { UsNetworks } from './components/UsNetworks';
import { Footer } from './components/Footer';

function App() {
  const landingSections = [
    {
      name: "main",
      infoPosition: "center"
    },
    {
      name: "renewableEnergy",
      infoPosition: "bottom"
    },
    {
      name: "productsAndServices",
      infoPosition: "right"
    },
    {
      name: "aboutUs",
      infoPosition: "left"
    },
  ]

  const [scrolled, setScrolled] = useState('');
  const [scrolledUp, setScrolledUp] = useState('');
  const prevScrollYRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY < 1) {
        setScrolled('');
        setScrolledUp('');
      } else if (scrollY > 60) {
        setScrolled('scrolled');

        // Comparar scrollY con prevScrollY para determinar si el scroll está subiendo
        setScrolledUp(scrollY < prevScrollYRef.current ? 'scrolled-up' : '');
      } else {
        setScrolled('');
        setScrolledUp('');
      }

      // Actualizar el valor anterior del scroll utilizando el ref
      prevScrollYRef.current = scrollY;
    };

    // Suscribirse al evento de desplazamiento
    window.addEventListener('scroll', handleScroll);

    // Limpiar el evento al desmontar el componente
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

	return (
		<div className={`App ${scrolled} ${scrolledUp}`}>
			<Header />

			{landingSections.map((section, index) => (
        <LandingSection key={index} section={section} />
      ))}

      <CardSection />

      <UsNetworks />

      <Footer />
		</div>
	);
}

export default App;
