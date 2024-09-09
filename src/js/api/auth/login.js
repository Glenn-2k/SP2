import { API_BASE, API_AUTH, API_LOGIN } from '../constants';
import * as storage from '../../storage';

/* eslint-disable no-unused-vars, no-undef */
export async function login(email, password) {
  const url = API_BASE + API_AUTH + API_LOGIN;

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },

      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

    if (response.ok) {
      const { accessToken, ...user } = await response.json();
    }
    storage.save('token', accessToken);

    storage.save('profile', user);

    return user;
  } catch (error) {
    console.error('login', error);
    return null;
  }
}
