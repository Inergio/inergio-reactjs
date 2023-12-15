import React, { useState, useEffect, useRef } from 'react';
import './App.scss';
import Header from './components/Header'
import { Home } from './views/Home';
import { News } from './views/News';
import { AboutUs } from './views/AboutUs';
import { Footer } from './components/Footer';
import { Route, Routes } from 'react-router-dom';

function App() {
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

      <div className="body-div">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/sobre-nosotros' element={<AboutUs />} />
          <Route path='/novedades' element={<News />} />
        </Routes>
      </div>
			
      <Footer />
		</div>
	);
}

export default App;
