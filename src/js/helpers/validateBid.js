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
