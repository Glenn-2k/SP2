import { API_BASE, API_AUCTIONS } from '../constants';

const listings = '/listings';

/**
 * Searches listings based on a query string.
 *
 * @param {string} searchQuery - The search query to find matching listings.
 * @returns {Promise<Object[]>} An array of matching listings.
 *
 * @example
 * searchFetch('example').then(results => console.log(results));
 */

export async function searchFetch(searchQuery) {
  try {
    const url = `${API_BASE}${API_AUCTIONS}${listings}/search?q=${searchQuery}`;

    const response = await fetch(url);
    const results = await response.json();

    return results.data;
  } catch (error) {
    console.error(error);
  }
}
