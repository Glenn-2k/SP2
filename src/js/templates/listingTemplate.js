import { renderSpecificListing } from '../renders/renderSpecificListing';
import { load } from '../storage';

/**
 * Creates an auction listing card element with the provided data.
 *
 * This function generates a Bootstrap card element with the auction's image, title, description, and end date.
 * It also adds a "Bid Now" button that triggers a modal when clicked, using the auction's ID.
 *
 * @param {Object} data - The data object containing information about the auction listing.
 * @param {string} data.title - The title of the auction listing.
 * @param {string} data.description - The description of the auction listing.
 * @param {Array} data.media - An array of media objects, where each object contains a `url` and `alt` attribute for the listing image.
 * @param {string} data.endsAt - The date and time when the auction ends.
 * @param {string} data.id - The ID of the auction listing, used for the "Bid Now" button.
 * @returns {HTMLElement} The generated card element.
 *
 * @example
 * const auctionData = {
 *   title: 'Vintage Lamp',
 *   description: 'A beautiful vintage lamp from the 1960s.',
 *   media: [{ url: 'https://example.com/lamp.jpg', alt: 'Vintage Lamp' }],
 *   endsAt: '2024-12-01T12:00:00Z',
 *   id: '12345'
 * };
 *
 * const cardElement = listingTemplate(auctionData);
 * document.body.appendChild(cardElement);
 */

export function listingTemplate(data) {
  const token = load('token');
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
  cardImage.src =
    data.media[0]?.url || 'https://fakeimg.pl/400x300?text=Placeholder';
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
  if (!token) {
    bidButton.textContent = 'View';
  }
  bidButton.addEventListener('click', () => {
    renderSpecificListing(data.id);
  });

  cardBody.append(cardTitle, cardEndsAt, cardText, bidButton);
  card.append(cardImage, cardBody);
  cardWrapper.append(card);

  return cardWrapper;
}
