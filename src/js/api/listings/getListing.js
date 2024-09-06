import { API_BASE, API_AUCTIONS } from '../constants';

const listings = '/listings';

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
