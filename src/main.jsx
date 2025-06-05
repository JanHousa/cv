import React from 'react';
import ReactDOM from 'react-dom/client';
import Resume from './Resume';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Resume />
  </React.StrictMode>
);

// Přidání animací při scrollování – vypnuto pro malé obrazovky
window.addEventListener('load', () => {
  const isMobile = window.innerWidth < 768;

  if (isMobile) {
    // Na mobilu odstraníme opacity, aby se vše zobrazilo hned bez animace
    document.querySelectorAll('section.opacity-0').forEach(el => {
      el.classList.remove('opacity-0');
    });
    console.log("Animace vypnuty – zobrazení ihned (mobilní zařízení).");
    return;
  }

  // Na desktopu aktivujeme animace při scrollování
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

  document.querySelectorAll('section.opacity-0').forEach(el => {
    observer.observe(el);
  });

  console.log("Observer aktivní – sleduje sekce (desktop).");
});
