import React, { useState, useEffect, useRef, Suspense } from 'react';
import './App.scss';
import { LoaderPage } from './components/LoaderPage';
import Header from './components/Header'
// import { Home } from './views/Home';
import { News } from './views/News';
import { AboutUs } from './views/AboutUs';
import { Footer } from './components/Footer';
import { Route, Routes } from 'react-router-dom';


const Home = React.lazy(() => import('./views/Home'));

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

  useEffect(() => {
    let resizeTimeout;

    const handleResize = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth > 768) {
        clearTimeout(resizeTimeout);

        resizeTimeout = setTimeout(() => {
          window.location.reload();
        }, 2000);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearTimeout(resizeTimeout);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

	return (
    <div className={`App ${scrolled} ${scrolledUp}`}>
      <Header />

      <div className="body-div">
        <Routes>
          <Route path='/' element={
            <Suspense fallback={<LoaderPage/>}>
              <Home />
            </Suspense>
          } />
          <Route path='/sobre-nosotros' element={<AboutUs />} />
          <Route path='/novedades' element={<News />} />
        </Routes>
      </div>

      
      <Footer />
    </div>
	);
}

export default App;
