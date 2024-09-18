import { authFetchBid } from '../api/authFetch';
import { API_BASE, API_AUCTIONS } from '../api/constants';
import { validateBid } from '../helpers/validateBid';

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
    // displaySuccessMessage('Bid placed successfully');
    location.reload();
  } catch (error) {
    console.error('Failed to place bid:', error);
  }
  console.log('fetch ville ha kjørt no');
}
