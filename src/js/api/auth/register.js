import { API_BASE, API_AUTH, API_REGISTER } from '../constants';
/* eslint-disable no-undef */
const method = 'POST';
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
