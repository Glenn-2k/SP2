import { load, remove } from '../storage';

export async function logout() {
  const loginButton = document.getElementById('loginButton');
  const token = load('token');

  if (token) {
    loginButton.textContent = 'Log out';

    loginButton.addEventListener('click', () => {
      event.preventDefault();
      remove('token');
      remove('profile');

      loginButton.textContent = 'Log in/register';
      loginButton.href = '#';

      console.log('Logged out');
    });
  } else {
    loginButton.textContent = 'Log in/register';
    loginButton.href = '#';
  }
}
