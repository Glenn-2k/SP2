import { API_BASE, API_AUTH, API_LOGIN } from '../constants';
import * as storage from '../../storage';

/**
 * Authenticates a user with the provided profile data and saves the token and user profile on successful login.
 *
 * @param {Object} userProfile - An object containing the user's profile details (e.g., email, password).
 * @returns {Promise<Object|null>} The user data if login is successful, or null if the login fails.
 *
 * @example
 * const profile = {
 *   email: 'user@example.com',
 *   password: 'securepassword'
 * };
 * login(profile)
 *   .then(userData => {
 *     if (userData) {
 *       console.log('Login successful:', userData);
 *     } else {
 *       console.error('Login failed');
 *     }
 *   })
 *   .catch(error => console.error('Error:', error));
 */

export async function login(userProfile) {
  const loginURL = API_BASE + API_AUTH + API_LOGIN;

  try {
    const response = await fetch(loginURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },

      body: JSON.stringify(userProfile),
    });
    console.log(response);
    if (response.ok) {
      const data = await response.json();
      const { accessToken, ...user } = data.data;
      storage.save('token', accessToken);

      storage.save('profile', user);
      return data.data;
    } else {
      return null;
    }
  } catch (error) {
    console.error('login', error);

    return null;
  }
}
