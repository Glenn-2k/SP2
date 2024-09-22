import { getProfileListings } from '../api/profileFetches/getProfileListings';
import { load } from '../storage';
import { listingTemplate } from '../templates/listingTemplate';

const loader = document.getElementById('loader');

/**
 * Renders the active listings for the user's profile in the UI.
 *
 * This function fetches the active listings for the current user profile and displays them
 * in the container with the ID 'activeListingsContainer'. If no profile is found, the user is redirected to the homepage.
 *
 * A loading indicator is shown while fetching, and an error message is displayed if the listings fail to load.
 *
 * @returns {void}
 *
 * @example
 * renderProfileListings();
 */

export async function renderProfileListings() {
  loader.style.display = 'block';
  const profileListingsContainer = document.getElementById(
    'activeListingsContainer',
  );
  profileListingsContainer.innerHTML = '';

  const storedProfile = load('profile');
  const storedProfileName = storedProfile.name;

  if (!storedProfileName) {
    window.location.href = '/';
    return;
  }

  try {
    const profileListings = await getProfileListings(storedProfileName);

    loader.style.display = 'none';

    const listingsArray = profileListings.data.listings;

    listingsArray.forEach((data) => {
      const listingCard = listingTemplate(data);
      profileListingsContainer.append(listingCard);
    });
  } catch (error) {
    console.error(error);

    loader.style.display = 'none';
    profileListingsContainer.innerHTML =
      '<p>Error loading listings. Please try again later.</p>';
  }
}
