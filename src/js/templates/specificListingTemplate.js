import * as bootstrap from 'bootstrap';
import { load } from '../storage';

/**
 * Renders the details of a specific auction listing inside a modal, including the image, description, auction end date,
 * latest bidder, bidding history, and a form to submit a new bid.
 *
 * This function dynamically creates and populates the auction modal with relevant information about the auction,
 * including the ability to place a bid and view the bidding history. It also ensures that the modal is displayed properly.
 *
 * @param {Object} data - The data object containing information about the auction listing.
 * @param {string} data.title - The title of the auction listing.
 * @param {Array} data.media - An array of media objects, where each object contains a `url` and `alt` attribute for the listing image.
 * @param {string} data.description - The description of the auction listing.
 * @param {string} data.endsAt - The date and time when the auction ends.
 * @param {Array} data.bids - An array of bid objects, each containing a `bidder` and `amount`.
 * @param {Object} data.bids[].bidder - The bidder object, containing information about the user who placed the bid.
 * @param {string} data.bids[].bidder.name - The name of the bidder.
 * @param {number} data.bids[].amount - The bid amount.
 * @returns {void}
 *
 * @example
 * specificListingTemplate(auctionData);
 */

export function specificListingTemplate(data) {
  const modalContent = document.querySelectorAll('.auctionModalContainer');
  const token = load('token');

  modalContent.forEach((modalContent) => {
    modalContent.innerHTML = '';

    const modalHeader = document.createElement('div');
    modalHeader.classList.add('modal-header');

    const modalTitle = document.createElement('h5');
    modalTitle.id = 'auctionModalLabel';
    modalTitle.classList.add(
      'modal-title',
      'border-bottom',
      'border-secondary',
    );
    modalTitle.textContent = data.title;

    const modalCloseButton = document.createElement('button');
    modalCloseButton.classList.add('btn-close');
    modalCloseButton.setAttribute('data-bs-dismiss', 'modal');
    modalCloseButton.setAttribute('aria-label', 'Close');

    modalHeader.append(modalTitle, modalCloseButton);

    const modalBody = document.createElement('div');
    modalBody.classList.add('modal-body');

    const imageContainer = document.createElement('div');
    imageContainer.classList.add('text-center');

    const image = document.createElement('img');
    image.src =
      data.media[0]?.url || 'https://fakeimg.pl/400x300?text=Placeholder';
    image.alt = data.media[0]?.alt || 'Placeholder Image';
    image.classList.add('img-fluid', 'cardImageSize', 'mb-3', 'rounded');

    imageContainer.append(image);

    const sellerDescription = document.createElement('div');
    sellerDescription.classList.add('mt-3');

    const description = document.createElement('strong');
    description.textContent = 'Description:';
    const descriptionValue = document.createElement('span');
    descriptionValue.textContent = data.description;
    sellerDescription.append(description, descriptionValue);

    const auctionEndsAt = document.createElement('div');
    auctionEndsAt.classList.add('mt-3');

    const auctionEndsAtLabel = document.createElement('strong');
    auctionEndsAtLabel.textContent = 'Auction ends at: ';
    const auctionEndsAtValue = document.createElement('span');
    auctionEndsAtValue.textContent = `${new Date(data.endsAt).toLocaleString('en-GB', { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', timeZone: 'Europe/Oslo' })}`;

    auctionEndsAt.append(auctionEndsAtLabel, auctionEndsAtValue);

    const latestBidder = document.createElement('div');
    latestBidder.classList.add('mt-3');

    const latestBidderLabel = document.createElement('strong');
    latestBidderLabel.textContent = 'Latest bidder:';
    const latestBidderButton = document.createElement('button');
    latestBidderButton.classList.add('btn', 'btn-secondary', 'btn-sm');

    const bids = data.bids || [];
    let latestBidderList;
    let bidder = { name: 'No bids yet' };

    const sortedBids = bids.sort(
      (a, b) => new Date(b.created) - new Date(a.created),
    );

    if (sortedBids.length > 0) {
      const mostRecentBid = sortedBids[0];
      latestBidderList = mostRecentBid.bidder;
    } else {
      latestBidderList = bidder;
    }
    latestBidderButton.textContent = latestBidderList.name;

    latestBidder.append(latestBidderLabel, latestBidderButton);

    const biddingHistory = document.createElement('div');
    biddingHistory.classList.add('mt-3');

    const biddingHistoryLabel = document.createElement('strong');
    biddingHistoryLabel.textContent = 'Bidding history:';
    const biddingHistoryList = document.createElement('ul');
    biddingHistoryList.classList.add('list-unstyled');

    if (token) {
      const limitBids = bids.slice(0, 5);

      if (limitBids.length > 0) {
        limitBids.forEach((bid) => {
          const listItem = document.createElement('li');
          const bidderName = bid.bidder?.name;
          const bidAmount = bid.amount || 0;

          listItem.textContent = `${bidderName} - ${bidAmount} credits`;

          biddingHistoryList.append(listItem);
        });
      } else {
        const listItem = document.createElement('li');
        listItem.textContent = 'No bidding history yet';
        biddingHistoryList.append(listItem);
      }

      biddingHistory.append(biddingHistoryLabel, biddingHistoryList);
    } else {
      const notLoggedInMessage = document.createElement('p');
      notLoggedInMessage.textContent = 'Please log in to view bidding history';
      biddingHistory.append(notLoggedInMessage);
    }

    const bidForm = document.createElement('div');
    bidForm.classList.add('mt-3');

    const form = document.createElement('form');
    form.id = 'bidForm';

    const inputGroup = document.createElement('div');
    inputGroup.classList.add('input-group');
    if (!token) {
      inputGroup.style.display = 'none';
    }

    const input = document.createElement('input');
    input.type = 'number';
    input.classList.add('form-control');
    input.placeholder = 'Enter amount';
    input.name = 'bidAmount';
    input.id = 'bidAmount';

    const errorMessageElement = document.createElement('div');
    errorMessageElement.id = 'bidErrorMessage';
    errorMessageElement.style.display = 'none';

    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.classList.add('btn', 'btn-primary');
    submitButton.textContent = 'Submit bid';

    inputGroup.append(input, submitButton);
    form.append(inputGroup);
    bidForm.append(form);

    modalBody.append(
      imageContainer,
      sellerDescription,
      auctionEndsAt,
      latestBidder,
      biddingHistory,
      bidForm,
      errorMessageElement,
    );

    modalContent.append(modalHeader, modalBody);

    const modal = bootstrap.Modal.getInstance(
      document.getElementById('auctionModal'),
    );
    if (modal) {
      modal.show();
    } else {
      console.error('Modal not found or not initialized');
    }

    return modalContent;
  });
}
