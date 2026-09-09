/**
 * Clean Swap Shop — Quiz Lite
 * Copy source: content/quiz-lite-copy.md
 * Content bot: edit QUIZ.copy / questions / results to refresh wording.
 * Amazon tag must stay cleanswapsh0a-20.
 */
(function () {
  const TAG = 'cleanswapsh0a-20';

  const QUIZ = {
    copy: {
      progress: 'Question {n} of {total}',
      next: 'Next →',
      back: '← Back',
      seeResults: 'See my swaps →',
      restart: 'Retake quiz',
      shopLabel: 'Shop the Swap →',
      guideLabel: 'Read the guide →',
      disclosure:
        'As an Amazon Associate, The Clean Swap Shop earns from qualifying purchases. Tag: cleanswapsh0a-20.',
      newsletterSoft:
        'Want one calm swap a week? Come sit with us — a warm note with ingredient clarity and tagged links when you’re ready.',
    },
    /* Each option.scores is { K, S, B, F } point deltas */
    questions: [
      {
        id: 'q1-sink',
        text: 'Under the kitchen sink, what’s the loudest bottle?',
        options: [
          {
            label: 'Bleach spray or “disinfecting” jug I reach for most days',
            scores: { K: 2 },
            flags: ['kitchen'],
          },
          {
            label: 'Neon all-purpose cleaner that smells like a perfume counter',
            scores: { K: 2, F: 1 },
            flags: ['kitchen', 'air'],
          },
          {
            label: 'Mostly dish soap + trash bags; bleach only for rare jobs',
            scores: { K: 1, S: 1 },
            flags: [],
          },
          {
            label: 'I’ve already swapped a lot of cleaning; I’m more worried about air / body products',
            scores: { F: 2, S: 1 },
            flags: ['air'],
          },
        ],
      },
      {
        id: 'q2-laundry',
        text: 'How does your laundry leave your skin and nose?',
        options: [
          {
            label: 'Pods or heavy detergent — clothes smell “clean” for days',
            scores: { S: 2, K: 1 },
            flags: [],
          },
          {
            label: 'Someone in the house gets itchy, red, or congested after wash day',
            scores: { S: 3 },
            flags: ['sensitive'],
          },
          {
            label: 'Fragrance-free-ish already, but I want a simpler powder',
            scores: { S: 2 },
            flags: ['sensitive'],
          },
          {
            label: 'Laundry’s fine; my stress is baby lotion / diapers / “gentle” bath stuff',
            scores: { B: 3 },
            flags: ['baby'],
          },
        ],
      },
      {
        id: 'q3-air',
        text: 'What’s floating in your indoor air?',
        options: [
          {
            label: 'Plug-ins, sprays, or “odor eliminators” on autopilot',
            scores: { F: 3 },
            flags: ['air'],
          },
          {
            label: 'Scented trash bags + candle fog in the kitchen',
            scores: { F: 2, K: 1 },
            flags: ['air'],
          },
          {
            label: 'Mostly open windows; occasional essential oil or nothing',
            scores: { F: 1 },
            flags: [],
          },
          {
            label: 'Nursery / kids’ rooms get the “baby fresh” sprays',
            scores: { B: 2, F: 1 },
            flags: ['baby', 'air'],
          },
        ],
      },
      {
        id: 'q4-pans',
        text: 'Cookware & high-heat habits',
        options: [
          {
            label: 'Scratched nonstick / Teflon still does breakfast duty',
            scores: { K: 2 },
            flags: ['kitchen'],
          },
          {
            label: 'Mix of pans; ready to retire the flaky one',
            scores: { K: 2 },
            flags: ['kitchen'],
          },
          {
            label: 'Cast iron or stainless already — not my focus',
            scores: {},
            flags: [],
          },
          {
            label: 'I cook less; personal care bottles worry me more',
            scores: { S: 2, B: 1 },
            flags: ['sensitive'],
          },
        ],
      },
      {
        id: 'q5-body',
        text: 'Body & baby shelf — what feels off?',
        options: [
          {
            label: 'Antiperspirant with aluminum / “clinical” deodorant',
            scores: { S: 2 },
            flags: ['sensitive'],
          },
          {
            label: 'Sulfate shampoo / “fragrance” hair aisle staples',
            scores: { S: 2 },
            flags: ['sensitive'],
          },
          {
            label: 'Chemical sunscreen (oxybenzone-type) for the whole family',
            scores: { S: 1, B: 1, F: 1 },
            flags: [],
          },
          {
            label: 'Baby lotion, wash, or “gentle” nursery products I’m second-guessing',
            scores: { B: 3 },
            flags: ['baby'],
          },
        ],
      },
    ],
    results: {
      K: {
        id: 'kitchen',
        title: 'Kitchen Deep Cleaner',
        eyebrow: 'Your under-sink profile leans “sharp clean”',
        emoji: '🍋',
        blurb:
          'You’re the person who actually uses what’s under the sink — bleach, all-purpose sprays, maybe a tired nonstick pan that still gets eggs. That’s not failure; it’s a clear starting map. Trade the chlorine burn and forever-chemical coatings for a plant-based concentrate and cast iron that lasts generations. One dilution bottle. One skillet. Cream counters, less fog.',
        swaps: [
          {
            name: 'Bleach / all-purpose → Branch Basics Concentrate',
            note: 'Plant-based concentrate you dilute for everyday wipe-downs.',
            href: 'https://www.amazon.com/s?k=branch+basics+concentrate&tag=' + TAG,
            guide: 'guides/bleach-vs-branch-basics.html',
          },
          {
            name: 'Teflon nonstick → Lodge cast iron',
            note: 'Naturally slick heirloom pan without PFAS coatings.',
            href: 'https://www.amazon.com/dp/B00006JSUA/?tag=' + TAG,
            guide: 'guides/nonstick-vs-cast-iron.html',
          },
          {
            name: 'Pods / heavy detergent → Molly’s Suds',
            note: 'If detergent lives by the sink — a cleaner laundry powder.',
            href: 'https://www.amazon.com/dp/B06WCZRHQR/?tag=' + TAG,
            guide: 'guides/laundry-detergent-mollys-suds.html',
          },
        ],
        footerCta: { label: 'Browse more kitchen pairs →', href: 'swaps.html?cat=kitchen' },
      },
      S: {
        id: 'sensitive',
        title: 'Sensitive Skin Household',
        eyebrow: 'Your clean routine is wearing on skin and scent tolerance',
        emoji: '🌸',
        blurb:
          'Itchy after laundry, fragrance that follows you out the door, shampoo that strips, deodorant that feels like armor — your answers point to products that touch skin all day. Soften the load with cleaner detergent, aluminum-free deodorant, and a botanical wash. Same rituals. Kinder labels.',
        swaps: [
          {
            name: 'Conventional detergent → Molly’s Suds',
            note: 'Gentler laundry without the perfume cloud in your clothes.',
            href: 'https://www.amazon.com/dp/B06WCZRHQR/?tag=' + TAG,
            guide: 'guides/laundry-detergent-mollys-suds.html',
          },
          {
            name: 'Aluminum antiperspirant → Native Deodorant',
            note: 'Aluminum-free underarm care with a straightforward list.',
            href: 'https://www.amazon.com/dp/B07GB1KJN3/?tag=' + TAG,
            guide: 'guides/deodorant-native-vs-conventional.html',
          },
          {
            name: 'Sulfate shampoo → Innersense',
            note: 'Botanical clean wash instead of the fragrance aisle default.',
            href: 'https://www.amazon.com/dp/B074Q2CNMY/?tag=' + TAG,
            guide: 'guides/shampoo-innersense-vs-conventional.html',
          },
        ],
        footerCta: { label: 'Personal care + laundry swaps →', href: 'swaps.html?cat=beauty' },
      },
      B: {
        id: 'baby',
        title: 'Baby-Safe Starter',
        eyebrow: 'Little skin, big labels — start gentle',
        emoji: '🍼',
        blurb:
          'Nursery shelves love the word “gentle.” Your answers say you’re ready to look past the pastel packaging — lotion, wash, sun time, and the air around the crib. Lean organic botanicals, mineral SPF, and fragrance that isn’t a chemical cloud. Swap slow; protect the tiniest lungs and cheeks first.',
        swaps: [
          {
            name: 'Conventional baby lotion/wash → Earth Mama Organics',
            note: 'Organic botanical path for little skin.',
            href: 'https://www.amazon.com/dp/B01ANJKCLO/?tag=' + TAG,
            guide: 'swaps.html?cat=baby',
            guideLabel: 'Browse baby swaps →',
          },
          {
            name: 'Chemical sunscreen → Badger Mineral SPF',
            note: 'Mineral zinc that sits on skin — family-friendly park days.',
            href: 'https://www.amazon.com/dp/B00NB411MS/?tag=' + TAG,
            guide: 'guides/sunscreen-badger-vs-chemical.html',
          },
          {
            name: '“Baby fresh” sprays → Essential oil diffuser',
            note: 'Use thoughtfully; keep out of reach. Plant oils you control.',
            href: 'https://www.amazon.com/s?k=essential+oil+diffuser&tag=' + TAG,
            guide: 'guides/air-freshener-vs-diffuser.html',
          },
        ],
        footerCta: { label: 'Baby & kids swaps →', href: 'swaps.html?cat=baby' },
      },
      F: {
        id: 'freshair',
        title: 'Fresh Air Family',
        eyebrow: 'Your “clean smell” might be the problem',
        emoji: '🪴',
        blurb:
          'Plug-ins, sprays, scented bags, perfume that never clocks out — indoor air is doing overtime. Swap masking chemicals for a simple diffuser ritual (and open a window when you can). Pair it with a gentler kitchen spray so the whole house exhales. Fresh shouldn’t sting.',
        swaps: [
          {
            name: 'Synthetic air freshener → Essential oil diffuser',
            note: 'Plant oils you control instead of aerosol fog.',
            href: 'https://www.amazon.com/s?k=essential+oil+diffuser&tag=' + TAG,
            guide: 'guides/air-freshener-vs-diffuser.html',
          },
          {
            name: 'Bleach / harsh spray → Branch Basics Concentrate',
            note: 'All-purpose dilution that doesn’t hang in the air.',
            href: 'https://www.amazon.com/s?k=branch+basics+concentrate&tag=' + TAG,
            guide: 'guides/bleach-vs-branch-basics.html',
          },
          {
            name: 'Chemical sunscreen → Badger Mineral SPF',
            note: 'Outdoor air + skin — mineral path for family park days.',
            href: 'https://www.amazon.com/dp/B00NB411MS/?tag=' + TAG,
            guide: 'guides/sunscreen-badger-vs-chemical.html',
          },
        ],
        footerCta: { label: 'Home fragrance + cleaning swaps →', href: 'swaps.html?cat=home' },
      },
    },
  };

  const ORDER = ['K', 'S', 'B', 'F'];
  const root = document.getElementById('quiz-root');
  if (!root) return;

  let step = 0;
  /** @type {Array<{scores: Object, flags: string[]}>} */
  const answers = [];

  function scoreAnswers() {
    const tallies = { K: 0, S: 0, B: 0, F: 0 };
    const flags = [];
    answers.forEach((a) => {
      if (!a) return;
      Object.keys(a.scores || {}).forEach((k) => {
        tallies[k] = (tallies[k] || 0) + (a.scores[k] || 0);
      });
      (a.flags || []).forEach((f) => flags.push(f));
    });

    let ranked = ORDER.slice().sort((a, b) => tallies[b] - tallies[a]);
    let best = ranked[0];
    let second = ranked[1];

    // Tie-breakers from content/quiz-lite-copy.md
    if (tallies[ranked[0]] === tallies[ranked[1]]) {
      const topTied = ranked.filter((k) => tallies[k] === tallies[ranked[0]]);
      if (topTied.indexOf('K') !== -1 && (flags.indexOf('kitchen') !== -1)) {
        best = 'K';
      } else if (topTied.indexOf('B') !== -1 && topTied.indexOf('S') !== -1 && flags.indexOf('baby') !== -1) {
        best = 'B';
      } else if (topTied.indexOf('F') !== -1 && topTied.indexOf('S') !== -1 && flags.indexOf('air') !== -1) {
        best = 'F';
      } else if (topTied.indexOf('S') !== -1) {
        best = 'S';
      } else {
        best = topTied[0];
      }
      ranked = [best].concat(ranked.filter((k) => k !== best));
      second = ranked[1];
    }

    return {
      key: best,
      runnerUp: tallies[best] - tallies[second] <= 1 ? second : null,
      tallies: tallies,
    };
  }

  function renderProgress() {
    const total = QUIZ.questions.length;
    const n = Math.min(step + 1, total);
    return (
      '<div class="quiz-progress" role="status">' +
      '<div class="quiz-progress-label">' +
      QUIZ.copy.progress.replace('{n}', String(n)).replace('{total}', String(total)) +
      '</div>' +
      '<div class="quiz-progress-bar" aria-hidden="true"><span style="width:' +
      (n / total) * 100 +
      '%"></span></div>' +
      '</div>'
    );
  }

  function renderQuestion() {
    const q = QUIZ.questions[step];
    const selected = answers[step];
    const opts = q.options
      .map((o, i) => {
        const id = 'q-' + q.id + '-' + i;
        const checked = selected && selected.optionIndex === i ? ' checked' : '';
        return (
          '<label class="quiz-option" for="' +
          id +
          '">' +
          '<input type="radio" name="quiz-q" id="' +
          id +
          '" value="' +
          i +
          '"' +
          checked +
          ' />' +
          '<span class="quiz-option-text">' +
          o.label +
          '</span>' +
          '</label>'
        );
      })
      .join('');

    const isLast = step === QUIZ.questions.length - 1;
    const canGo = !!selected;

    root.innerHTML =
      '<div class="quiz-card">' +
      renderProgress() +
      '<h2 class="quiz-question">' +
      q.text +
      '</h2>' +
      '<fieldset class="quiz-options" aria-label="Answer choices">' +
      '<legend class="sr-only">Choose one</legend>' +
      opts +
      '</fieldset>' +
      '<div class="quiz-actions">' +
      (step > 0
        ? '<button type="button" class="btn-secondary" data-action="back">' + QUIZ.copy.back + '</button>'
        : '<span></span>') +
      '<button type="button" class="btn-primary" data-action="next"' +
      (canGo ? '' : ' disabled') +
      '>' +
      (isLast ? QUIZ.copy.seeResults : QUIZ.copy.next) +
      '</button>' +
      '</div>' +
      '</div>';

    root.querySelectorAll('input[name="quiz-q"]').forEach((input) => {
      input.addEventListener('change', () => {
        const idx = parseInt(input.value, 10);
        const opt = q.options[idx];
        answers[step] = {
          optionIndex: idx,
          scores: opt.scores || {},
          flags: opt.flags || [],
        };
        renderQuestion();
      });
    });
    bindActions();
  }

  function renderResult() {
    const scored = scoreAnswers();
    const r = QUIZ.results[scored.key];
    const runner =
      scored.runnerUp && scored.runnerUp !== scored.key
        ? QUIZ.results[scored.runnerUp]
        : null;

    const swaps = r.swaps
      .map((s) => {
        const guideLabel = s.guideLabel || QUIZ.copy.guideLabel;
        const guideHtml = s.guide
          ? '<a class="quiz-guide-link" href="' + s.guide + '">' + guideLabel + '</a>'
          : '';
        return (
          '<article class="quiz-swap-card">' +
          '<h3>' +
          s.name +
          '</h3>' +
          '<p>' +
          s.note +
          '</p>' +
          '<div class="quiz-swap-links">' +
          '<a class="swap-btn" href="' +
          s.href +
          '" target="_blank" rel="noopener sponsored">' +
          QUIZ.copy.shopLabel +
          '</a>' +
          guideHtml +
          '</div>' +
          '</article>'
        );
      })
      .join('');

    root.innerHTML =
      '<div class="quiz-card quiz-result">' +
      '<p class="quiz-result-eyebrow">' +
      r.eyebrow +
      '</p>' +
      '<div class="quiz-result-emoji" aria-hidden="true">' +
      r.emoji +
      '</div>' +
      '<h2>' +
      r.title +
      '</h2>' +
      '<p class="quiz-result-blurb">' +
      r.blurb +
      '</p>' +
      (runner
        ? '<p class="quiz-runner">Also peek at: <strong>' + runner.title + '</strong></p>'
        : '') +
      '<div class="quiz-swap-grid">' +
      swaps +
      '</div>' +
      '<p class="quiz-disclosure">' +
      QUIZ.copy.disclosure +
      ' See our <a href="disclosure.html">Affiliate Disclosure</a>.</p>' +
      '<p class="quiz-newsletter-soft">' +
      QUIZ.copy.newsletterSoft +
      '</p>' +
      '<div class="quiz-actions quiz-actions-result">' +
      '<button type="button" class="btn-secondary" data-action="restart">' +
      QUIZ.copy.restart +
      '</button>' +
      '<a class="btn-primary" href="' +
      r.footerCta.href +
      '">' +
      r.footerCta.label +
      '</a>' +
      '<a class="btn-secondary" href="under-sink-checklist.html">Get the free checklist →</a>' +
      '</div>' +
      '</div>';

    bindActions();
  }

  function bindActions() {
    const next = root.querySelector('[data-action="next"]');
    const back = root.querySelector('[data-action="back"]');
    const restart = root.querySelector('[data-action="restart"]');
    if (next) {
      next.addEventListener('click', () => {
        if (!answers[step]) return;
        if (step >= QUIZ.questions.length - 1) {
          renderResult();
          window.scrollTo({ top: root.offsetTop - 80, behavior: 'smooth' });
        } else {
          step += 1;
          renderQuestion();
        }
      });
    }
    if (back) {
      back.addEventListener('click', () => {
        step = Math.max(0, step - 1);
        renderQuestion();
      });
    }
    if (restart) {
      restart.addEventListener('click', () => {
        step = 0;
        answers.length = 0;
        renderQuestion();
        window.scrollTo({ top: root.offsetTop - 80, behavior: 'smooth' });
      });
    }
  }

  renderQuestion();
})();
