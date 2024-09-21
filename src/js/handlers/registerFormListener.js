import { register } from '../api/auth/register';

/**
 * Attaches a submit event listener to the registration form.
 *
 * When the form is submitted, the function prevents the default behavior,
 * gathers the form data, and passes the data to the register function.
 *
 * @returns {void}
 *
 * @example
 * registerFormListener();
 */

export function registerFormListener() {
  const form = document.getElementById('registrationForm');

  console.log(form);
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const profile = Object.fromEntries(formData.entries());
    console.log(profile);

    register(profile);
  });
}
