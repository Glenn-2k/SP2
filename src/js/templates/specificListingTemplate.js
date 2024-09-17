import * as bootstrap from 'bootstrap';

export function specificListingTemplate(data) {
  console.log('Glenn er kul');
  const modalContent = document.getElementById('auctionModalContent');

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
  timeLeftValue.id = data.endsAt;

  timeLeft.append(timeLeftLabel, timeLeftValue);

  const highestBidder = document.createElement('div');
  highestBidder.classList.add('mt-3');

  const highestBidderLabel = document.createElement('strong');
  highestBidderLabel.textContent = 'Highest bidder:';
  const highestBidderButton = document.createElement('button');
  highestBidderButton.classList.add('btn', 'btn-secondary', 'btn-sm');
  highestBidderButton.textContent = 'Batman';

  highestBidder.append(highestBidderLabel, highestBidderButton);

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
    highestBidder,
    biddingHistory,
    bidForm,
  );

  modalContent.append(modalHeader, modalBody);
  //   modalContainer.append(modalHeader, modalBody);
  //   modalContainer.append(modalContent);
  //   specificWrapper.append(modalContainer);

  const modal = bootstrap.Modal.getInstance(
    document.getElementById('auctionModal'),
  );
  if (modal) {
    modal.show();
  } else {
    console.error('Modal not found or not initialized');
  }

  return modalContent;
}
