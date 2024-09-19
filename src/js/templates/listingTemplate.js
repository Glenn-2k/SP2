import { renderSpecificListing } from '../renders/renderSpecificListing';

export function listingTemplate(data) {
  const cardWrapper = document.createElement('div');
  cardWrapper.classList.add('col-lg-3', 'col-md-4', 'mx-4', 'mb-2');

  const card = document.createElement('div');
  card.classList.add('card', 'h-100');

  const cardImage = document.createElement('img');
  cardImage.classList.add('card-img-top', 'cardImageSize');
  cardImage.src = data.media[0]?.url || 'https://placehold.co/350x200';
  cardImage.alt = data.media[0]?.alt || 'Placeholder Image';

  const cardBody = document.createElement('div');
  cardBody.classList.add('card-body', 'd-flex', 'flex-column');

  const cardTitle = document.createElement('h5');
  cardTitle.classList.add('card-title');
  cardTitle.textContent = data.title;

  const cardEndsAt = document.createElement('p');
  cardEndsAt.classList.add('text-body-secondary');
  cardEndsAt.textContent = `Ends at:  ${new Date(data.endsAt).toLocaleString('en-GB', { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', timeZone: 'Europe/Oslo' })}`;

  const cardText = document.createElement('p');
  cardText.classList.add('card-text');
  cardText.textContent = data.description;

  const bidButton = document.createElement('a');
  bidButton.classList.add('btn', 'btn-primary', 'mt-auto');
  bidButton.dataset.bsToggle = 'modal';
  bidButton.dataset.bsTarget = '#auctionModal';
  bidButton.href = '#';
  bidButton.textContent = 'Bid Now';
  bidButton.addEventListener('click', () => {
    renderSpecificListing(data.id);
  });

  cardBody.append(cardTitle, cardEndsAt, cardText, bidButton);

  card.append(cardImage, cardBody);

  cardWrapper.append(card);

  return cardWrapper;
}
