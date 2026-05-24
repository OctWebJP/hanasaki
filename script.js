// =============================================================
// 酒処 はなさき — interactions
// =============================================================

(() => {
  // ---- mobile nav toggle ----
  const toggle = document.querySelector('.nav__toggle');
  const menu = document.querySelector('.nav__menu');
  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      const open = menu.classList.toggle('is-open');
      toggle.classList.toggle('is-open', open);
      toggle.setAttribute('aria-expanded', String(open));
    });
    menu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        menu.classList.remove('is-open');
        toggle.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // ---- scroll-reveal for content sections ----
  // Strategy: only hide elements once we KNOW JS is running and IO is available.
  // Safety: if anything fails, content remains visible (graceful degradation).
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const targetSelector = '.section__title, .story__pull, .menu__col, .drink-card, .room__panel, .info-card, .access__map, .closing__inner';
  const targets = Array.from(document.querySelectorAll(targetSelector));

  const revealAll = () => {
    targets.forEach(el => {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    });
  };

  if (!prefersReduced && 'IntersectionObserver' in window && targets.length) {
    targets.forEach(t => {
      t.style.opacity = '0';
      t.style.transform = 'translateY(28px)';
      t.style.transition = 'opacity .9s cubic-bezier(.16,1,.3,1), transform .9s cubic-bezier(.16,1,.3,1)';
    });

    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const siblings = Array.from(el.parentElement?.children || []).filter(c => targets.includes(c));
          const idx = Math.max(0, siblings.indexOf(el));
          el.style.transitionDelay = `${idx * 80}ms`;
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
          io.unobserve(el);
        }
      });
    }, { threshold: 0.01, rootMargin: '0px 0px -10% 0px' });

    targets.forEach(t => io.observe(t));

    // Safety net: if for any reason elements remain hidden after 3s
    // (e.g. headless render, focus issues), force them visible.
    setTimeout(() => {
      targets.forEach(el => {
        const rect = el.getBoundingClientRect();
        const inView = rect.top < window.innerHeight && rect.bottom > 0;
        if (inView && parseFloat(getComputedStyle(el).opacity) < 1) {
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
        }
      });
    }, 3000);
  }

  // ---- subtle parallax on hero lanterns ----
  if (!prefersReduced) {
    const lanterns = document.querySelectorAll('.hero__lantern');
    const hero = document.querySelector('.hero');
    if (hero && lanterns.length) {
      hero.addEventListener('mousemove', (e) => {
        const r = hero.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        lanterns.forEach((l, i) => {
          const k = (i + 1) * 18;
          l.style.transform = `translate(${x * k}px, ${y * k}px)`;
        });
      });
      hero.addEventListener('mouseleave', () => {
        lanterns.forEach(l => l.style.transform = '');
      });
    }
  }
})();
