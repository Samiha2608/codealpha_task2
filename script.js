// script.js
document.addEventListener('DOMContentLoaded', () => {
  const currentPath = window.location.pathname.split('/').pop();
  const pageName = currentPath.split('.').shift();

  const button = document.getElementById(pageName);
  if (button) {
    button.classList.add('active');
  }
});
