import { API_BASE, API_AUCTIONS } from '../constants';

const listings = '/listings';

export async function getListings() {
  const url = `${API_BASE}${API_AUCTIONS}${listings}`;

  const response = await fetch(url);
  const results = await response.json();

  console.log(results);
  return results.data;
}
