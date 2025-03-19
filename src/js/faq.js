import Accordion from 'accordion-js';

document.addEventListener('DOMContentLoaded', function () {
  new Accordion('.accordion-container', {
    duration: 400,
    showMultiple: true,
  });
});

const faqBtn = document.querySelector('.faq-btn');

faqBtn.addEventListener('click', () => {
  setTimeout(() => {
    faqBtn.blur();
  }, 100);
});
