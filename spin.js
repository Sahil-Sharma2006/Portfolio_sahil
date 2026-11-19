// 360° spin video of Sahil, built from 8 photo angles with smooth in-between frames.
// Plays on a loop; drag to turn it by hand.
(() => {
  const fig = document.querySelector('.about__photo');
  const v = fig && fig.querySelector('.spin-video');
  if (!v) return;
  const floor = fig.querySelector('.floor');
  const still = matchMedia('(prefers-reduced-motion: reduce)').matches;
  // Safari can't show transparent WebM, so it gets the MP4 (same video on the page colour)
  const safari = /^((?!chrome|android|crios|fxios).)*safari/i.test(navigator.userAgent);

  function load() {
    v.src = safari ? 'assets/spin.mp4' : 'assets/spin.webm';
    if (!still) v.play().catch(() => {});
  }
  new IntersectionObserver(([e], o) => { if (e.isIntersecting) { o.disconnect(); load(); } }, { rootMargin: '300px' }).observe(fig);
  new IntersectionObserver(([e]) => { if (!v.src || still || dragging) return; e.isIntersecting ? v.play().catch(() => {}) : v.pause(); }).observe(fig);

  // shadow follows the turn
  const shade = () => {
    if (floor && v.duration) floor.style.transform = `scaleX(${.72 + .28 * Math.abs(Math.cos(v.currentTime / v.duration * 2 * Math.PI))})`;
    requestAnimationFrame(shade);
  };
  requestAnimationFrame(shade);

  // drag to turn
  let dragging = false, lastX = 0, wasPlaying = false;
  v.addEventListener('pointerdown', e => {
    if (!v.duration) return;
    dragging = true; lastX = e.clientX; wasPlaying = !v.paused; v.pause();
    v.setPointerCapture(e.pointerId); fig.classList.add('grabbing');
  });
  v.addEventListener('pointermove', e => {
    if (!dragging) return;
    const d = v.duration, t = (v.currentTime + (e.clientX - lastX) * d / 600) % d;
    v.currentTime = t < 0 ? t + d : t; lastX = e.clientX;
  });
  const up = () => { if (!dragging) return; dragging = false; fig.classList.remove('grabbing'); if (wasPlaying && !still) setTimeout(() => v.play().catch(() => {}), 800); };
  v.addEventListener('pointerup', up); v.addEventListener('pointercancel', up);
})();
