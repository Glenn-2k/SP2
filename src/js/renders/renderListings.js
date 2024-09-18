import { getListings } from '../api/listings/getListings';
import { listingTemplate } from '../templates/listingTemplate';

export async function renderListings() {
  const listingsContainer = document.getElementById('listingsContainer');
  listingsContainer.innerHTML = '';

  try {
    const listings = await getListings();
    listings.forEach((data) => {
      const listingCard = listingTemplate(data);
      listingsContainer.append(listingCard);
    });
  } catch (error) {
    console.error(error);
  }
}
