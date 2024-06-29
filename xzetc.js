document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
  
    // Initial state (hide menu on larger screens)
    mobileMenu.classList.add('hidden');
  
    menuToggle.addEventListener('change', () => {
      if (menuToggle.checked) {
        mobileMenu.classList.remove('hidden');
      } else {
        mobileMenu.classList.add('hidden');
      }
    });
  
    // Hide menu when screen size changes (for responsive behavior)
    window.addEventListener('resize', () => {
      if (window.innerWidth >= 768) {
        mobileMenu.classList.add('hidden');
        menuToggle.checked = false; // Uncheck the checkbox
      }
    });
  });
  