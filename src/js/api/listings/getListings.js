import { API_BASE, API_AUCTIONS } from '../constants';

const listings = '/listings';
const isActive = '?_active=true';
const sortOrder = 'desc';
const sortBy = 'created';

/**
 * Fetches a list of auction listings, sorted and filtered by the provided parameters.
 *
 * @returns {Promise<Object[]>} A list of auction listings.
 *
 * @example
 * getListings().then(data => console.log(data)).catch(error => console.error(error));
 */

export async function getListings() {
  const url = `${API_BASE}${API_AUCTIONS}${listings}${isActive}&sort=${sortBy}&sortOrder=${sortOrder}`;
  console.log(url);
  const response = await fetch(url);
  const results = await response.json();
  console.log(results);

  return results.data;
}
