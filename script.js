// Theme toggle + year
(function() {
  const root = document.documentElement;
  const toggle = document.getElementById('themeToggle');
  const saved = localStorage.getItem('theme') || 'dark';
  if (saved === 'light') root.classList.add('light');

  function updateIcon() {
    toggle.textContent = root.classList.contains('light') ? '☀️' : '🌙';
  }
  updateIcon();

  toggle.addEventListener('click', () => {
    root.classList.toggle('light');
    localStorage.setItem('theme', root.classList.contains('light') ? 'light' : 'dark');
    updateIcon();
  });

  document.getElementById('year').textContent = new Date().getFullYear();
})();
