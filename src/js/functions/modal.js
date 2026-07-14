import { initPhoneMask } from './phone-mask';

export const initModals = () => {
  const modals = document.querySelectorAll('.modal');

  // Открытие модалки по data-modal-open
  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('[data-modal-open]');
    if (!trigger) return;

    const modalClass = trigger.dataset.modalOpen;
    const modal = document.querySelector(`.modal.${modalClass}`);
    if (modal) {
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
      initPhoneMask(modal);
    }
  });

  // Закрытие по modal__close и клик вне modal__container
  modals.forEach((modal) => {
    modal.addEventListener('click', (e) => {
      // Клик по кнопке закрытия
      if (e.target.closest('.modal__close')) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
        return;
      }

      // Клик вне modal__container (по самому modal-оверлею)
      if (!e.target.closest('.modal__container')) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  });
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initModals);
} else {
  initModals();
}