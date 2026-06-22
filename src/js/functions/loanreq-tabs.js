(function () {
  const container = document?.querySelector('.loanreq');
  const tabBtns = container?.querySelectorAll('[data-tab-btn]');
  const tabPanels = container?.querySelectorAll('[data-tab-panel]');

  const switchTab = (index) => {
    tabBtns?.forEach(btn => btn.classList.remove('is-active'));
    tabPanels?.forEach(panel => panel.classList.remove('is-active'));

    const activeBtn = container?.querySelector(`[data-tab-btn="${index}"]`);
    const activePanel = container?.querySelector(`[data-tab-panel="${index}"]`);

    activeBtn?.classList.add('is-active');
    activePanel?.classList.add('is-active');
  };

  tabBtns?.forEach(btn => {
    btn.addEventListener('click', () => {
      switchTab(btn.dataset.tabBtn);
    });
  });
})();
