# Prune Hill Capital website

A static website for Prune Hill Capital, built with plain HTML, CSS and JavaScript. It has no build step and no dependencies.

## Open it

1. Unzip the folder and open it in VS Code (File > Open Folder).
2. Open `index.html` in Chrome. Either double-click the file, or install the **Live Server** extension in VS Code, right-click `index.html` and choose "Open with Live Server", which reloads the page every time you save.

## Pages

| File | Page |
|---|---|
| `index.html` | Home |
| `about.html` | Purpose, story, values, non-profit model, partnerships |
| `team.html` | Org chart, leadership, Portfolio Managers, Investment Committee |
| `mandate.html` | Full Investment Mandate v1.2 with a contents sidebar and PDF download |
| `portfolio.html` | Allocation targets, risk limits, benchmarks, trade compliance checker and allocation planner |
| `process.html` | Trade process, memo requirements, meetings, governance, reporting |
| `programme.html` | Open role, selection process, FAQ, application form |
| `contact.html` | Contact details and contact form |
| `404.html` | Not-found page (GitHub Pages uses it automatically) |

## Settings: `assets/js/config.js`

- **Forms**: the site is static, so both forms post to [FormSubmit](https://formsubmit.co), which emails each submission to the inbox (the CV arrives as an attachment) and sends the visitor back to the page with a confirmation. The first submission triggers a one-time activation email; nothing is delivered until its link is clicked. To keep the address out of the site's code, replace it in `contactFormEndpoint` and `applicationFormEndpoint` with the random alias FormSubmit gives you after activation.
- **contactEmail**: add an email address to show it on the Contact page. Leave it empty to keep it hidden.
- **recruitmentOpen / recruitmentLabel**: switch recruitment messaging on or off.

## Editing content

- Team names and roles are in `team.html` (cards and org chart) and in the org chart summary on `index.html`.
- Colours and fonts are at the top of `assets/css/styles.css` (`:root`). Dark mode colours are in the `[data-theme="dark"]` block.
- The PDFs linked from the site are in `assets/docs/`. Replace them with new versions using the same file names.

## Publish on GitHub Pages

Replace the contents of your existing repository with the contents of this folder (keep `index.html` at the top level), commit and push. GitHub Pages serves it as before.
