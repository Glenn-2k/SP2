import { specificListingTemplate } from '../templates/specificListingTemplate';
import { authFetchId } from '../api/listings/specificListingFetch';
import { placeBid } from '../handlers/placeBid';

export async function renderSpecificListing(id) {
  const listingData = await authFetchId(id);

  specificListingTemplate(listingData);

  console.log('listingData:', listingData);
  const form = document.getElementById('bidForm');

  if (form) {
    form.addEventListener('submit', async (event) => {
      event.preventDefault();

      await placeBid(id, listingData);
    });
  } else {
    console.error('Bid form not found');
  }
}
