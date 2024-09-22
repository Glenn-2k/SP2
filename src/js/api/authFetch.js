import { load } from '../storage/index';
import { API_KEY } from './constants';

const token = load('token');
const headers = {
  'Content-Type': 'application/json',
  Authorization: `Bearer ${token}`,
  'X-Noroff-API-Key': API_KEY,
};

/**
 * A custom fetch function that performs an authenticated request with the provided URL and options.
 *
 * @param {string} url - The URL to send the request to.
 * @param {Object} [options={}] - Optional request options, such as body content.
 * @param {string} [fetchMethod='GET'] - The HTTP method to use for the request (e.g., 'GET', 'POST', 'PUT').
 * @returns {Promise<Response>} The fetch response object.
 *
 * @example
 * const url = 'https://api.example.com/resource';
 * const options = {
 *   body: { key: 'value' }
 * };
 * authFetch(url, options, 'POST')
 *   .then(response => response.json())
 *   .then(data => console.log(data))
 *   .catch(error => console.error('Error:', error));
 */

export async function authFetch(url, options = {}, fetchMethod = 'GET') {
  return fetch(url, {
    headers: headers,
    body: JSON.stringify(options.body),
    method: fetchMethod,
  });
}

export async function authFetchNewListing(
  url,
  options = {},
  fetchMethod = 'POST',
) {
  return fetch(url, {
    headers: headers,
    body: JSON.stringify(options),
    method: fetchMethod,
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

export async function authFetchBid(url, amount) {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({
        amount: amount,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Failed to place bid:', errorData);
      return;
    }

    const data = await response.json();

    if (!response.ok) {
      if (response.status === 400 && data.errors && data.errors.amount) {
        throw new Error(data.errors.amount);
      } else {
        throw new Error(data.message || 'Failed to place bid');
      }
    }

    alert('Bid placed successfully');

    return data;
  } catch (error) {
    console.error('Failed to place bid:', error);
    throw new Error(error);
  }
}
