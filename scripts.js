const navToggle = document.getElementById('nav-toggle');
const navList = document.getElementById('nav-list');

navToggle.addEventListener('click', () => {
  navList.classList.toggle('active');
});
document.addEventListener('click', (e) => {
    if (!navList.contains(e.target) && !navToggle.contains(e.target)) {
      navList.classList.remove('active');
      navList.classList.add('slide-out');
      
    }
  });