import * as bootstrap from 'bootstrap';

export function specificListingTemplate(data) {
  const modalContent = document.querySelectorAll('.auctionModalContainer');

  modalContent.forEach((modalContent) => {
    modalContent.innerHTML = '';

    const modalHeader = document.createElement('div');
    modalHeader.classList.add('modal-header');

    const modalTitle = document.createElement('h5');
    modalTitle.id = 'auctionModalLabel';
    modalTitle.classList.add('modal-title');
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
    image.src = data.media[0]?.url || 'https://placehold.co/350x200';
    image.alt = data.media[0]?.alt || 'Placeholder Image';
    image.classList.add('img-fluid');
    image.style.maxWidth = '50%';

    imageContainer.append(image);

    const sellerDescription = document.createElement('div');
    sellerDescription.classList.add('mt-3');

    const description = document.createElement('strong');
    description.textContent = 'Description:';
    const descriptionValue = document.createElement('span');
    descriptionValue.textContent = data.description;
    sellerDescription.append(description, descriptionValue);

    const timeLeft = document.createElement('div');
    timeLeft.classList.add('mt-3');

    const timeLeftLabel = document.createElement('strong');
    timeLeftLabel.textContent = 'Time left on auction:';
    const timeLeftValue = document.createElement('span');
    timeLeftValue.textContent = data.endsAt;

    timeLeft.append(timeLeftLabel, timeLeftValue);

    const latestBidder = document.createElement('div');
    latestBidder.classList.add('mt-3');

    const latestBidderLabel = document.createElement('strong');
    latestBidderLabel.textContent = 'Latest bidder:';
    const latestBidderButton = document.createElement('button');
    latestBidderButton.classList.add('btn', 'btn-secondary', 'btn-sm');

    const bids = data.bids || [];
    let bidder;
    if (bids.length > 0) {
      const firstBid = bids[0];
      bidder = firstBid.bidder;
    } else {
      bidder = { name: 'No bids yet' };
    }
    latestBidderButton.textContent = bidder.name;

    latestBidder.append(latestBidderLabel, latestBidderButton);

    const biddingHistory = document.createElement('div');
    biddingHistory.classList.add('mt-3');

    const biddingHistoryLabel = document.createElement('strong');
    biddingHistoryLabel.textContent = 'Bidding history:';
    const biddingHistoryList = document.createElement('ul');
    biddingHistoryList.classList.add('list-unstyled');

    const bidders = ['Batman', 'Joker', 'Robin', 'Harley Quinn'];
    bidders.forEach((bidder) => {
      const listItem = document.createElement('li');
      listItem.textContent = `${bidder} 1 credit`;
      biddingHistoryList.append(listItem);
    });

    biddingHistory.append(biddingHistoryLabel, biddingHistoryList);

    const bidForm = document.createElement('div');
    bidForm.classList.add('mt-3');

    const form = document.createElement('form');

    const inputGroup = document.createElement('div');
    inputGroup.classList.add('input-group');

    const input = document.createElement('input');
    input.type = 'text';
    input.classList.add('form-control');
    input.placeholder = 'Enter amount';

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
      timeLeft,
      latestBidder,
      biddingHistory,
      bidForm,
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
