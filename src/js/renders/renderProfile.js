import { getProfile } from '../api/profileFetches/getProfile';
import { load } from '../storage';
import { profileTemplate } from '../templates/profileTemplate';

export async function renderProfile() {
  const storedProfile = load('profile');
  const storedProfileName = storedProfile.name;

  console.log('storedProfileName:', storedProfileName);

  if (!storedProfileName) {
    window.location.href = '/';
    return;
  }

  try {
    const profile = await getProfile(storedProfileName);

    // console.log(profile.data.name);
    const profileContainer = document.getElementById('profileContainer');
    profileContainer.innerHTML = '';

    const profileData = await profileTemplate(profile.data);
    profileContainer.append(profileData);
  } catch (error) {
    console.error('Failed to render profile:', error);
  }
}
