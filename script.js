// Lightbox for project images (no libraries)
const box = document.querySelector('.lightbox');
const boxImg = box.querySelector('img');
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => {
    boxImg.src = card.dataset.full;
    boxImg.alt = card.querySelector('img').alt;
    box.showModal();
  });
});
box.addEventListener('click', e => { if (e.target !== boxImg) box.close(); });
box.addEventListener('close', () => { boxImg.removeAttribute('src'); });
