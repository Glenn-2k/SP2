import { getListings } from '../api/listings/getListings';
import { listingTemplate } from '../templates/listingTemplate';

const limit = 3;

const loader = document.getElementById('loader');

export async function renderLimitListings() {
  loader.style.display = 'block';
  const listingsContainer = document.getElementById('limitListingsContainer');
  listingsContainer.innerHTML = '';
  try {
    const listings = await getListings();

    loader.style.display = 'none';

    listings.slice(0, limit).forEach((data) => {
      const listingCard = listingTemplate(data);
      listingsContainer.append(listingCard);
      console.log(data);
    });
  } catch (error) {
    console.error(error);

    loader.style.display = 'none';
    listingsContainer.innerHTML =
      '<p>Error loading listings. Please try again later.</p>';
  }
}
