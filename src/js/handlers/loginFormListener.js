import { login } from '../api/auth/login';

/**
 * Adds input validation and submit handling to the login form.
 *
 * The function attaches input event listeners to dynamically validate form inputs (e.g., email, password),
 * and a submit event listener to handle the form submission.
 * If the form inputs are valid, the user's credentials are submitted for login.
 *
 * @returns {void}
 *
 * @example
 * loginFormListener();
 */

export function loginFormListener() {
  const form = document.getElementById('loginForm');

  if (form) {
    const inputs = form.querySelectorAll('input');
    inputs.forEach((input) => {
      input.addEventListener('input', function () {
        if (this.checkValidity()) {
          this.classList.remove('is-invalid');
          this.classList.add('is-valid');
        } else {
          this.classList.remove('is-valid');
          this.classList.add('is-invalid');
        }
      });
    });

    form.addEventListener('submit', async (event) => {
      event.preventDefault();

      if (!form.checkValidity()) {
        event.stopPropagation();
        form.classList.add('was-validated');
        return;
      }

      const formData = new FormData(form);
      const profile = Object.fromEntries(formData.entries());

      if (profile.email && profile.password) {
        try {
          const user = await login(profile);
          console.log('Login user:', user);

          if (user) {
            window.location.reload();
          } else {
            throw new Error('Login failed');
          }
        } catch (error) {
          console.error('Login error:', error);
          alert('Invalid email or password. Please try again.');

          form.classList.remove('was-validated');
          inputs.forEach((input) => {
            input.classList.remove('is-valid', 'is-invalid');
          });
        }
      } else {
        console.error('Email or password is missing');
        alert('Please enter both your email and password.');
      }
    });
  } else {
    console.error('Login form not found');
  }
}
