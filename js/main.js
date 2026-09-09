// Mobile nav toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
if (hamburger && navLinks) {
  const setOpen = (open) => {
    navLinks.classList.toggle('open', open);
    hamburger.setAttribute('aria-expanded', open ? 'true' : 'false');
  };
  hamburger.setAttribute('aria-expanded', 'false');
  hamburger.addEventListener('click', () => {
    setOpen(!navLinks.classList.contains('open'));
  });
  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setOpen(false));
  });
}

// Toast notification
function showToast(msg) {
  let t = document.getElementById('toast');
  if (!t) {
    t = document.createElement('div');
    t.id = 'toast';
    t.className = 'toast';
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3000);
}

// Filter buttons (products page)
const filterBtns = document.querySelectorAll('.filter-btn');
const swapCards = document.querySelectorAll('.swap-card[data-cat]');

function applyCategoryFilter(cat) {
  if (!filterBtns.length) return;
  filterBtns.forEach((b) => {
    b.classList.toggle('active', b.dataset.filter === cat);
  });
  swapCards.forEach((card) => {
    card.style.display = cat === 'all' || card.dataset.cat === cat ? '' : 'none';
  });
}

filterBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    applyCategoryFilter(btn.dataset.filter);
  });
});

// Activate filter from ?cat= on load
(function initCategoryFromQuery() {
  if (!filterBtns.length) return;
  const params = new URLSearchParams(window.location.search);
  const cat = params.get('cat');
  if (cat && document.querySelector(`.filter-btn[data-filter="${cat}"]`)) {
    applyCategoryFilter(cat);
  }
})();

// Newsletter form — Beehiiv wiring pending (no live endpoint yet)
const BEEHIIV_EMBED_CONNECTED = false;
const nlForm = document.querySelector('.newsletter-form');
if (nlForm) {
  nlForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = nlForm.querySelector('input')?.value;
    if (!email) return;
    if (!BEEHIIV_EMBED_CONNECTED) {
      showToast('🌿 Thanks — newsletter signup connects soon.');
      nlForm.reset();
      return;
    }
    showToast('🌿 Thanks for joining! Check your inbox.');
    nlForm.reset();
  });
}

// Contact form — Web3Forms / Formspree / mailto (see FORMSPREE-SETUP.md)
// Paste a real Web3Forms UUID here after signup. Leave empty to read the form field.
const WEB3FORMS_ACCESS_KEY = '';
// Optional Formspree endpoint, e.g. https://formspree.io/f/xxxxxxxx
const FORMSPREE_ENDPOINT = '';
const CONTACT_EMAIL = 'contact@cleanswapshop.com';
const PLACEHOLDER_KEYS = new Set(['', 'YOUR_ACCESS_KEY_HERE', 'your_access_key_here']);

function isWeb3FormsKey(key) {
  return typeof key === 'string' && /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(key.trim());
}

function resolveWeb3Key(form) {
  const fromConst = (WEB3FORMS_ACCESS_KEY || '').trim();
  if (isWeb3FormsKey(fromConst)) return fromConst;
  const field = form.querySelector('input[name="access_key"]');
  const fromField = (field?.value || '').trim();
  if (isWeb3FormsKey(fromField) && !PLACEHOLDER_KEYS.has(fromField)) return fromField;
  return '';
}

function openMailtoFallback(data) {
  const topic = data.topic || 'General';
  const subject = encodeURIComponent(`[Clean Swap Shop] ${topic}`);
  const body = encodeURIComponent(
    `Name: ${data.name}\nEmail: ${data.email}\nTopic: ${topic}\n\n${data.message}`
  );
  window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
}

const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = contactForm.querySelector('[name="name"]')?.value?.trim() || '';
    const email = contactForm.querySelector('[name="email"]')?.value?.trim() || '';
    const topic = contactForm.querySelector('[name="topic"]')?.value?.trim() || '';
    const message = contactForm.querySelector('[name="message"]')?.value?.trim() || '';
    if (!name || !email || !message) {
      showToast('Please fill in name, email, and message.');
      return;
    }

    const btn = contactForm.querySelector('[type="submit"]');
    const setBusy = (busy) => {
      if (!btn) return;
      btn.disabled = busy;
      btn.textContent = busy ? 'Sending…' : 'Send Message 🌿';
    };

    const w3Subject = contactForm.querySelector('#w3-subject');
    if (w3Subject) {
      w3Subject.value = topic
        ? `Clean Swap Shop: ${topic}`
        : 'New message from Clean Swap Shop';
    }

    const accessKey = resolveWeb3Key(contactForm);
    const formspree = (FORMSPREE_ENDPOINT || '').trim();

    // Prefer Web3Forms when a real key is present
    if (accessKey) {
      setBusy(true);
      try {
        const res = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({
            access_key: accessKey,
            name,
            email,
            topic,
            message,
            subject: w3Subject?.value || 'New message from Clean Swap Shop',
            from_name: 'Clean Swap Shop Contact',
          }),
        });
        const data = await res.json().catch(() => ({}));
        if (res.ok && data.success) {
          showToast("✅ Message sent — we'll reply soon.");
          contactForm.reset();
        } else {
          showToast('Send failed — opening email instead.');
          openMailtoFallback({ name, email, topic, message });
        }
      } catch (err) {
        showToast('Network error — opening email instead.');
        openMailtoFallback({ name, email, topic, message });
      } finally {
        setBusy(false);
      }
      return;
    }

    // Formspree if endpoint configured
    if (formspree.startsWith('https://formspree.io/')) {
      setBusy(true);
      try {
        const res = await fetch(formspree, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({ name, email, topic, message, _subject: `Clean Swap Shop: ${topic || 'Contact'}` }),
        });
        if (res.ok) {
          showToast("✅ Message sent — we'll reply soon.");
          contactForm.reset();
        } else {
          showToast('Send failed — opening email instead.');
          openMailtoFallback({ name, email, topic, message });
        }
      } catch (err) {
        showToast('Network error — opening email instead.');
        openMailtoFallback({ name, email, topic, message });
      } finally {
        setBusy(false);
      }
      return;
    }

    // No live endpoint yet — honest mailto fallback (works without API keys)
    showToast('Opening your email app to contact@cleanswapshop.com…');
    openMailtoFallback({ name, email, topic, message });
  });
}

// Scroll reveal
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll('.swap-card, .cat-card, .value-card').forEach((el) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(16px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});
