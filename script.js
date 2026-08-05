const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-menu a');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('active');
    navToggle.classList.toggle('open', isOpen);
    document.body.classList.toggle('menu-open', isOpen);
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      navToggle.classList.remove('open');
      document.body.classList.remove('menu-open');
    });
  });

  document.addEventListener('click', (event) => {
    if (window.innerWidth <= 960 && navMenu.classList.contains('active') && !navMenu.contains(event.target) && !navToggle.contains(event.target)) {
      navMenu.classList.remove('active');
      navToggle.classList.remove('open');
      document.body.classList.remove('menu-open');
    }
  });
}

const themeToggle = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;
const savedTheme = localStorage.getItem('theme');
const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (savedTheme) {
  htmlElement.setAttribute('data-theme', savedTheme);
} else if (systemPrefersDark) {
  htmlElement.setAttribute('data-theme', 'dark');
} else {
  htmlElement.setAttribute('data-theme', 'light');
}

themeToggle?.addEventListener('click', () => {
  const currentTheme = htmlElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  htmlElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
});

const header = document.querySelector('.site-header');
const updateHeaderOnScroll = () => {
  if (!header) return;
  // Keep header visually transparent on scroll — do not add the `scrolled` class.
  header.classList.remove('scrolled');
};
window.addEventListener('scroll', updateHeaderOnScroll, { passive: true });
updateHeaderOnScroll();

const revealElements = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      observer.unobserve(entry.target);
    }
  });
}, {
  root: null,
  rootMargin: '0px 0px -50px 0px',
  threshold: 0.12
});

revealElements.forEach((element) => revealObserver.observe(element));

const form = document.getElementById('contact-form');
const statusText = form?.querySelector('.form-status');

form?.addEventListener('submit', async (event) => {
  event.preventDefault();
  event.stopPropagation();
  const submitButton = form.querySelector('button[type="submit"]');
  const originalText = submitButton.textContent;

  submitButton.disabled = true;
  submitButton.textContent = 'Sending...';
  if (statusText) {
    statusText.textContent = 'Sending your message...';
  }

  const formData = new FormData(form);
  const payload = Object.fromEntries(formData.entries());

  try {
    const response = await fetch('https://formsubmit.co/ajax/e6c8db7ea25b8d006e9d2d782798e58a', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      throw new Error('Submission failed');
    }

    form.reset();
    if (statusText) {
      statusText.textContent = 'Thanks! Your message has been sent.';
    }
  } catch (error) {
    if (statusText) {
      statusText.textContent = 'Something went wrong. Please email me directly at jjoshuabancolita@gmail.com.';
    }
  } finally {
    submitButton.disabled = false;
    submitButton.textContent = originalText;
  }
});
