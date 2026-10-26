# Viracocha Website

Website for the Viracocha chapter of Lambda Sigma Upsilon at Stevens Institute of Technology.

## Project structure

- `index.html`: home page content and navigation.
- `style.css`: layout, colors, typography, and responsive styling.
- `script.js`: dropdown navigation behavior.
- `images/`: website photographs and artwork. Preserve filename capitalization in links.

This is a static HTML/CSS/JavaScript site. No package installation or build step is required.

## Preview locally

Open `index.html` in a browser, or run this command from the repository folder:

```sh
python3 -m http.server 8000
```

Then visit <http://localhost:8000>. Stop the server with Ctrl+C.

## Collaboration

1. Keep `main` ready to publish.
2. Create a short branch such as `feature/chapter-history` or `fix/mobile-menu`.
3. Make a focused change and preview it locally at desktop and mobile widths.
4. Push the branch and open a pull request into `main`.
5. Ask a teammate to review the page and changed links.
6. Squash and merge the approved pull request, then delete the branch.

Use GitHub Issues to assign work. Avoid editing the same page simultaneously without coordinating. Never commit credentials, `.env` files, or private member information. New collaborators should clone the GitHub repository into their own local folder.

Recommended repository settings once teammates are available: require pull requests and one approval for `main`, block force pushes and deletion, and enable automatic deletion of merged branches. Rules depend on the account plan and repository visibility. These settings have not yet been applied.

## Deployment: GitHub Pages

This site fits GitHub Pages because it uses only static files.

After the repository has been created and the initial source pushed:

1. Open **Settings → Pages** in the repository.
2. Select **Deploy from a branch**.
3. Choose **main** and **/ (root)**, then save.
4. Wait for the Pages deployment to finish and use the published URL shown in Settings.

The `.nojekyll` file tells Pages to serve these static assets without Jekyll processing. Use relative asset URLs so deployment under a repository subpath works.

GitHub Free supports Pages from public repositories. Pages from private repositories requires an eligible paid GitHub plan. If source must stay private and that plan is unavailable, connect the repository to a static host such as Vercel; select its static/Other framework preset, no build command, and the repository root as the output directory. Deployment is pending; this README does not indicate that a live site exists.

## Existing content gaps

The current source links to pages that are not yet present:

- `history.html`
- `philanthropy.html`
- `interested.html`
- `brotherhood.html`
- `resources.html`

Instagram and LinkedIn links currently use `#` placeholders. The interest-form link currently points to the missing `interested.html` page. Resolve these before announcing the site.

## Ownership and assets

No open-source license has been selected. Confirm chapter permission to publish the content, logo, and photos before reusing them elsewhere.
