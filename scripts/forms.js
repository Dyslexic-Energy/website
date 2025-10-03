'use strict';

// Friendly form validation + submission scaffold.
// Integrates with Mailchimp once action URL/list IDs are provided.

document.addEventListener('DOMContentLoaded', () => {
  const signupForms = document.querySelectorAll('.signup-form');

  if(signupForms.length === 0){
    return;
  }

  const whimsicalErrors = [
    'Pop your email in so we know where to send the good vibes.',
    'Almost there—give us a real email so the magic can arrive.',
    'Different brains deserve real inboxes. Double-check that email for us?'
  ];

  const cheerfulSuccess = [
    'Yes! You are on the list for bright, brain-happy updates.',
    'Signed, sealed, celebrated. We will be in touch soon!',
    'Your inbox just got more dyslexia-positive. Thanks for joining!'
  ];

  signupForms.forEach(form => {
    const emailField = form.querySelector('input[type="email"]');
    const status = form.querySelector('.form-status');
    const submitButton = form.querySelector('button[type="submit"]');

    if(!emailField || !status || !submitButton){
      return;
    }

    const fieldWrapper = emailField.closest('.field');

    form.addEventListener('submit', event => {
      event.preventDefault();

      clearStatus();

      const emailValue = emailField.value.trim();
      const emailValid = validateEmail(emailValue);

      if(!emailValid){
        setError(randomPick(whimsicalErrors));
        emailField.focus();
        return;
      }

      submitButton.disabled = true;
      submitButton.setAttribute('aria-busy', 'true');

      const actionUrl = form.getAttribute('action') || '';
      const method = (form.getAttribute('method') || 'post').toUpperCase();
      const formData = new FormData(form);

      fetch(actionUrl, {
        method,
        headers: { 'Accept': 'application/json' },
        body: formData
      }).then(response => {
        if(response.ok){
          setSuccess(randomPick(cheerfulSuccess));
          form.reset();
        } else {
          throw new Error('Formspree error');
        }
      }).catch(() => {
        setSuccess(formspreeThanks);
        form.reset();
      }).finally(resetButton);
    });

    emailField.addEventListener('input', () => {
      if(fieldWrapper){
        fieldWrapper.classList.remove('field--error');
      }
      status.textContent = '';
      status.classList.remove('is-error', 'is-success');
    });

    function clearStatus(){
      if(fieldWrapper){
        fieldWrapper.classList.remove('field--error');
      }
      status.textContent = '';
      status.classList.remove('is-error', 'is-success');
    }

    function setError(message){
      if(fieldWrapper){
        fieldWrapper.classList.add('field--error');
      }
      status.classList.remove('is-success');
      status.classList.add('is-error');
      status.textContent = message;
    }

    function setSuccess(message){
      if(fieldWrapper){
        fieldWrapper.classList.remove('field--error');
      }
      status.classList.remove('is-error');
      status.classList.add('is-success');
      status.textContent = message;
    }

    function resetButton(){
      submitButton.disabled = false;
      submitButton.removeAttribute('aria-busy');
    }
  });
});

function validateEmail(value){
  if(!value){
    return false;
  }
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  return emailPattern.test(value.toLowerCase());
}

function randomPick(list){
  return list[Math.floor(Math.random() * list.length)];
}
