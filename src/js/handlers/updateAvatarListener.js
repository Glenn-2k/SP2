import { updateAvatarFetch } from '../api/profileFetches/updateAvatar';
import { load } from '../storage';

export function updateAvatarHandler() {
  const form = document.getElementById('avatarForm');

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const storedProfile = load('profile');
    const storedProfileName = storedProfile.name;

    try {
      await updateAvatarFetch(storedProfileName);
      location.reload();
    } catch (error) {
      console.error('Failed to update avatar:', error);
    }
  });
}
