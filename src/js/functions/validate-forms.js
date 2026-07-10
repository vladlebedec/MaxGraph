import JustValidate from 'just-validate';

export const validateForms = (selector, rules, afterSend) => {
   const form = document?.querySelector(selector);
   const telSelector = form?.querySelector('input[type="tel"]');

   if (!form) {
      console.error('Нет такого селектора!');
      return false;
   }

   if (!rules) {
      console.error('Вы не передали правила валидации!');
      return false;
   }

   if (telSelector) {
      for (let item of rules) {
         if (item.tel) {
            item.rules.push({
               rule: 'function',
               validator: function () {
                  const raw = telSelector.inputmask?.unmaskedvalue?.() ?? telSelector.value.replace(/\D/g, '');
                  return raw.length >= 9;
               },
               errorMessage: item.telError
            });
         }
      }
   }

   const validation = new JustValidate(selector);

   for (let item of rules) {
      validation
         .addField(item.ruleSelector, item.rules);
   }

   validation.onSuccess((ev) => {
      ev.target.submit();

      ev.target.reset();
   })

};