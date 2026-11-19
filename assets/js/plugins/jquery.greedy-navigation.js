/* Responsive navigation; all destinations remain in their original order. */
const navigation = document.getElementById('site-nav');
const navigationToggle = navigation.querySelector('.nav-toggle');

function closeNavigation() {
  navigation.classList.remove('is-open');
  navigationToggle.setAttribute('aria-expanded', 'false');
  navigationToggle.setAttribute('aria-label', 'Open navigation');
}

navigationToggle.addEventListener('click', () => {
  const open = navigation.classList.toggle('is-open');
  navigationToggle.setAttribute('aria-expanded', String(open));
  navigationToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
});

navigation.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', closeNavigation);
});

document.addEventListener('click', event => {
  if (!navigation.contains(event.target)) closeNavigation();
});

document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && navigation.classList.contains('is-open')) {
    closeNavigation();
    navigationToggle.focus();
  }
});

window.matchMedia('(min-width: 860px)').addEventListener('change', closeNavigation);
