import { getListings } from '../api/listings/getListings';
import { listingTemplate } from '../templates/listingTemplate';

const limit = 3;

export async function renderLimitListings() {
  const listingsContainer = document.getElementById('limitListingsContainer');
  listingsContainer.innerHTML = '';
  try {
    const listings = await getListings();

    listings.slice(0, limit).forEach((data) => {
      const listingCard = listingTemplate(data);
      listingsContainer.append(listingCard);
      console.log(data);
    });
  } catch (error) {
    console.error(error);
  }
}
