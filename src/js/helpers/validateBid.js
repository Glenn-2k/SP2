/**
 * Validates the bid amount by comparing it with the latest bid and displays an error message if the bid is too low.
 *
 * If the bid amount is greater than the latest bid, the error message is hidden, and the function returns true.
 * If the bid amount is less than or equal to the latest bid, an error message is displayed, and the function returns false.
 *
 * @param {number} bidAmount - The amount of the new bid.
 * @param {number} latestBid - The amount of the latest bid to compare against.
 * @returns {boolean} Returns true if the bid is valid, otherwise false.
 *
 * @example
 * const isValid = validateBid(150, 100);
 * if (isValid) {
 *   console.log('Bid accepted');
 * } else {
 *   console.log('Bid too low');
 * }
 */

export function validateBid(bidAmount, latestBid) {
  const errorMessage = document.getElementById('bidErrorMessage');

  if (bidAmount > latestBid) {
    console.log(latestBid);
    errorMessage.display = 'none';
    return true;
  }
  console.log(bidAmount);

  errorMessage.textContent = 'Your bid is too low';
  errorMessage.style.display = 'block';
  errorMessage.style.color = 'red';

  return false;
}
