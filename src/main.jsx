import React from 'react';
import ReactDOM from 'react-dom/client';
import Resume from './Resume';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Resume />
  </React.StrictMode>
);

// Detekce mobilního zařízení (šířka nebo user agent)
const isMobile = window.innerWidth < 768 || /Mobi|Android/i.test(navigator.userAgent);

window.addEventListener('load', () => {
  const sections = document.querySelectorAll('section.opacity-0');

  if (isMobile) {
    sections.forEach(el => {
      el.classList.remove('opacity-0'); // Zajistí zobrazení bez animace
    });
    console.log("Animace jsou na mobilu deaktivovány.");
    return;
  }

  // Desktop – přidání animací pomocí IntersectionObserver
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-scroll');
        } else {
          entry.target.classList.remove('animate-fade-in-scroll');
        }
      });
    },
    { threshold: 0.1 }
  );

  sections.forEach(el => {
    observer.observe(el);
  });

  console.log("Animace aktivní – desktop režim.");
});
