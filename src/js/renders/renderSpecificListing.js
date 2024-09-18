import { specificListingTemplate } from '../templates/specificListingTemplate';
import { authFetchId } from '../api/listings/specificListingFetch';
import { placeBid } from '../handlers/placeBid';

export async function renderSpecificListing(id) {
  const listingData = await authFetchId(id);

  specificListingTemplate(listingData);

  placeBid();
}
