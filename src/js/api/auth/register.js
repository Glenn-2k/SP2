import { API_BASE, API_AUTH, API_REGISTER } from '../constants';

const method = 'POST';
/* eslint-disable no-undef */
export async function register(name, email, password) {
  const registerURL = API_BASE + API_AUTH + API_REGISTER;

  const body = JSON.stringify(name, email, password);
  const response = await fetch(registerURL, {
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
    method,
    body,
  });

  const result = await response.json();
  return result;
}
