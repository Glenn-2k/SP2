import { API_BASE, API_AUTH, API_LOGIN } from '../constants';
import * as storage from '../../storage';

/* eslint-disable no-undef */
export async function login(email, password) {
  const loginURL = API_BASE + API_AUTH + API_LOGIN;
  const token = storage.load('token');

  try {
    const response = await fetch(loginURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },

      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    console.log(response);
    if (response.ok) {
      const { accessToken, ...user } = await response.json();
      console.log('login', user);
      storage.save('token', accessToken);

      storage.save('profile', user);
    }

    return user;
  } catch (error) {
    console.error('login', error);
    return null;
  }
}
