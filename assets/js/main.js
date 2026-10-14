/* =========================================================
   Prune Hill Capital: site behaviour
   ========================================================= */
(function () {
  "use strict";
  var CFG = window.PHC_CONFIG || {};
  var root = document.documentElement;
  root.classList.add("js");

  /* ---------- Theme ---------- */
  function setTheme(t) {
    root.setAttribute("data-theme", t);
    try { localStorage.setItem("phc-theme", t); } catch (e) {}
    var btn = document.querySelector(".theme-btn");
    if (btn) btn.setAttribute("aria-label", t === "dark" ? "Switch to light mode" : "Switch to dark mode");
  }
  document.addEventListener("click", function (e) {
    if (e.target.closest(".theme-btn")) {
      setTheme(root.getAttribute("data-theme") === "dark" ? "light" : "dark");
    }
  });

  /* ---------- Mobile menu ---------- */
  var menuBtn = document.querySelector(".menu-btn");
  var navLinks = document.querySelector(".nav-links");
  if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", function () {
      var open = navLinks.classList.toggle("open");
      menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
    });
    navLinks.addEventListener("click", function (e) {
      if (e.target.closest("a")) { navLinks.classList.remove("open"); menuBtn.setAttribute("aria-expanded", "false"); }
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") { navLinks.classList.remove("open"); menuBtn.setAttribute("aria-expanded", "false"); }
    });
  }

  /* ---------- Header shadow + back to top ---------- */
  var header = document.querySelector(".site-header");
  var backTop = document.querySelector(".back-top");
  function onScroll() {
    var y = window.scrollY || 0;
    if (header) header.classList.toggle("scrolled", y > 8);
    if (backTop) backTop.classList.toggle("show", y > 600);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  if (backTop) backTop.addEventListener("click", function () { window.scrollTo({ top: 0, behavior: "smooth" }); });

  /* ---------- Reveal on scroll (content stays visible without JS) ---------- */
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if ("IntersectionObserver" in window && !reduce) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.remove("pending"); io.unobserve(en.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px" });
    document.querySelectorAll(".reveal").forEach(function (el) {
      var r = el.getBoundingClientRect();
      if (r.top > window.innerHeight) { el.classList.add("pending"); io.observe(el); }
    });
  }

  /* ---------- Footer year + config-driven text ---------- */
  document.querySelectorAll("[data-year]").forEach(function (el) { el.textContent = new Date().getFullYear(); });
  document.querySelectorAll("[data-linkedin]").forEach(function (el) { if (CFG.linkedin) el.href = CFG.linkedin; });
  document.querySelectorAll("[data-recruit-label]").forEach(function (el) { if (CFG.recruitmentLabel) el.textContent = CFG.recruitmentLabel; });
  document.querySelectorAll("[data-recruit-status]").forEach(function (el) {
    if (CFG.recruitmentOpen === false) { el.classList.remove("pill-ok"); el.classList.add("pill-warn"); el.textContent = "Applications closed"; }
  });
  document.querySelectorAll("[data-email]").forEach(function (el) {
    if (CFG.contactEmail) {
      el.hidden = false;
      var a = el.querySelector("a");
      if (a) { a.href = "mailto:" + CFG.contactEmail; a.textContent = CFG.contactEmail; }
    } else { el.hidden = true; }
  });

  /* ---------- Org chart: centre the scroll position ---------- */
  document.querySelectorAll(".org-scroll").forEach(function (sc) {
    var hint = sc.parentElement.querySelector(".scroll-hint");
    function center() {
      var overflows = sc.scrollWidth > sc.clientWidth + 1;
      if (hint) hint.classList.toggle("show", overflows);
      if (overflows) sc.scrollLeft = (sc.scrollWidth - sc.clientWidth) / 2;
    }
    if (document.readyState === "complete") center(); else window.addEventListener("load", center);
    window.addEventListener("resize", center);
  });

  /* ---------- Table of contents highlighting ---------- */
  var tocLinks = Array.prototype.slice.call(document.querySelectorAll(".toc a[href^='#']"));
  if (tocLinks.length && "IntersectionObserver" in window) {
    var map = {};
    tocLinks.forEach(function (a) { map[a.getAttribute("href").slice(1)] = a; });
    var tocIO = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          tocLinks.forEach(function (a) { a.classList.remove("active"); });
          var link = map[en.target.id];
          if (link) link.classList.add("active");
        }
      });
    }, { rootMargin: "-20% 0px -70% 0px" });
    Object.keys(map).forEach(function (id) { var s = document.getElementById(id); if (s) tocIO.observe(s); });
  }

  /* ---------- Tabs ---------- */
  document.querySelectorAll("[data-tabs]").forEach(function (group) {
    var tabs = group.querySelectorAll("[role='tab']");
    tabs.forEach(function (tab) {
      tab.addEventListener("click", function () {
        tabs.forEach(function (t) {
          var on = t === tab;
          t.setAttribute("aria-selected", on ? "true" : "false");
          var panel = document.getElementById(t.getAttribute("aria-controls"));
          if (panel) panel.hidden = !on;
        });
      });
    });
  });

  /* ---------- Range bars (static targets) ---------- */
  document.querySelectorAll(".range-track[data-min]").forEach(function (t) {
    var min = +t.dataset.min, max = +t.dataset.max, scale = +(t.dataset.scale || 100);
    var fill = t.querySelector(".range-fill");
    if (fill) { fill.style.left = (min / scale * 100) + "%"; fill.style.width = ((max - min) / scale * 100) + "%"; }
  });

  /* =========================================================
     Mandate compliance checker
     ========================================================= */
  var checker = document.getElementById("checker");
  if (checker) {
    var out = document.getElementById("checker-results");
    var EXCLUDED = {
      fossil: "Fossil fuels (exploration, production, refining, storage or transport of oil, gas or coal)",
      arms: "Armaments",
      gambling: "Gambling",
      adult: "Adult entertainment",
      tobacco: "Tobacco"
    };
    function val(id) { var el = document.getElementById(id); return el ? el.value : ""; }
    function num(id) { var v = parseFloat(val(id)); return isNaN(v) ? null : v; }
    function checked(id) { var el = document.getElementById(id); return el ? el.checked : false; }

    function run() {
      var res = [];
      var inst = val("ck-instrument"), market = val("ck-market"), sector = val("ck-sector");
      var pos = num("ck-position"), sec = num("ck-sector-exp"), cash = num("ck-cash");

      // Instrument (s3)
      var banned = { derivative: "Derivatives (options, futures, swaps, CFDs, spread bets) are prohibited.",
        margin: "Leverage or margin is prohibited. No borrowing to invest.",
        crypto: "Cryptoassets and unregulated digital tokens are prohibited.",
        unlisted: "Unlisted or private securities, crowdfunding and P2P lending are prohibited." };
      if (banned[inst]) res.push(["bad", "Instrument", banned[inst], "s3.2"]);
      else res.push(["ok", "Instrument", inst === "cash" ? "Cash and cash equivalents are permitted." : inst === "etf" ? "ETFs and index funds are permitted. ESG-screened funds are preferred." : "Listed equities on recognised, regulated developed-market exchanges are permitted.", "s3.1"]);

      // Market (s4.2)
      if (market === "em") {
        if (inst === "etf") res.push(["warn", "Emerging markets", "Allowed only through ESG-screened EM ETFs, within the 0-10% range. Confirm the fund is ESG-screened.", "s4.2"]);
        else if (inst !== "cash") res.push(["bad", "Emerging markets", "Emerging market exposure is limited to ESG-screened EM ETFs only. Single EM stocks are outside the mandate.", "s4.2"]);
      } else if (inst !== "cash") {
        res.push(["ok", "Market", "Developed-market exposure is within the mandate's geographic framework.", "s4.2"]);
      }

      // Sector exclusions (s3.2)
      if (EXCLUDED[sector]) res.push(["bad", "ESG exclusion", EXCLUDED[sector] + " is an excluded sector.", "s3.2"]);
      else if (inst !== "cash") res.push(["ok", "ESG exclusion", "Sector is not on the exclusion list.", "s3.2"]);
      if (checked("ck-norms")) res.push(["bad", "International norms", "Companies in serious and ongoing breach of international norms on human rights or environmental standards are excluded.", "s3.2"]);

      // Concentration (s4.4)
      if (pos !== null) {
        if (pos > 10) res.push(["bad", "Single position", "Position would be " + pos + "% of the portfolio. The limit is 10%.", "s4.4"]);
        else if (pos > 8) res.push(["warn", "Single position", "Position would be " + pos + "%. Within the 10% limit but close to it.", "s4.4"]);
        else res.push(["ok", "Single position", "Position of " + pos + "% is within the 10% limit.", "s4.4"]);
      }
      if (sec !== null) {
        if (sec > 40) res.push(["bad", "Sector exposure", "Sector exposure would be " + sec + "%. The limit is 40%.", "s4.4"]);
        else if (sec > 35) res.push(["warn", "Sector exposure", "Sector exposure of " + sec + "% is within the 40% limit but close to it.", "s4.4"]);
        else res.push(["ok", "Sector exposure", "Sector exposure of " + sec + "% is within the 40% limit.", "s4.4"]);
      }
      if (cash !== null) {
        if (cash < 5) res.push(["bad", "Cash buffer", "Cash would fall to " + cash + "%. The Fund normally holds at least 5% in cash.", "s4.4"]);
        else if (cash > 30) res.push(["warn", "Cash buffer", "Cash of " + cash + "% is above 30%. Extended periods at this level need committee approval.", "s4.4"]);
        else if (cash > 15) res.push(["warn", "Cash buffer", "Cash of " + cash + "% is above the 5-15% target range.", "s4.1"]);
        else res.push(["ok", "Cash buffer", "Cash of " + cash + "% is within the 5-15% target range.", "s4.1"]);
      }

      // Liquidity and horizon (s9)
      if (!checked("ck-liquid")) res.push(["bad", "Liquidity", "The Fund invests only in instruments that are daily-liquid under normal market conditions.", "s9"]);
      else res.push(["ok", "Liquidity", "Instrument is daily-liquid.", "s9"]);
      if (val("ck-horizon") === "short") res.push(["bad", "Time horizon", "High-frequency or purely speculative trading is not consistent with the mandate. Typical holding period is months to years.", "s9"]);
      else res.push(["ok", "Time horizon", "Long-term holding period is consistent with the mandate.", "s9"]);

      var bad = res.filter(function (r) { return r[0] === "bad"; }).length;
      var warn = res.filter(function (r) { return r[0] === "warn"; }).length;
      var vClass = bad ? "bad" : warn ? "warn" : "ok";
      var vText = bad ? bad + " breach" + (bad > 1 ? "es" : "") + " found. This trade cannot proceed as proposed."
        : warn ? "Within the mandate, with " + warn + " point" + (warn > 1 ? "s" : "") + " to address in the pitch."
        : "Consistent with the mandate. Ready to pitch to the Investment Committee.";

      var icons = { ok: "&#10003;", warn: "!", bad: "&#10005;" };
      var html = '<div class="verdict ' + vClass + '" role="status"><span aria-hidden="true">' + icons[vClass] + "</span>" + vText + "</div>";
      html += '<div class="results">';
      res.forEach(function (r) {
        html += '<div class="result ' + r[0] + '"><span class="pill pill-' + r[0] + '">' + (r[0] === "ok" ? "Pass" : r[0] === "warn" ? "Check" : "Breach") + '</span><div><strong>' + r[1] + '</strong> <span class="ref">Mandate ' + r[3] + "</span><p>" + r[2] + "</p></div></div>";
      });
      html += "</div>";
      html += '<p class="note">This tool is a guide only. All trades still go through the Investment Committee vote and the Risk &amp; Compliance Officer\'s pre-execution check.</p>';
      out.innerHTML = html;
    }
    checker.addEventListener("input", run);
    checker.addEventListener("change", run);
    checker.addEventListener("submit", function (e) { e.preventDefault(); run(); });
    run();
  }

  /* =========================================================
     Allocation planner
     ========================================================= */
  var planner = document.getElementById("planner");
  if (planner) {
    function group(name) {
      var rows = planner.querySelectorAll("[data-group='" + name + "']");
      var total = 0, inRange = 0;
      rows.forEach(function (row) {
        var input = row.querySelector("input[type='range']");
        var outEl = row.querySelector("output");
        var marker = row.querySelector(".range-marker");
        var pill = row.querySelector(".pill");
        var v = +input.value, min = +row.dataset.min, max = +row.dataset.max;
        total += v;
        outEl.textContent = v + "%";
        if (marker) marker.style.left = v + "%";
        var ok = v >= min && v <= max;
        if (ok) inRange++;
        if (pill) { pill.className = "pill " + (ok ? "pill-ok" : "pill-bad"); pill.textContent = ok ? "In range" : (v < min ? "Below range" : "Above range"); }
      });
      var tot = planner.querySelector("[data-total='" + name + "']");
      if (tot) {
        tot.textContent = total + "%";
        tot.className = "num " + (total === 100 ? "" : "text-bad");
        tot.style.color = total === 100 ? "var(--ok)" : "var(--bad)";
      }
      return { total: total, ok: inRange === rows.length };
    }
    function runPlanner() {
      var a = group("asset"), g = group("geo");
      var s = document.getElementById("planner-summary");
      var msgs = [];
      if (a.total !== 100) msgs.push("Asset class weights add up to " + a.total + "%, not 100%.");
      if (g.total !== 100) msgs.push("Geographic weights add up to " + g.total + "%, not 100%.");
      if (!a.ok) msgs.push("At least one asset class is outside its target range (s4.1).");
      if (!g.ok) msgs.push("At least one region is outside its indicative range (s4.2).");
      if (!msgs.length) s.innerHTML = '<div class="verdict ok"><span aria-hidden="true">&#10003;</span>This allocation sits inside every target range in the mandate.</div>';
      else s.innerHTML = '<div class="verdict ' + ((a.total !== 100 || g.total !== 100) ? "bad" : "warn") + '"><span aria-hidden="true">!</span>' + msgs.length + ' issue' + (msgs.length > 1 ? "s" : "") + ' to review</div><ul class="note" style="margin:8px 0 0;padding-left:18px">' + msgs.map(function (m) { return "<li>" + m + "</li>"; }).join("") + "</ul>";
    }
    planner.addEventListener("input", runPlanner);
    var resetBtn = document.getElementById("planner-reset");
    if (resetBtn) resetBtn.addEventListener("click", function () {
      planner.querySelectorAll("input[type='range']").forEach(function (i) { i.value = i.defaultValue; });
      runPlanner();
    });
    runPlanner();
  }

  /* =========================================================
     Forms
     ========================================================= */
  function validateField(field) {
    var input = field.querySelector("input, select, textarea");
    if (!input) return true;
    var ok = input.checkValidity();
    if (ok && input.type === "file" && input.files && input.files[0]) {
      var f = input.files[0];
      var max = +(input.dataset.maxMb || 5) * 1024 * 1024;
      if (f.size > max) { ok = false; var er = field.querySelector(".err"); if (er) er.textContent = "File must be under " + (input.dataset.maxMb || 5) + "MB."; }
    }
    if (ok && input.dataset.domain && input.value) {
      var domains = input.dataset.domain.split(",");
      ok = domains.some(function (d) { return input.value.toLowerCase().trim().endsWith(d.trim()); });
    }
    field.classList.toggle("invalid", !ok);
    return ok;
  }

  function setHidden(form, name, value) {
    var input = form.querySelector("input[type='hidden'][name='" + name + "']");
    if (!input) { input = document.createElement("input"); input.type = "hidden"; input.name = name; form.appendChild(input); }
    input.value = value;
  }

  function subjectFor(form, kind) {
    var name = (form.querySelector("[name='name']") || {}).value || "";
    if (kind === "apply") {
      var role = (form.querySelector("[name='Role']") || {}).value || "";
      return "New application: " + name.trim() + (role ? " (" + role + ")" : "");
    }
    var topic = form.querySelector("[name='Enquiry type']");
    var label = topic && topic.selectedIndex > 0 ? topic.options[topic.selectedIndex].text : "";
    return "Website enquiry: " + name.trim() + (label ? " (" + label + ")" : "");
  }

  function resetCounters(form) {
    form.querySelectorAll(".counter").forEach(function (c) { c.textContent = "0 / " + c.parentElement.querySelector("textarea").maxLength; });
  }

  function showSent(form, kind) {
    var status = form.querySelector(".form-status");
    status.hidden = false; status.className = "form-status ok";
    status.textContent = kind === "apply"
      ? "Application received. We'll be in touch about next steps."
      : "Message sent. We aim to reply within 2-3 business days.";
  }

  document.querySelectorAll("form[data-form]").forEach(function (form) {
    var kind = form.getAttribute("data-form");
    var endpoint = kind === "apply" ? CFG.applicationFormEndpoint : CFG.contactFormEndpoint;
    var status = form.querySelector(".form-status");

    form.querySelectorAll(".field").forEach(function (field) {
      var input = field.querySelector("input, select, textarea");
      if (!input) return;
      input.addEventListener("blur", function () { if (input.value) validateField(field); });
      input.addEventListener("input", function () { if (field.classList.contains("invalid")) validateField(field); });
    });

    form.querySelectorAll("textarea[maxlength]").forEach(function (ta) {
      var c = ta.parentElement.querySelector(".counter");
      function upd() { if (c) c.textContent = ta.value.length + " / " + ta.maxLength; }
      ta.addEventListener("input", upd); upd();
    });

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var fields = form.querySelectorAll(".field");
      var allOk = true, firstBad = null;
      fields.forEach(function (f) { if (!validateField(f)) { allOk = false; if (!firstBad) firstBad = f; } });
      if (!allOk) {
        status.hidden = false; status.className = "form-status bad";
        status.textContent = "Please fix the highlighted fields.";
        var fi = firstBad.querySelector("input, select, textarea"); if (fi) fi.focus();
        return;
      }
      if (!endpoint) {
        status.hidden = false; status.className = "form-status info";
        status.textContent = CFG.contactEmail
          ? "Online submission is not connected yet. Please email " + CFG.contactEmail + " with these details."
          : "Online submission is not connected yet. Please message us on LinkedIn in the meantime.";
        return;
      }
      var btn = form.querySelector("button[type='submit']");
      if (btn) { btn.disabled = true; btn.dataset.label = btn.textContent; btn.textContent = "Sending..."; }

      if (/formsubmit\.co/.test(endpoint)) {
        // FormSubmit: a normal POST (carries the CV attachment), then it
        // redirects back here with ?sent=<kind> to show the confirmation.
        setHidden(form, "_subject", subjectFor(form, kind));
        setHidden(form, "_template", "table");
        setHidden(form, "_captcha", "false");
        setHidden(form, "_next", location.origin + location.pathname + "?sent=" + kind + "#" + form.id);
        form.action = endpoint;
        form.method = "POST";
        HTMLFormElement.prototype.submit.call(form);
        return;
      }

      fetch(endpoint, { method: "POST", body: new FormData(form), headers: { Accept: "application/json" } })
        .then(function (r) {
          if (!r.ok) throw new Error("bad status");
          form.reset();
          resetCounters(form);
          showSent(form, kind);
        })
        .catch(function () {
          status.hidden = false; status.className = "form-status bad";
          status.textContent = "Your message didn't send. Check your connection and try again.";
        })
        .then(function () { if (btn) { btn.disabled = false; btn.textContent = btn.dataset.label; } });
    });

    // Returning from FormSubmit's redirect, or via the Back button.
    if (new URLSearchParams(location.search).get("sent") === kind) {
      showSent(form, kind);
      history.replaceState(null, "", location.pathname + location.hash);
    }
    window.addEventListener("pageshow", function () {
      var btn = form.querySelector("button[type='submit']");
      if (btn && btn.disabled) { btn.disabled = false; btn.textContent = btn.dataset.label; }
    });
  });
})();

/* Horizontal FAQ arrows */
(function () {
  var track = document.querySelector(".faq-track");
  if (!track) return;
  function step(dir) {
    var card = track.querySelector(".faq-card");
    var w = card ? card.getBoundingClientRect().width + 20 : 300;
    track.scrollBy({ left: dir * w, behavior: "smooth" });
  }
  var prev = document.querySelector("[data-faq-prev]"), next = document.querySelector("[data-faq-next]");
  function update() {
    var max = track.scrollWidth - track.clientWidth - 2;
    if (prev) prev.disabled = track.scrollLeft <= 2;
    if (next) next.disabled = track.scrollLeft >= max;
  }
  if (prev) prev.addEventListener("click", function () { step(-1); });
  if (next) next.addEventListener("click", function () { step(1); });
  track.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
  update();
})();
