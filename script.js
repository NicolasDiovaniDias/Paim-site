const bubble = document.getElementById('bubble');
const vid = document.getElementById('vid');
const playIcon = document.getElementById('playIcon');

bubble.addEventListener('mouseenter', () => {
  vid.play();
  playIcon.style.opacity = '0';
});

bubble.addEventListener('mouseleave', () => {
  vid.pause();
  vid.currentTime = 0;
  playIcon.style.opacity = '1';
});
  const wrapper = document.getElementById('sub-titulo-wrapper');
  const bola = document.getElementById('bola');
  const branco = document.getElementById('sub-titulo-branco');
  const R = 56.6; // raio do recorte em px — ajuste junto com o width da bola

  wrapper.addEventListener('mousemove', (e) => {
    const r = wrapper.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;

    bola.style.left = x + 'px';
    bola.style.top = y + 'px';
    bola.style.opacity = '1';

    branco.style.opacity = '1';
    branco.style.clipPath = `circle(${R}px at ${x}px ${y}px)`;
  });

  wrapper.addEventListener('mouseleave', () => {
    bola.style.opacity = '0';
    branco.style.opacity = '0';
  });