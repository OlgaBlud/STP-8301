const modal = document.querySelector('.cookies-modal');
const acceptBtn = document.querySelector('.cookies-accept-btn');
const declineBtn = document.querySelector('.cookies-decline-btn');

document.addEventListener('DOMContentLoaded', () => {
  if (!localStorage.getItem('cookieAccepted')) {
    openModal();
  }

  acceptBtn.addEventListener('click', closeModal);
  declineBtn.addEventListener('click', closeModal);
});

function openModal() {
  modal.classList.add('cookies-modal-active');
  document.body.classList.add('no-scroll');
}

function closeModal() {
  modal.classList.remove('cookies-modal-active');
  document.body.classList.remove('no-scroll');
  localStorage.setItem('cookieAccepted', 'true');
}
