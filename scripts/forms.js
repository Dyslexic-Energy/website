'use strict';

// Placeholder module; real validation/submission logic will be implemented in Step 04.

document.addEventListener('submit', event => {
  const form = event.target;
  if(!(form instanceof HTMLFormElement)){
    return;
  }

  if(form.matches('.signup-form')){
    event.preventDefault();
    const status = form.querySelector('.form-status');
    if(status){
      status.textContent = 'Form submission placeholder — integration pending.';
    }
  }
});
