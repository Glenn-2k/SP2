import { authFetchBid } from '../api/authFetch';
import { API_BASE, API_AUCTIONS } from '../api/constants';
import { validateBid } from '../helpers/validateBid';

/**
 * Places a bid on a specific auction listing.
 *
 * Retrieves the last bid on the listing and checks if the new bid is valid (higher than the previous one).
 * If valid, the bid is placed, and the page is reloaded. If not, an error is logged.
 *
 * @param {string} id - The ID of the auction listing.
 * @param {Object} data - The data object containing auction listing details, including previous bids.
 * @returns {Promise<void>} - This function does not return a value but performs the bid placement and reloads the page.
 *
 * @throws Will log an error if the bid amount input is not found or if the bid is too low.
 *
 * @example
 * placeBid('listing123', {
 *   bids: [{ amount: 100 }, { amount: 90 }]
 * });
 */

export async function placeBid(id, data) {
  console.log(data);
  const amountInput = document.getElementById('bidAmount');

  const lastBid = data.bids.length > 0 ? data.bids[0].amount : 0;

  if (!amountInput) {
    console.error('Bid amount input field not found.');
    return;
  }
  const amountOfBid = parseInt(amountInput.value);

  const url = `${API_BASE}${API_AUCTIONS}/listings/${id}/bids`;

  if (validateBid(amountOfBid, lastBid) === false) {
    console.error('Your bid is too low');
    return;
  }

  try {
    await authFetchBid(url, amountOfBid);
    location.reload();
  } catch (error) {
    console.error('Failed to place bid:', error);
  }
  console.log('fetch ville ha kjørt no');
}
