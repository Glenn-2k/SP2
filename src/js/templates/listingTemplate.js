// import { renderSpecificListing } from '../renders/renderSpecificListing';

// export function listingTemplate(data) {
//   const cardWrapper = document.createElement('div');
//   cardWrapper.classList.add(
//     'col-lg-3',
//     'col-md-4',
//     'col-sm-6',
//     'mb-4',
//     'd-flex',
//   );

//   const card = document.createElement('div');
//   card.classList.add('card', 'h-100', 'card-size');

//   const cardImage = document.createElement('img');
//   cardImage.classList.add('card-img-top', 'img-fluid', 'cardImageSize');
//   cardImage.src = data.media[0]?.url || 'https://placehold.co/350x200';
//   cardImage.alt = data.media[0]?.alt || 'Placeholder Image';

//   const cardBody = document.createElement('div');
//   cardBody.classList.add('card-body', 'd-flex', 'flex-column');

//   const cardTitle = document.createElement('h5');
//   cardTitle.classList.add('card-title');
//   cardTitle.textContent = data.title;

//   const cardEndsAt = document.createElement('p');
//   cardEndsAt.classList.add('text-body-secondary');
//   cardEndsAt.textContent = `Ends at:  ${new Date(data.endsAt).toLocaleString('en-GB', { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', timeZone: 'Europe/Oslo' })}`;

//   const cardText = document.createElement('p');
//   cardText.classList.add('card-text');
//   cardText.textContent = data.description;

//   const bidButton = document.createElement('a');
//   bidButton.classList.add('btn', 'btn-primary', 'mt-auto');
//   bidButton.dataset.bsToggle = 'modal';
//   bidButton.dataset.bsTarget = '#auctionModal';
//   bidButton.href = '#';
//   bidButton.textContent = 'Bid Now';
//   bidButton.addEventListener('click', () => {
//     renderSpecificListing(data.id);
//   });

//   cardBody.append(cardTitle, cardEndsAt, cardText, bidButton);

//   card.append(cardImage, cardBody);

//   cardWrapper.append(card);

//   return cardWrapper;
// }

import { renderSpecificListing } from '../renders/renderSpecificListing';

export function listingTemplate(data) {
  // Create a column wrapper for each card
  const cardWrapper = document.createElement('div');
  cardWrapper.classList.add('col-lg-3', 'col-md-4', 'col-sm-6', 'mb-4');

  // Create the card itself
  const card = document.createElement('div');
  card.classList.add('card', 'h-100'); // h-100 ensures the card takes full height of its container

  // Create the card image element
  const cardImage = document.createElement('img');
  cardImage.classList.add('card-img-top', 'img-fluid', 'cardImageSize');
  cardImage.src = data.media[0]?.url || 'https://placehold.co/350x200';
  cardImage.alt = data.media[0]?.alt || 'Placeholder Image';

  // Create the card body element
  const cardBody = document.createElement('div');
  cardBody.classList.add('card-body', 'd-flex', 'flex-column');

  // Create the card title
  const cardTitle = document.createElement('h5');
  cardTitle.classList.add('card-title');
  cardTitle.textContent = data.title;

  // Create the "Ends at" text
  const cardEndsAt = document.createElement('p');
  cardEndsAt.classList.add('text-body-secondary');
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

  // Create the card description text
  const cardText = document.createElement('p');
  cardText.classList.add('card-text');
  cardText.textContent = data.description;

  // Create the "Bid Now" button
  const bidButton = document.createElement('a');
  bidButton.classList.add('btn', 'btn-primary', 'mt-auto');
  bidButton.dataset.bsToggle = 'modal';
  bidButton.dataset.bsTarget = '#auctionModal';
  bidButton.href = '#';
  bidButton.textContent = 'Bid Now';

  // Attach an event listener to the button to trigger modal rendering
  bidButton.addEventListener('click', () => {
    renderSpecificListing(data.id);
  });

  // Append elements to the card body
  cardBody.append(cardTitle, cardEndsAt, cardText, bidButton);

  // Append card body and image to the card
  card.append(cardImage, cardBody);

  // Append the card to the column wrapper
  cardWrapper.append(card);

  // Return the full card wrapper (which includes the column class)
  return cardWrapper;
}
