document.addEventListener('DOMContentLoaded', () => {

  const hero = document.querySelector('.hero');
  const glow = document.querySelector('.hero-glow');

  if (!hero || !glow) return;

  hero.addEventListener('mousemove', (e) => {

    const rect = hero.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    glow.style.left = `${x}px`;
    glow.style.top = `${y}px`;

    const moveX = (x / rect.width - 0.5) * 40;
    const moveY = (y / rect.height - 0.5) * 40;

    hero.style.setProperty('--mouse-x', `${moveX}px`);
    hero.style.setProperty('--mouse-y', `${moveY}px`);
  });

});
