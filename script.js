document.getElementById('year').textContent = new Date().getFullYear();

document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href');
    if (id === '#') return;
    const el = document.querySelector(id);
    if (!el) return;
    e.preventDefault();
    const top = el.getBoundingClientRect().top + window.scrollY - 70;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});

const toggleBtn = document.createElement('button');
toggleBtn.textContent = '☀️ / 🌙';
toggleBtn.style.position = 'fixed';
toggleBtn.style.bottom = '16px';
toggleBtn.style.right = '16px';
toggleBtn.style.background = 'var(--accent)';
toggleBtn.style.color = '#fff';
toggleBtn.style.border = 'none';
toggleBtn.style.borderRadius = '50%';
toggleBtn.style.width = '48px';
toggleBtn.style.height = '48px';
toggleBtn.style.cursor = 'pointer';
toggleBtn.style.fontSize = '18px';
toggleBtn.style.boxShadow = '0 4px 10px rgba(0,0,0,0.2)';

toggleBtn.onclick = () => {
  document.body.classList.toggle('manual-dark');
};

document.body.appendChild(toggleBtn);

// Apply manual dark mode override immediately when toggled
toggleBtn.onclick = () => {
  document.body.classList.toggle('manual-dark');
  const isDark = document.body.classList.contains('manual-dark');

  if (isDark) {
    document.documentElement.style.setProperty('--bg', '#1f1b18');
    document.documentElement.style.setProperty('--accent', '#c6a58b');
    document.documentElement.style.setProperty('--accent-2', '#7b4f2f');
    document.documentElement.style.setProperty('--muted', '#bfbfbf');
    document.documentElement.style.setProperty('--card', '#2a2521');
    document.body.style.color = '#f6f3ef';
  } else {
    document.documentElement.style.setProperty('--bg', '#f6f3ef');
    document.documentElement.style.setProperty('--accent', '#6b3f2a');
    document.documentElement.style.setProperty('--accent-2', '#d9b48f');
    document.documentElement.style.setProperty('--muted', '#6b6b6b');
    document.documentElement.style.setProperty('--card', '#fff');
    document.body.style.color = '#222';
  }
};

// Menu slider arrows
const menuSlider = document.querySelector('.menu-slider');
const slides = document.querySelectorAll('.menu-slide');
let currentIndex = 0;

document.querySelector('.arrow.right').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length;
  menuSlider.style.transform = `translateX(-${currentIndex * 100}%)`;
});

document.querySelector('.arrow.left').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  menuSlider.style.transform = `translateX(-${currentIndex * 100}%)`;
});
