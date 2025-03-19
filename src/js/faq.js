import Accordion from 'accordion-js';

document.addEventListener('DOMContentLoaded', function () {
  new Accordion('.accordion-container', {
    duration: 400,
    showMultiple: true,
  });
});
