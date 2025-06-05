import React from 'react';
import ReactDOM from 'react-dom/client';
import Resume from './Resume';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Resume />
  </React.StrictMode>
);

// Přidání animací při scrollování – cyklické zobrazování
window.addEventListener('load', () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-scroll');
        } else {
          // Resetuje animaci, aby šla znovu spustit
          entry.target.classList.remove('animate-fade-in-scroll');
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll('section.opacity-0').forEach(el => {
    observer.observe(el);
  });

  console.log("Observer aktivní – sleduje sekce opakovaně.");
});
