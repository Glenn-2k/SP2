import { authFetchNewListing } from '../authFetch';
import { API_BASE, API_AUCTIONS } from '../constants';

export async function createListing(listingData) {
  const url = `${API_BASE}${API_AUCTIONS}/listings`;

  if (!url) {
    console.error('Failed to make a listing');
    return;
  }

  const data = await authFetchNewListing(url, listingData, 'POST');
  console.log(data);

  return data;
}
