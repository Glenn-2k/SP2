import { authFetch } from '../authFetch';
import { API_BASE, API_AUCTIONS } from '../constants';

const method = 'GET';
const action = '/profiles';
// const listings = '/listings';

export async function getProfileListings(profileName) {
  try {
    const response = await authFetch(
      `${API_BASE}${API_AUCTIONS}${action}/${profileName}?_wins=true&_listings=true`,
      { method },
    );

    return response.json();
  } catch (error) {
    console.error('Failed to fetch profile:', error);
    throw error;
  }
}
