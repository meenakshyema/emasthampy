/**
 * EMA S THAMPY - PORTFOLIO INTERACTIVITY SCRIPT
 * Theme switching, mobile menu, project filter, copy-to-clipboard, form handler
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. DYNAMIC COPYRIGHT YEAR
  const yearElement = document.getElementById('currentYear');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // 2. THEME SWITCHER (Dark / Light Mode)
  const themeToggle = document.getElementById('themeToggle');
  const htmlElement = document.documentElement;
  
  // Check persisted theme or system preference
  const savedTheme = localStorage.getItem('ema-portfolio-theme');
  const systemPrefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;

  if (savedTheme) {
    htmlElement.setAttribute('data-theme', savedTheme);
  } else if (systemPrefersLight) {
    htmlElement.setAttribute('data-theme', 'light');
  } else {
    htmlElement.setAttribute('data-theme', 'dark');
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = htmlElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      
      htmlElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('ema-portfolio-theme', newTheme);
    });
  }

  // 3. MOBILE MENU TOGGLE
  const mobileToggle = document.getElementById('mobileMenuToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      mobileToggle.classList.toggle('active');
      navMenu.classList.toggle('active');
    });

    // Close menu when clicking any nav link
    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        mobileToggle.classList.remove('active');
        navMenu.classList.remove('active');
      });
    });
  }

  // 4. PROJECT CATEGORY FILTERING
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      // Remove active class from all buttons
      filterButtons.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach((card) => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.classList.remove('hide');
        } else {
          card.classList.add('hide');
        }
      });
    });
  });

  // 5. COPY EMAIL TO CLIPBOARD WITH TOAST NOTIFICATION
  const copyBtn = document.getElementById('copyEmailBtn');
  const emailText = document.getElementById('emailText');
  const toast = document.getElementById('toast');
  const toastMessage = document.getElementById('toastMessage');

  let toastTimeout;
  function showToast(message) {
    if (!toast) return;
    toastMessage.textContent = message;
    toast.classList.add('show');

    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
      toast.classList.remove('show');
    }, 3000);
  }

  if (copyBtn && emailText) {
    copyBtn.addEventListener('click', () => {
      const email = emailText.textContent.trim();
      navigator.clipboard.writeText(email)
        .then(() => {
          showToast('Email copied to clipboard!');
          copyBtn.classList.add('btn-primary');
          copyBtn.classList.remove('btn-outline');
          setTimeout(() => {
            copyBtn.classList.remove('btn-primary');
            copyBtn.classList.add('btn-outline');
          }, 1500);
        })
        .catch(() => {
          showToast('Failed to copy. Please manually copy: ' + email);
        });
    });
  }

  // 6. CONTACT FORM SUBMISSION (Mailto Handler)
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('senderName').value.trim();
      const email = document.getElementById('senderEmail').value.trim();
      const subject = document.getElementById('messageSubject').value.trim();
      const message = document.getElementById('messageBody').value.trim();

      const fullSubject = encodeURIComponent(`[Portfolio Contact] ${subject} - from ${name}`);
      const fullBody = encodeURIComponent(
        `Hi Ema,\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n\n---\nSent from your portfolio website.`
      );

      const mailtoUrl = `mailto:emasthampy2002@gmail.com?subject=${fullSubject}&body=${fullBody}`;

      showToast('Opening your default mail client...');
      window.location.href = mailtoUrl;

      contactForm.reset();
    });
  }

  // 7. ACTIVE NAVIGATION LINK ON SCROLL (IntersectionObserver)
  const sections = document.querySelectorAll('section[id]');
  if ('IntersectionObserver' in window && sections.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const currentId = entry.target.getAttribute('id');
          navLinks.forEach((link) => {
            const href = link.getAttribute('href').replace('#', '');
            if (href === currentId) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      });
    }, {
      rootMargin: '-30% 0px -70% 0px'
    });

    sections.forEach((sec) => observer.observe(sec));
  }
});
