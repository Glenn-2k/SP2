import { updateAvatarFetch } from '../api/profileFetches/updateAvatar';
import { load } from '../storage';

/**
 * Attaches a submit event listener to the avatar update form and handles avatar updates.
 *
 * When the form is submitted, the function prevents the default behavior, retrieves the current user profile,
 * and attempts to update the avatar by calling the `updateAvatarFetch` function.
 * After a successful update, the page is reloaded to reflect the changes.
 *
 * @returns {void}
 *
 * @example
 * updateAvatarHandler();
 */

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
