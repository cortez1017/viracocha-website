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

Repository: <https://github.com/cortez1017/viracocha-website> (public).

Website: <https://cortez1017.github.io/viracocha-website/>.

GitHub Pages publishes from `main` and the repository root through **Settings → Pages → Deploy from a branch**. The `.nojekyll` marker serves the static files without Jekyll processing. No dependency installation or build is required. Merging a pull request into `main` triggers the next website deployment.

Use relative links for images, styles, scripts, and pages so they work under `/viracocha-website/`. Changes may take a few minutes to appear; check the repository Actions tab for deployment progress.

## Local Git access

Clone the repository into your own local folder:

```sh
git clone https://github.com/cortez1017/viracocha-website.git
cd viracocha-website
```

Reading this public repository does not require signing in. To push your own branches, authenticate GitHub through GitHub Desktop, GitHub CLI, or SSH. The original iCloud project is a separate copy; work from a clone to synchronize changes with the team.

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
