import { API_BASE, API_AUCTIONS } from '../constants';

const listings = '/listings';

export async function searchFetch(searchQuery) {
  try {
    const url = `${API_BASE}${API_AUCTIONS}${listings}/search?q=${searchQuery}`;

    const response = await fetch(url);
    const results = await response.json();

    // console.log(results);

    return results.data;
  } catch (error) {
    console.error(error);
  }
}
