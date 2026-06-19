(function () {
  const triggers = document?.querySelectorAll('[data-dropdown-trigger]');

  triggers?.forEach(trigger => {
    const parent = trigger.closest('[class*="header__item-parent"]');
    const dropdown = parent?.querySelector('[data-dropdown]');
    if (!parent || !dropdown) return;

    let hideTimeout;

    const show = () => {
      clearTimeout(hideTimeout);
      dropdown.classList.add('is-active');
      triggers.forEach(t => {
        if (t !== trigger) {
          const otherDropdown = t.closest('[class*="header__item-parent"]')?.querySelector('[data-dropdown]');
          otherDropdown?.classList.remove('is-active');
        }
      });
    };

    const hide = () => {
      hideTimeout = setTimeout(() => {
        dropdown.classList.remove('is-active');
      }, 150);
    };

    const cancelHide = () => {
      clearTimeout(hideTimeout);
    };

    trigger.addEventListener('mouseenter', show);
    trigger.addEventListener('mouseleave', hide);
    trigger.addEventListener('focus', show);
    trigger.addEventListener('blur', hide);

    dropdown.addEventListener('mouseenter', cancelHide);
    dropdown.addEventListener('mouseleave', () => {
      dropdown.classList.remove('is-active');
    });
    dropdown.addEventListener('focusin', cancelHide);
    dropdown.addEventListener('focusout', (e) => {
      if (!dropdown.contains(e.relatedTarget)) {
        dropdown.classList.remove('is-active');
      }
    });
  });
})();
