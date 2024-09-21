import { load } from '../storage';

/**
 * Handles user logout by clearing local storage, updating the login button, and redirecting the user to the home page.
 *
 * If the user is logged in, clicking the login button will log them out by clearing local storage and redirecting to the homepage.
 * If the user is not logged in, the login button will display 'Log in/register'.
 *
 * @returns {void}
 *
 * @example
 * logout();
 */

export async function logout() {
  const loginButton = document.getElementById('loginButton');
  const token = load('token');

  if (token) {
    loginButton.textContent = 'Log out';

    loginButton.addEventListener('click', () => {
      event.preventDefault();
      localStorage.clear();
      window.location.href = '/index.html';

      loginButton.textContent = 'Log in/register';
      loginButton.href = '#';
    });
  } else {
    loginButton.textContent = 'Log in/register';
    loginButton.href = '#';
  }
}
