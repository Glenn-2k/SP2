import { API_BASE, API_AUTH, API_LOGIN } from '../constants';
import * as storage from '../../storage';

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
