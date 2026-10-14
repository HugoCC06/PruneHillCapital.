/* =========================================================
   Prune Hill Capital: site settings
   Edit these values, save, and refresh the page.
   ========================================================= */
window.PHC_CONFIG = {
  // Form endpoints. The site is static, so a form service emails submissions
  // to the inbox. FormSubmit (https://formsubmit.co) is free, needs no account
  // and supports CV attachments. The first submission sends a one-time
  // activation email; nothing is delivered until its link is clicked.
  // To keep the address out of the site's code, replace the email below with
  // the random alias FormSubmit gives you after activation, e.g.
  // "https://formsubmit.co/1a2b3c4d5e6f...".
  // A Formspree endpoint ("https://formspree.io/f/...") also works here.
  // Leave as "" and the forms still validate but say submission isn't connected.
  contactFormEndpoint: "https://formsubmit.co/hugochristie06@gmail.com",
  applicationFormEndpoint: "https://formsubmit.co/hugochristie06@gmail.com",

  // Shown on the Contact page and in form error messages. Leave "" to hide it.
  contactEmail: "",

  linkedin: "https://www.linkedin.com/company/prune-hill-capital",

  // Recruitment status shown on the Programme page and home page banner.
  recruitmentOpen: true,
  recruitmentLabel: "Applications open: Autumn Term 2026 (rolling)"
};
