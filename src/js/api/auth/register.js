import { API_BASE, API_AUTH, API_REGISTER } from '../constants';

const method = 'POST';

/**
 * Registers a new user with the provided name, email, and password.
 *
 * @param {string} name - The name of the user to register.
 * @param {string} email - The email address of the user.
 * @param {string} password - The password for the user account.
 * @returns {Promise<Object>} The result of the registration request.
 *
 * @example
 * register('John Doe', 'john@example.com', 'securepassword')
 *   .then(result => console.log('Registration successful:', result))
 *   .catch(error => console.error('Registration failed:', error));
 */

export async function register(name, email, password) {
  const registerURL = API_BASE + API_AUTH + API_REGISTER;

  const body = JSON.stringify(name, email, password);
  const response = await fetch(registerURL, {
    headers: {
      'Content-Type': 'application/json',
    },
    method,
    body,
  });

  const result = await response.json();
  return result;
}
