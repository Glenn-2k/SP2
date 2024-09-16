import { load } from '../storage/index';
import { API_KEY } from './constants';

const token = load('token');
const headers = {
  'Content-Type': 'application/json',
  Authorization: `Bearer ${token}`,
  'X-Noroff-API-Key': API_KEY,
};

export async function authFetch(url, options = {}) {
  return fetch(url, {
    ...options,
    headers: headers,
    body: JSON.stringify(options.body),
  });
}

export async function authFetchUpdate(url) {
  try {
    const avatarUrlInput = document.getElementById('avatarUrlInput');

    const avatarUrl = avatarUrlInput.value;

    if (!avatarUrl) {
      console.error('Avatar URL is required');
      return;
    }

    const options = {
      method: 'PUT',
      headers: headers,
      body: JSON.stringify({
        avatar: {
          url: avatarUrl,
          alt: 'Profile picture',
        },
      }),
    };

    const response = await fetch(url, options);

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Response Error:', errorText);
      throw new Error(response.statusText);
    }

    const json = await response.json();
    return json.data;
  } catch (error) {
    console.error('Failed to update avatar:', error);
    throw new Error(error);
  }
}
