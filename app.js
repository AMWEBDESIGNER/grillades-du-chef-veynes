document.body.classList.add('locked');
window.addEventListener('load', () => window.setTimeout(() => {
  document.querySelector('.preloader')?.classList.add('done');
  document.body.classList.remove('locked');
}, 700));

const reveals = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => entries.forEach((entry) => {
  if (!entry.isIntersecting) return;
  entry.target.classList.add('visible');
  revealObserver.unobserve(entry.target);
}), { threshold: .12 });
reveals.forEach((item) => revealObserver.observe(item));

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!reducedMotion) {
  document.querySelectorAll('.magnetic').forEach((button) => {
    button.addEventListener('pointermove', (event) => {
      const box = button.getBoundingClientRect();
      button.style.transform = `translate(${(event.clientX - box.left - box.width / 2) * .13}px, ${(event.clientY - box.top - box.height / 2) * .17}px)`;
    });
    button.addEventListener('pointerleave', () => button.style.transform = '');
  });

  const canvas = document.querySelector('#embers');
  const context = canvas.getContext('2d');
  let particles = [];
  const resize = () => {
    canvas.width = window.innerWidth * devicePixelRatio;
    canvas.height = window.innerHeight * devicePixelRatio;
    context.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
    particles = Array.from({ length: Math.min(58, Math.floor(window.innerWidth / 20)) }, () => ({
      x: Math.random() * window.innerWidth,
      y: window.innerHeight + Math.random() * 500,
      r: Math.random() * 2.1 + .4,
      speed: Math.random() * .75 + .25,
      drift: Math.random() * .5 - .25,
      alpha: Math.random() * .7 + .2
    }));
  };
  const draw = () => {
    context.clearRect(0, 0, window.innerWidth, window.innerHeight);
    particles.forEach((particle) => {
      particle.y -= particle.speed;
      particle.x += particle.drift;
      if (particle.y < -10) { particle.y = window.innerHeight + 10; particle.x = Math.random() * window.innerWidth; }
      context.beginPath();
      context.arc(particle.x, particle.y, particle.r, 0, Math.PI * 2);
      context.fillStyle = `rgba(232,74,34,${particle.alpha})`;
      context.shadowColor = '#e6a23d';
      context.shadowBlur = 8;
      context.fill();
    });
    requestAnimationFrame(draw);
  };
  resize(); draw();
  window.addEventListener('resize', resize);
}
