import { authFetch } from '../authFetch';
import { API_BASE, API_AUCTIONS } from '../constants';

/**
 * Fetches the profile data along with the user's listings and wins for a specific user by their profile name.
 *
 * @param {string} profileName - The name of the profile to retrieve along with listings and wins data.
 * @returns {Promise<Object>} A promise that resolves to the profile data with listings and wins.
 * @throws Will throw an error if the fetch operation fails.
 *
 * @example
 * getProfileListings('JohnDoe')
 *   .then(profileData => console.log('Profile with Listings and Wins:', profileData))
 *   .catch(error => console.error('Error fetching profile listings:', error));
 */

const method = 'GET';
const action = '/profiles';

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
