import { disableScroll } from './disable-scroll';
import { enableScroll } from './enable-scroll';

(function () {
  const burger = document?.querySelector('[data-burger]');
  const menu = document?.querySelector('[data-menu]');
  const overlay = document?.querySelector('[data-menu-overlay]');
  const closeBtn = document?.querySelector('[data-menu-close]');
  const tabBtns = menu?.querySelectorAll('[data-tab-btn]');
  const tabPanels = menu?.querySelectorAll('[data-tab-panel]');

  const openMenu = () => {
    menu?.classList.add('menu--active');
    burger?.classList.add('burger--active');
    disableScroll();
  };

  const closeMenu = () => {
    menu?.classList.remove('menu--active');
    burger?.classList.remove('burger--active');
    enableScroll();
  };

  const switchTab = (index) => {
    tabBtns?.forEach(btn => btn.classList.remove('is-active'));
    tabPanels?.forEach(panel => panel.classList.remove('is-active'));

    const activeBtn = document?.querySelector(`[data-tab-btn="${index}"]`);
    const activePanel = document?.querySelector(`[data-tab-panel="${index}"]`);

    activeBtn?.classList.add('is-active');
    activePanel?.classList.add('is-active');
  };

  burger?.addEventListener('click', () => {
    if (menu?.classList.contains('menu--active')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  overlay?.addEventListener('click', closeMenu);
  closeBtn?.addEventListener('click', closeMenu);

  tabBtns?.forEach(btn => {
    btn.addEventListener('click', () => {
      switchTab(btn.dataset.tabBtn);
    });
  });
})();
