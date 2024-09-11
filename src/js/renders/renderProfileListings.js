import { getProfileListings } from '../api/profileFetches/getProfileListings';
import { load } from '../storage';
import { listingTemplate } from '../templates/listingTemplate';

export async function renderProfileListings() {
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

    console.log('Profile Listings:', profileListings);

    const listingsArray = profileListings.data.listings;

    listingsArray.forEach((data) => {
      const listingCard = listingTemplate(data);
      profileListingsContainer.append(listingCard);
      console.log(data);
    });
  } catch (error) {
    console.error(error);
  }
}
