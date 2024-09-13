import { authFetch } from '../authFetch';
import { API_BASE, API_AUCTIONS } from '../constants';

const method = 'PUT';
const action = '/profiles';

export async function updateAvatarFetch(profileName, avatarData) {
  try {
    const response = await authFetch(
      `${API_BASE}${API_AUCTIONS}${action}/${profileName}`,
      { method },
      avatarData,
    );

    return response.json();
  } catch (error) {
    console.error('Failed to fetch profile:', error);
    throw error;
  }
}
