import { getListings } from '../api/listings/getListings';
import { listingTemplate } from '../templates/listingTemplate';

const loader = document.getElementById('loader');

export async function renderListings() {
  loader.style.display = 'block';
  const listingsContainer = document.getElementById('listingsContainer');
  listingsContainer.innerHTML = '';

  try {
    const listings = await getListings();

    loader.style.display = 'none';
    listings.forEach((data) => {
      const listingCard = listingTemplate(data);
      listingsContainer.append(listingCard);
    });
  } catch (error) {
    console.error(error);

    loader.style.display = 'none';
    listingsContainer.innerHTML =
      '<p>Error loading listings. Please try again later.</p>';
  }
}
