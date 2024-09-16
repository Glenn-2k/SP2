import { updateAvatarFetch } from '../api/profileFetches/updateAvatar';
import { load } from '../storage';

export function updateAvatarHandler() {
  const form = document.getElementById('avatarForm');

  form.addEventListener('submit', async (event) => {
    console.log('Avatar form submitted');
    event.preventDefault();

    const storedProfile = load('profile');
    const storedProfileName = storedProfile.name;

    try {
      const response = await updateAvatarFetch(storedProfileName);
      console.log('Avatar updated:', response);
      location.reload();
    } catch (error) {
      console.error('Failed to update avatar:', error);
    }
  });
}
