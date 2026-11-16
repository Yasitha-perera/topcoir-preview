/* TopCoir — small UI behaviours */
(function () {
  // Mobile nav toggle
  var toggle = document.getElementById('navToggle');
  var links  = document.getElementById('navLinks');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
    });
  }

  // Product range filter chips (products page)
  var chipRow = document.querySelector('[data-filter-row]');
  if (chipRow) {
    var chips = chipRow.querySelectorAll('.chip');
    var ranges = document.querySelectorAll('[data-range]');
    chips.forEach(function (chip) {
      chip.addEventListener('click', function () {
        chips.forEach(function (c) { c.classList.remove('active'); });
        chip.classList.add('active');
        var target = chip.getAttribute('data-target');
        ranges.forEach(function (r) {
          r.style.display = (target === 'all' || r.getAttribute('data-range') === target) ? '' : 'none';
        });
      });
    });
  }

  // Blog category chips (visual toggle only)
  var blogChips = document.querySelectorAll('[data-blog-filter] .chip');
  if (blogChips.length) {
    blogChips.forEach(function (chip) {
      chip.addEventListener('click', function () {
        blogChips.forEach(function (c) { c.classList.remove('active'); });
        chip.classList.add('active');
      });
    });
  }
})();

/* Cookie consent (essential-only notice) */
(function () {
  try {
    var bar = document.getElementById('cookieBar');
    if (!bar) return;
    if (!localStorage.getItem('tc_cookie_ok')) { bar.hidden = false; }
    var ok = document.getElementById('cookieOk');
    if (ok) ok.addEventListener('click', function () {
      try { localStorage.setItem('tc_cookie_ok', '1'); } catch (e) {}
      bar.hidden = true;
    });
  } catch (e) {}
})();
