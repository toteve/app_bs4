// todo el codigo de funcionamiento en un archivo aparte reveal.js
// usamos globalThis, porque Window funciona en alcance local

globalThis.sr = ScrollReveal(); // invocamos a la libreria ya enlazada en Head

// efectos para Navbar invocando la clase con .navbar
sr.reveal('.navbar', {
  duration: 6000,
  origin: 'left'
});

// efectos para header su content-left
sr.reveal('.header-content-left', {
  duration: 6000,
  origin: 'top',
  distance: '300px'
});

// efectos para header su content-right
sr.reveal('.header-content-right', {
  duration: 6000,
  origin: 'right',
  distance: '300px'
});

// efectos para header su btn
sr.reveal('.header-btn', {
  duration: 2000,
  delay: 3000, 
  origin: 'bottom'
});

// efectos para testimonial su Div
sr.reveal('#testimonial div', {
  duration: 2000,
  origin: 'left',
  distance: '300px',
  viewFactor: 0.2
});

// Codigo actualizado de Smooth Scrolling buscar en StackOverflow para ver codigo
// logrando sea con efecto los cambios entre las secciones que se elijan en el
// menu de Navegacion
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});