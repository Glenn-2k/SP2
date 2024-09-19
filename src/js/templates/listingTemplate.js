import { renderSpecificListing } from '../renders/renderSpecificListing';

export function listingTemplate(data) {
  const cardWrapper = document.createElement('div');
  cardWrapper.classList.add(
    'col-xl-3',
    'col-lg-4',
    'col-md-6',
    'col-sm-6',
    'mb-4',
  );

  const card = document.createElement('div');
  card.classList.add('card', 'h-100', 'mx-auto');

  const cardContainer = document.createElement('div');
  cardContainer.classList.add('card-container', 'mx-auto');

  const cardImage = document.createElement('img');
  cardImage.classList.add('card-img-top');
  cardImage.src = data.media[0]?.url || 'https://placehold.co/350x200';
  cardImage.alt = data.media[0]?.alt || 'Placeholder Image';

  const cardBody = document.createElement('div');
  cardBody.classList.add('card-body', 'd-flex', 'flex-column');

  const cardTitle = document.createElement('h5');
  cardTitle.classList.add('card-title');
  cardTitle.textContent = data.title;

  const cardEndsAt = document.createElement('p');
  cardEndsAt.classList.add('card-text', 'text-muted');
  cardEndsAt.textContent = `Ends at: ${new Date(data.endsAt).toLocaleString(
    'en-GB',
    {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      timeZone: 'Europe/Oslo',
    },
  )}`;

  const cardText = document.createElement('p');
  cardText.classList.add('card-text', 'flex-grow-1');
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
