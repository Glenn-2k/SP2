import { getProfileListings } from '../api/profileFetches/getProfileListings';
import { load } from '../storage';
import { listingTemplate } from '../templates/listingTemplate';

const loader = document.getElementById('loader');

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

    console.log('Profile Listings:', profileListings);

    const listingsArray = profileListings.data.listings;

    listingsArray.forEach((data) => {
      const listingCard = listingTemplate(data);
      profileListingsContainer.append(listingCard);
      console.log(data);
    });
  } catch (error) {
    console.error(error);

    loader.style.display = 'none';
    profileListingsContainer.innerHTML =
      '<p>Error loading listings. Please try again later.</p>';
  }
}
