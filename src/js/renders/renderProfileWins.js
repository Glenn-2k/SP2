import { getProfileListings } from '../api/profileFetches/getProfileListings';
import { load } from '../storage';
import { listingTemplate } from '../templates/listingTemplate';

export async function renderProfileWins() {
  const profileListingsContainer = document.getElementById('myWinsContainer');
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

    if (listingsArray.length === 0) {
      profileListingsContainer.innerHTML = '<h2>No wins yet😔</h2>';
      return;
    }

    listingsArray.forEach((data) => {
      const listingCard = listingTemplate(data);
      profileListingsContainer.append(listingCard);
      console.log(data);
    });
  } catch (error) {
    console.error(error);
  }
}
