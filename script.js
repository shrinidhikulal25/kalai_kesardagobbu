
// Highlight nav link on scroll
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('nav a');

  let current = '';

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 60;
    if (scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove('active');
    if (link.getAttribute('href').includes(current)) {
      link.classList.add('active');
    }
  });
});
