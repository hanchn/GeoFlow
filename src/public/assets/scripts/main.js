document.addEventListener('DOMContentLoaded', () => {
  const modal = document.querySelector('[data-search-modal]');
  const openButton = document.querySelector('[data-search-open]');
  const closeButton = document.querySelector('[data-search-close]');
  const faqItems = document.querySelectorAll('[data-faq-item]');

  if (modal && openButton && closeButton) {
    openButton.addEventListener('click', () => {
      modal.hidden = false;
      document.body.style.overflow = 'hidden';
    });

    closeButton.addEventListener('click', () => {
      modal.hidden = true;
      document.body.style.overflow = '';
    });

    modal.addEventListener('click', (event) => {
      if (event.target === modal) {
        modal.hidden = true;
        document.body.style.overflow = '';
      }
    });
  }

  faqItems.forEach((item, index) => {
    const trigger = item.querySelector('[data-faq-trigger]');
    if (!trigger) {
      return;
    }

    if (index === 0) {
      item.classList.add('is-open');
    }

    trigger.addEventListener('click', () => {
      item.classList.toggle('is-open');
    });
  });
});
