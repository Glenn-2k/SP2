// import * as getListings from '../api/listings/getListings';

export function listingTemplate(data) {
  const container = document.createElement('div');
  container.classList.add('container d-flex flex-wrap justify-content-center');

  const cardWrapper = document.createElement('div');
  cardWrapper.classList.add('col-lg-3 col-md-4 mx-4 mb-2');

  const card = document.createElement('div');
  card.classList.add('card h-100');

  const cardImage = document.createElement('img');
  cardImage.classList.add('card-img-top');
  cardImage.src = data.image;
  cardImage.alt = data.name;

  const cardBody = document.createElement('div');
  cardBody.classList.add('card-body');

  const cardTitle = document.createElement('h5');
  cardTitle.classList.add('card-title');
  cardTitle.textContent = data.name;

  const cardTimeLeft = document.createElement('p');
  cardText.classList.add('text-body-secondary');

  const cardText = document.createElement('p');
  cardText.classList.add('card-text');
  cardText.textContent = data.description;

  const bidButton = document.createElement('a');
  bidButton.classList.add('btn btn-primary');
  bidButton.href = '#';
  bidButton.textContent = 'Bid Now';

  cardBody.appendChild(cardTitle);
  cardBody.appendChild(cardTimeLeft);
  cardBody.appendChild(cardText);
  cardBody.appendChild(bidButton);

  card.appendChild(cardImage);
  card.appendChild(cardBody);

  cardWrapper.appendChild(card);

  container.appendChild(cardWrapper);

  return container;
}
