import { authFetch } from '../authFetch';
import { API_BASE, API_AUCTIONS } from '../constants';

/**
 * Fetches the profile data for a specific user by their profile name.
 *
 * @param {string} profileName - The name of the profile to retrieve.
 * @returns {Promise<Object>} A promise that resolves to the profile data.
 * @throws Will throw an error if the fetch operation fails.
 *
 * @example
 * getProfile('JohnDoe')
 *   .then(profile => console.log('Profile data:', profile))
 *   .catch(error => console.error('Error fetching profile:', error));
 */

const method = 'GET';
const action = '/profiles';

export async function getProfile(profileName) {
  try {
    const response = await authFetch(
      `${API_BASE}${API_AUCTIONS}${action}/${profileName}`,
      { method },
    );

    return response.json();
  } catch (error) {
    console.error('Failed to fetch profile:', error);
    throw error;
  }
}
