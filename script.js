/* =========================================================
   VIRACOCHA — Site scripts
   Only one feature lives here right now: the three-dot
   dropdown menu in the header. It is loaded at the bottom of
   index.html, so the elements below already exist when this
   file runs (no DOMContentLoaded wrapper needed).

   How it works:
   - The menu is hidden by default in style.css (.dropdown-menu).
   - Adding the "open" class shows it (.dropdown-menu.open).
   - aria-expanded on the button is kept in sync so screen
     readers announce whether the menu is open or closed.
   ========================================================= */

// ===== Dropdown menu (three-dot nav) =====

// The three-dot button and the <nav> it opens (see the header in index.html).
const menuToggle = document.getElementById('menuToggle');
const dropdownMenu = document.getElementById('dropdownMenu');

/**
 * Hide the dropdown menu and tell assistive tech it is collapsed.
 */
function closeMenu() {
  dropdownMenu.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
}

/**
 * Show the dropdown menu and tell assistive tech it is expanded.
 */
function openMenu() {
  dropdownMenu.classList.add('open');
  menuToggle.setAttribute('aria-expanded', 'true');
}

// Toggle the menu when the three-dot button is clicked.
// stopPropagation() keeps this click from reaching the document
// listener below, which would otherwise close the menu right away.
menuToggle.addEventListener('click', (e) => {
  e.stopPropagation();
  const isOpen = dropdownMenu.classList.contains('open');
  isOpen ? closeMenu() : openMenu();
});

// Close when clicking anywhere outside the menu.
// Clicks inside the menu (on a link) are ignored here and the link navigates normally.
document.addEventListener('click', (e) => {
  if (!dropdownMenu.contains(e.target) && e.target !== menuToggle) {
    closeMenu();
  }
});

// Close on the Escape key so keyboard users can dismiss the menu.
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeMenu();
});
