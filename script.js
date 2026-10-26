// ===== Dropdown menu (three-dot nav) =====
const menuToggle = document.getElementById('menuToggle');
const dropdownMenu = document.getElementById('dropdownMenu');

function closeMenu() {
  dropdownMenu.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
}

function openMenu() {
  dropdownMenu.classList.add('open');
  menuToggle.setAttribute('aria-expanded', 'true');
}

menuToggle.addEventListener('click', (e) => {
  e.stopPropagation();
  const isOpen = dropdownMenu.classList.contains('open');
  isOpen ? closeMenu() : openMenu();
});

// Close when clicking outside the menu
document.addEventListener('click', (e) => {
  if (!dropdownMenu.contains(e.target) && e.target !== menuToggle) {
    closeMenu();
  }
});

// Close on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeMenu();
});