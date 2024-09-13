import { load } from '../storage';

export function updateAvatarImage() {
  const form = document.getElementById('avatarForm');

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const avatarUrlInput = document.getElementById('avatarUrlInput');

    const avatarUrl = avatarUrlInput.value;

    if (!avatarUrl) {
      console.error('Avatar URL is required');
      return;
    }

    const storedProfile = load('profile');
    const storedProfileName = storedProfile.name;

    const avatarData = {
      avatar: {
        url: avatarUrl,
        alt: 'User avatar',
      },
    };

    try {
      const response = await updateAvatarImage(storedProfileName, avatarData);
      console.log('Avatar updated:', response);
      location.reload();
    } catch (error) {
      console.error('Failed to update avatar:', error);
    }
  });
}
