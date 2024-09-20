import { authFetch } from '../authFetch';
import { API_BASE, API_AUCTIONS } from '../constants';

/**
 * Fetches the profile wins for a specific user by their profile name.
 *
 * @param {string} profileName - The name of the profile to retrieve along with the user's wins data.
 * @returns {Promise<Object>} A promise that resolves to the profile data including the wins.
 * @throws Will throw an error if the fetch operation fails.
 *
 * @example
 * getProfileWins('JohnDoe')
 *   .then(profileWins => console.log('Profile Wins:', profileWins))
 *   .catch(error => console.error('Error fetching profile wins:', error));
 */

const method = 'GET';
const action = '/profiles';

export async function getProfileWins(profileName) {
  try {
    const response = await authFetch(
      `${API_BASE}${API_AUCTIONS}${action}/${profileName}/wins?_wins=true&_listings=true`,
      { method },
    );

    return response.json();
  } catch (error) {
    console.error('Failed to fetch profile:', error);
    throw error;
  }
}
