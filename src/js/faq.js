import Accordion from 'accordion-js';

document.addEventListener('DOMContentLoaded', function () {
  new Accordion('.accordion-container', {
    duration: 400,
    showMultiple: true,
  });
});

const faqBtns = document.querySelectorAll('.faq-btn');

faqBtns.forEach(faqBtn => {
  faqBtn.addEventListener('click', () => {
    setTimeout(() => {
      faqBtn.blur();
    }, 100);
  });
});
