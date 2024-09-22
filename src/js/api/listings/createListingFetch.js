import { authFetchNewListing } from '../authFetch';
import { API_BASE, API_AUCTIONS } from '../constants';

/**
 * Creates a new listing using the provided listing data.
 *
 * @param {Object} listingData - The data for the new listing.
 * @returns {Promise<Object>} The response data from the API.
 *
 * @example
 * const listingData = {
 *   title: 'New Listing',
 *   description: 'A description for the listing',
 *   tags: ['tag1', 'tag2'],
 *   media: [{ url: 'https://example.com/image.jpg', alt: 'An image' }]
 * };
 * createListing(listingData).then(data => console.log(data));
 */

export async function createListing(listingData) {
  const url = `${API_BASE}${API_AUCTIONS}/listings`;

  if (!url) {
    console.error('Failed to make a listing');
    return;
  }

  const data = await authFetchNewListing(url, listingData, 'POST');

  return data;
}
