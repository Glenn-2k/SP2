import { authFetchBid } from '../api/authFetch';
import { API_BASE, API_AUCTIONS } from '../api/constants';

/* eslint-disable no-undef */
export async function placeBid(id) {
  const amountInput = document.getElementById('bidAmount');

  if (!amountInput) {
    console.error('Bid amount input field not found.');
    return;
  }
  const amountOfBid = parseInt(amountInput.value);

  const url = `${API_BASE}${API_AUCTIONS}/listings/${id}/bids`;

  try {
    await authFetchBid(url, amountOfBid);
    // location.reload();
  } catch (error) {
    console.log('Failed to place bid:', error);
  }
}

const form = document.getElementById('bidForm');

if (form) {
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    await placeBid(id);
  });
} else {
  console.error('Bid form not found');
}
