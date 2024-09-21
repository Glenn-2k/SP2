import { getProfile } from '../api/profileFetches/getProfile';
import { load } from '../storage';
import { profileTemplate } from '../templates/profileTemplate';

/**
 * Renders the user's profile information in the UI.
 *
 * This function loads the stored user profile, retrieves the profile details using `getProfile`, and displays the profile
 * information in the container with the ID 'profileContainer'. If no stored profile is found, the user is redirected to the homepage.
 *
 * @returns {void}
 *
 * @example
 * renderProfile();
 */

export async function renderProfile() {
  const storedProfile = load('profile');
  const storedProfileName = storedProfile.name;

  if (!storedProfileName) {
    window.location.href = '/';
    return;
  }

  try {
    const profile = await getProfile(storedProfileName);

    const profileContainer = document.getElementById('profileContainer');
    profileContainer.innerHTML = '';

    const profileData = await profileTemplate(profile.data);
    profileContainer.append(profileData);
  } catch (error) {
    console.error('Failed to render profile:', error);
  }
}
