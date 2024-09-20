import { API_BASE, API_AUCTIONS } from '../constants';

const listings = '/listings';

/**
 * Fetches a specific listing by its ID.
 *
 * @param {string} id - The ID of the listing to retrieve.
 * @returns {Promise<Object|null>} The listing data if successful, or null if an error occurs.
 *
 * @example
 * getListing('12345').then(data => console.log(data));
 */

export async function getListing(id) {
  try {
    const url = `${API_BASE}${API_AUCTIONS}${listings}/${id}`;
    const response = await fetch(url);

    console.log(response);

    const json = await response.json();

    return json.data;
  } catch (error) {
    console.error('getListing', error);
    return null;
  }
}
