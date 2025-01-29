// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Check saved theme
const savedTheme = localStorage.getItem('github-theme');
if (savedTheme) {
  body.classList.add(savedTheme);
  updateThemeIcon();
}

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-theme');
  localStorage.setItem('github-theme', body.classList.contains('dark-theme') ? 'dark-theme' : '');
  updateThemeIcon();
});

function updateThemeIcon() {
  const isDark = body.classList.contains('dark-theme');
  themeToggle.innerHTML = isDark ? '☀️' : '🌙';
}

// Mobile Menu
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle?.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
  if (!e.target.closest('.github-nav')) {
    navLinks.classList.remove('active');
  }
});

// Repository Interaction
document.querySelectorAll('.repo-card').forEach(card => {
  card.addEventListener('click', () => {
    // Add your repository click handler
    console.log('Repository clicked:', card.querySelector('h3').textContent);
  });
});

// Profile Stats Hover Effects
document.querySelectorAll('.stat-item').forEach(stat => {
  stat.addEventListener('mouseenter', () => {
    stat.style.transform = 'scale(1.05)';
  });
  stat.addEventListener('mouseleave', () => {
    stat.style.transform = 'scale(1)';
  });
});