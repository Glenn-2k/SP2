import { authFetchUpdate } from '../authFetch';
import { API_BASE, API_AUCTIONS } from '../constants';

const method = 'PUT';
const action = '/profiles';

/**
 * Updates the avatar for a specific user profile.
 *
 * @param {string} profileName - The name of the profile for which to update the avatar.
 * @param {Object} avatarData - An object containing the avatar data to be updated.
 * @returns {Promise<Response>} The response object from the update request.
 * @throws Will throw an error if the update request fails.
 *
 * @example
 * const avatarData = { avatar: 'https://example.com/avatar.jpg' };
 * updateAvatarFetch('JohnDoe', avatarData)
 *   .then(response => console.log('Avatar updated:', response))
 *   .catch(error => console.error('Failed to update avatar:', error));
 */

export async function updateAvatarFetch(profileName, avatarData) {
  try {
    const response = await authFetchUpdate(
      `${API_BASE}${API_AUCTIONS}${action}/${profileName}`,
      { method },
      avatarData,
    );

    return response;
  } catch (error) {
    console.error('Failed to fetch profile:', error);
    throw error;
  }
}
