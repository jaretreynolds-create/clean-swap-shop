// Mobile nav toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
if (hamburger) {
  hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));
}

// Toast notification
function showToast(msg) {
  let t = document.getElementById('toast');
  if (!t) { t = document.createElement('div'); t.id = 'toast'; t.className = 'toast'; document.body.appendChild(t); }
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3000);
}

// Filter buttons (products page)
const filterBtns = document.querySelectorAll('.filter-btn');
const swapCards = document.querySelectorAll('.swap-card[data-cat]');

function applyCategoryFilter(cat) {
  if (!filterBtns.length) return;
  filterBtns.forEach(b => {
    b.classList.toggle('active', b.dataset.filter === cat);
  });
  swapCards.forEach(card => {
    card.style.display = (cat === 'all' || card.dataset.cat === cat) ? '' : 'none';
  });
}

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    applyCategoryFilter(btn.dataset.filter);
  });
});

// Activate filter from ?cat= on load (same logic as click handlers)
(function initCategoryFromQuery() {
  if (!filterBtns.length) return;
  const params = new URLSearchParams(window.location.search);
  const cat = params.get('cat');
  if (cat && document.querySelector(`.filter-btn[data-filter="${cat}"]`)) {
    applyCategoryFilter(cat);
  }
})();

// Newsletter form
// Backend pending: wire to email provider / Formspree when ready
const nlForm = document.querySelector('.newsletter-form');
if (nlForm) {
  nlForm.addEventListener('submit', e => {
    e.preventDefault();
    const email = nlForm.querySelector('input').value;
    if (email) {
      showToast('🌿 Thanks for joining! Check your inbox.');
      nlForm.reset();
    }
  });
}

// Contact form
// Backend pending: wire to Formspree / email endpoint when ready
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    showToast('✅ Message sent! We\'ll be in touch soon.');
    contactForm.reset();
  });
}

// Scroll reveal
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.swap-card, .cat-card, .value-card').forEach(el => {
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});
