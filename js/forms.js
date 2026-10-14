/* ── FORM DELIVERY ──
   GitHub Pages only serves static files, so submissions are relayed to email
   by FormSubmit (https://formsubmit.co). The first submission sends a one-time
   activation email to INBOX; nothing is delivered until that link is clicked. */
const INBOX = 'hugochristie06@gmail.com';
const ENDPOINT = 'https://formsubmit.co/ajax/' + INBOX;

function val(id) {
  const el = document.getElementById(id);
  return el ? el.value.trim() : '';
}

function showError(errId, msg) {
  const er = document.getElementById(errId);
  er.innerHTML = msg + ' Alternatively, email us directly at <a href="mailto:' + INBOX + '">' + INBOX + '</a>.';
  er.classList.add('show');
}

async function sendForm({ payload, honeypot, btnId, errId, sendingLabel, onSuccess }) {
  const btn = document.getElementById(btnId);
  const er = document.getElementById(errId);
  er.classList.remove('show');

  // Bots fill hidden fields; pretend it worked and send nothing.
  if (val(honeypot)) { onSuccess(); return; }

  const label = btn.textContent;
  btn.disabled = true;
  btn.textContent = sendingLabel;
  try {
    const res = await fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify(Object.assign({ _template: 'table', _captcha: 'false' }, payload)),
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok || String(data.success) !== 'true') throw new Error(data.message || 'Request failed');
    onSuccess();
  } catch (e) {
    console.error('Form submission failed:', e);
    showError(errId, 'Sorry, something went wrong sending this.');
  } finally {
    btn.disabled = false;
    btn.textContent = label;
  }
}

function submitApply() {
  if (!validateApply()) return;
  const name = val('af-fname') + ' ' + val('af-lname');
  sendForm({
    payload: {
      _subject: 'New Application: ' + name + ' (' + val('af-role') + ')',
      _replyto: val('af-email'),
      'Name': name,
      'Email': val('af-email'),
      'Degree Subject': val('af-degree'),
      'Year of Study': val('af-year'),
      'Role': val('af-role'),
      'Why Prune Hill': val('af-why'),
    },
    honeypot: 'af-hp',
    btnId: 'af-submit',
    errId: 'apply-err',
    sendingLabel: 'Submitting…',
    onSuccess: () => {
      document.getElementById('apply-form').style.display = 'none';
      document.getElementById('apply-ok').style.display = 'block';
      document.getElementById('what-next').style.display = 'block';
    },
  });
}

function submitContact() {
  if (!validateContact()) return;
  const name = val('cf-fname') + ' ' + val('cf-lname');
  sendForm({
    payload: {
      _subject: 'Website Enquiry: ' + name + ' (' + val('cf-type') + ')',
      _replyto: val('cf-email'),
      'Name': name,
      'Email': val('cf-email'),
      'Enquirer Type': val('cf-type'),
      'Message': val('cf-msg'),
    },
    honeypot: 'cf-hp',
    btnId: 'cf-submit',
    errId: 'contact-err',
    sendingLabel: 'Sending…',
    onSuccess: () => {
      document.getElementById('contact-form').style.display = 'none';
      document.getElementById('contact-ok').style.display = 'block';
    },
  });
}
