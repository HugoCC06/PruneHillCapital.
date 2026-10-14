/* ── FORM DELIVERY ──
   GitHub Pages only serves static files, so both forms post to FormSubmit
   (https://formsubmit.co), which emails each submission (CVs as attachments)
   and redirects back here. FORM_ID can be the inbox address or, once the form
   is activated, the random alias FormSubmit provides (keeps the address private). */
const FORM_ID = 'hugochristie06@gmail.com';
const ACTION = 'https://formsubmit.co/' + FORM_ID;
const CV_MAX_BYTES = 5 * 1024 * 1024;
const CV_TYPES = /\.(pdf|docx?)$/i;

function prepareForm(form) {
  form.action = ACTION;
  // Send FormSubmit back to this page, flagged so we can show the thank-you state.
  const next = form.querySelector('input[name="_next"]');
  next.value = location.origin + location.pathname + '?sent=' + next.dataset.next;
}

function validateCv() {
  const el = document.getElementById('af-cv');
  const er = document.getElementById('err-cv');
  const file = el.files[0];
  const ok = file && CV_TYPES.test(file.name) && file.size <= CV_MAX_BYTES;
  el.classList.toggle('error', !ok);
  er.classList.toggle('show', !ok);
  el.addEventListener('change', () => { el.classList.remove('error'); er.classList.remove('show'); }, { once: true });
  return ok;
}

function lockButton(id, label) {
  const btn = document.getElementById(id);
  btn.disabled = true;
  btn.textContent = label;
}

function submitApply(e) {
  const fieldsOk = validateApply();
  const cvOk = validateCv();
  if (!fieldsOk || !cvOk) { e.preventDefault(); return false; }
  const subject = document.querySelector('#apply-form input[name="_subject"]');
  subject.value = 'New Application: ' + document.getElementById('af-fname').value.trim() + ' '
    + document.getElementById('af-lname').value.trim() + ' (Equity Analyst / Portfolio Manager)';
  lockButton('af-submit', 'Submitting…');
  return true;
}

function submitContact(e) {
  if (!validateContact()) { e.preventDefault(); return false; }
  const subject = document.querySelector('#contact-form input[name="_subject"]');
  subject.value = 'Website Enquiry: ' + document.getElementById('cf-fname').value.trim() + ' '
    + document.getElementById('cf-lname').value.trim() + ' (' + document.getElementById('cf-type').value + ')';
  lockButton('cf-submit', 'Sending…');
  return true;
}

function showSent(kind) {
  if (kind === 'apply') {
    showPage('programme');
    document.getElementById('apply-form').style.display = 'none';
    document.getElementById('apply-ok').style.display = 'block';
    document.getElementById('what-next').style.display = 'block';
    setTimeout(() => document.getElementById('apply-ok').scrollIntoView({ block: 'center' }), 400);
  } else if (kind === 'contact') {
    showPage('contact');
    document.getElementById('contact-form').style.display = 'none';
    document.getElementById('contact-ok').style.display = 'block';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  prepareForm(document.getElementById('apply-form'));
  prepareForm(document.getElementById('contact-form'));
  const sent = new URLSearchParams(location.search).get('sent');
  if (sent) {
    showSent(sent);
    history.replaceState(null, '', location.pathname);
  }
});

// Re-enable buttons if the visitor comes back via the browser's Back button.
window.addEventListener('pageshow', () => {
  [['af-submit', 'Submit Application'], ['cf-submit', 'Send Message']].forEach(([id, label]) => {
    const btn = document.getElementById(id);
    btn.disabled = false;
    btn.textContent = label;
  });
});
