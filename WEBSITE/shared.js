/* ── DIXIPIX — Shared JS ── */

// ── Mobile menu ──
(function () {
  const hamburger  = document.getElementById('nav-hamburger');
  const mobileMenu = document.getElementById('nav-mobile-menu');
  if (!hamburger || !mobileMenu) return;

  hamburger.addEventListener('click', () => {
    const open = mobileMenu.classList.toggle('open');
    hamburger.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });
  mobileMenu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      hamburger.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
})();

// ── Lightbox ──
(function () {
  const lightbox      = document.getElementById('lightbox');
  const lightboxImg   = document.getElementById('lightbox-img');
  const lightboxClose = document.getElementById('lightbox-close');
  if (!lightbox) return;

  window.openLightbox = function (src, alt) {
    lightboxImg.src = src;
    lightboxImg.alt = alt;
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  };
  window.closeLightbox = function () {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
  };

  lightbox.addEventListener('click', e => { if (e.target !== lightboxImg) closeLightbox(); });
  lightboxClose.addEventListener('click', closeLightbox);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });
})();

// ── Scroll fade ──
(function () {
  const els = document.querySelectorAll('.fade-up');
  if (!els.length) return;
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); }
    });
  }, { threshold: 0.08 });
  els.forEach(el => observer.observe(el));
})();

// ── Carousels ── (skipped on pages with data-custom-carousel)
(function () {
  if (document.body.dataset.customCarousel) return;
  document.querySelectorAll('.carousel').forEach(car => {
    const track   = car.querySelector('.carousel-track');
    const slides  = car.querySelectorAll('.carousel-slide');
    const counter = car.querySelector('.carousel-counter');
    const fills   = car.querySelectorAll('.carousel-progress-fill');
    const prevBtn = car.querySelector('.carousel-btn.prev');
    const nextBtn = car.querySelector('.carousel-btn.next');
    const total   = slides.length;
    let current   = 0;

    function goTo(n) {
      current = (n + total) % total;
      track.style.transform = `translateX(-${current * 100}%)`;
      if (counter) counter.textContent = `${current + 1} / ${total}`;
      const pct = ((current + 1) / total * 100) + '%';
      fills.forEach(f => f.style.width = pct);
    }

    goTo(0);

    if (prevBtn) prevBtn.addEventListener('click', () => goTo(current - 1));
    if (nextBtn) nextBtn.addEventListener('click', () => goTo(current + 1));

    slides.forEach(slide => {
      if (slide.querySelector('[data-compare]')) return;
      slide.addEventListener('click', () => {
        const img = slide.querySelector('img');
        if (img && window.openLightbox) openLightbox(img.src, img.alt);
      });
    });

    car.setAttribute('tabindex', '0');
    car.addEventListener('keydown', e => {
      if (e.key === 'ArrowLeft')  goTo(current - 1);
      if (e.key === 'ArrowRight') goTo(current + 1);
    });

    // Touch swipe
    const vp = car.querySelector('.carousel-viewport');
    if (!vp) return;
    let swipeX = 0, swipeY = 0, swipeTarget = null, swipeLocked = null;
    vp.addEventListener('touchstart', e => {
      swipeX = e.touches[0].clientX;
      swipeY = e.touches[0].clientY;
      swipeTarget = e.target;
      swipeLocked = null;
    }, { passive: true });
    vp.addEventListener('touchmove', e => {
      if (swipeTarget && swipeTarget.closest('[data-compare]')) return;
      const dx = Math.abs(e.touches[0].clientX - swipeX);
      const dy = Math.abs(e.touches[0].clientY - swipeY);
      if (swipeLocked === null) swipeLocked = dx > dy ? 'h' : 'v';
      if (swipeLocked === 'h') e.preventDefault();
    }, { passive: false });
    vp.addEventListener('touchend', e => {
      if (swipeTarget && swipeTarget.closest('[data-compare]')) return;
      const dx = e.changedTouches[0].clientX - swipeX;
      if (Math.abs(dx) > 50) { dx < 0 ? goTo(current + 1) : goTo(current - 1); }
    }, { passive: true });
  });
})();
