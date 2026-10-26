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

## Deployment: Vercel (connection pending)

Repository: <https://github.com/cortez1017/viracocha-website> (private).

GitHub Pages is unavailable for this private repository on the current account plan. Use Vercel to deploy the static site while keeping the source repository private. A private repository does not make the deployed website private; configure visitor access separately if required.

`vercel.json` selects no framework, skips installation and building, and serves the repository root. See [Vercel static build configuration](https://vercel.com/docs/builds/configure-a-build).

After connecting Vercel:

1. Import `cortez1017/viracocha-website` and grant access to this repository.
2. Use the repository root, framework preset **Other**, no build command, and output directory **.**.
3. Set the production branch to `main`.
4. Deploy and confirm the home page, menu, and images work at the generated URL.
5. Use pull-request preview deployments for review, then merge into `main` to update production.

No live deployment or Vercel project has been created yet. Connection is required to finish setup. The `.nojekyll` file also permits GitHub Pages if the account becomes eligible later.

## Local Git access

The original iCloud project remains unchanged. This prepared copy contains the website and collaboration files. A normal Git fetch was rejected because the Mac's saved GitHub credentials are invalid. After signing Git in using GitHub CLI or GitHub Desktop, clone the private repository into a new local folder and work from that clone. Do not treat the prepared copy as a synchronized checkout until authentication and fetching have succeeded.

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
