const html = document.querySelector('html');
const themeToggle = document.querySelectorAll('[id$="theme-toggle"]');

const preferDark = matchMedia('(prefers-color-scheme: dark)').matches;
const isLight = localStorage.getItem('ck_theme') === 'light' && !preferDark;
const isDark = localStorage.getItem('ck_theme') === 'dark' && preferDark;

if (isLight && html?.classList.contains('dark')) html.classList.remove('dark');
else if (isDark && html?.classList.contains('light')) html.classList.remove('light');
else if (isDark && !html?.classList.contains('dark')) html?.classList.add('dark');
else if (isLight && !html?.classList.contains('light')) html?.classList.add('light');

themeToggle?.forEach((toggle) => {
  toggle.addEventListener('click', () => {
    if (html?.classList.contains('dark')) {
      html.classList.remove('dark');
      localStorage.setItem('ck_theme', 'light');
    } else {
      html?.classList.add('dark');
      localStorage.setItem('ck_theme', 'dark');
    }
  });
});
