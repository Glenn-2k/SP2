import { API_BASE, API_AUCTIONS } from '../constants';

const listings = '/listings';
const isActive = '?_active=true';
const sortOrder = 'desc';
const sortBy = 'created';

export async function getListings() {
  const url = `${API_BASE}${API_AUCTIONS}${listings}${isActive}&sort=${sortBy}&sortOrder=${sortOrder}`;
  console.log(url);
  const response = await fetch(url);
  const results = await response.json();
  console.log(results);

  return results.data;
}
