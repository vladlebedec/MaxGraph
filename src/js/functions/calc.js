const calc = () => {
  const form = document.querySelector(".calc__form");
  const success = document.querySelector(".calc__success");
  if (!form) return;

  const el = (sel) => form.querySelector(`[data-calc="${sel}"]`);

  const amountEl = el("amount");
  const termEl = el("term");
  const paymentEl = el("payment");
  const minusAmount = el("amount-minus");
  const plusAmount = el("amount-plus");
  const minusTerm = el("term-minus");
  const plusTerm = el("term-plus");

  const state = {
    amount: 50000,
    term: 3,
    minAmount: 10000,
    maxAmount: 5000000,
    stepAmount: 10000,
    minTerm: 1,
    maxTerm: 60,
    stepTerm: 1,
  };

  function formatAmount(n) {
    return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " ₽";
  }

  function formatPayment(n) {
    return n.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }

  function pluralMonths(n) {
    const d = n % 10;
    const dd = n % 100;
    if (dd >= 11 && dd <= 19) return "месяцев";
    if (d === 1) return "месяц";
    if (d >= 2 && d <= 4) return "месяца";
    return "месяцев";
  }

  function updateUI() {
    amountEl.textContent = formatAmount(state.amount);
    termEl.textContent = state.term + " " + pluralMonths(state.term);
    paymentEl.textContent = formatPayment(state.amount / state.term);
  }

  minusAmount.addEventListener("click", () => {
    if (state.amount - state.stepAmount >= state.minAmount) {
      state.amount -= state.stepAmount;
      updateUI();
    }
  });

  plusAmount.addEventListener("click", () => {
    if (state.amount + state.stepAmount <= state.maxAmount) {
      state.amount += state.stepAmount;
      updateUI();
    }
  });

  minusTerm.addEventListener("click", () => {
    if (state.term - state.stepTerm >= state.minTerm) {
      state.term -= state.stepTerm;
      updateUI();
    }
  });

  plusTerm.addEventListener("click", () => {
    if (state.term + state.stepTerm <= state.maxTerm) {
      state.term += state.stepTerm;
      updateUI();
    }
  });

  updateUI();

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    form.style.display = "none";
    success.style.display = "block";
    success.scrollIntoView({ behavior: "smooth", block: "center" });
  });
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", calc);
} else {
  calc();
}
