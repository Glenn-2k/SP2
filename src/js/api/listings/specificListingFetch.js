import { load } from '../../storage';
import { authFetch } from '../authFetch';
import { API_BASE, API_AUCTIONS, API_KEY } from '../constants';

const token = load('token');
const headers = {
  'Content-Type': 'application/json',
  Authorization: `Bearer ${token}`,
  'X-Noroff-API-Key': API_KEY,
};

const action = '/listings';

export async function authFetchId(id) {
  try {
    const response = await authFetch(
      `${API_BASE}${API_AUCTIONS}${action}/${id}?_seller=true&_bids=true`,
      {
        headers: headers,
      },
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Response Error:', errorText);
      throw new Error(response.statusText);
    }

    const json = await response.json();
    return json.data;
  } catch (error) {
    console.error('Failed to get user:', error);
    throw new Error(error);
  }
}
