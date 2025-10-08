import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

export const useScrollReveal = () => {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: 'bottom',
      distance: '60px',
      duration: 1000,
      delay: 100,
      easing: 'ease-out',
      reset: false,
      mobile: true,
      cleanup: true
    });

    // Reveal elements with different animations
    sr.reveal('.reveal-up', {
      origin: 'bottom',
      distance: '60px',
      duration: 800,
      delay: 100
    });

    sr.reveal('.reveal-left', {
      origin: 'left',
      distance: '60px',
      duration: 800,
      delay: 200
    });

    sr.reveal('.reveal-right', {
      origin: 'right',
      distance: '60px',
      duration: 800,
      delay: 200
    });

    sr.reveal('.reveal-fade', {
      origin: 'bottom',
      distance: '0px',
      duration: 1000,
      delay: 300,
      opacity: 0
    });

    sr.reveal('.reveal-scale', {
      origin: 'bottom',
      distance: '0px',
      duration: 800,
      delay: 200,
      scale: 0.8
    });

    // Staggered animations
    sr.reveal('.reveal-stagger', {
      origin: 'bottom',
      distance: '40px',
      duration: 600,
      delay: 100,
      interval: 150
    });

    return () => {
      sr.destroy();
    };
  }, []);
};
