import { specificListingTemplate } from '../templates/specificListingTemplate';
import { authFetchId } from '../api/listings/specificListingFetch';
import { placeBid } from '../handlers/placeBid';

/**
 * Renders a specific auction listing and attaches the bid submission handler.
 *
 * This function fetches the data for a specific listing by its ID, renders it using the `specificListingTemplate`,
 * and attaches a submit event listener to the bid form. If the form is submitted, it triggers the `placeBid` function.
 *
 * @param {string} id - The ID of the auction listing to render.
 * @returns {void}
 *
 * @example
 * renderSpecificListing('12345');
 */

export async function renderSpecificListing(id) {
  const listingData = await authFetchId(id);

  specificListingTemplate(listingData);

  console.log('listingData:', listingData);
  const form = document.getElementById('bidForm');

  if (form) {
    form.addEventListener('submit', async (event) => {
      event.preventDefault();

      await placeBid(id, listingData);
    });
  } else {
    console.error('Bid form not found');
  }
}
