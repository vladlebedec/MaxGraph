import Inputmask from "inputmask";

const maskOptions = {
  mask: "+7 (999) 999-99-99",
  placeholder: "_",
  showMaskOnHover: false,
  showMaskOnFocus: true,
};

export function initPhoneMask(container = document) {
  const inputs = container.querySelectorAll?.('input[type="tel"]') || [];
  inputs.forEach((input) => {
    if (!input.inputmask) {
      new Inputmask(maskOptions).mask(input);
    }
  });
}