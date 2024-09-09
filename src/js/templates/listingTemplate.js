export function listingTemplate(data) {
  const cardWrapper = document.createElement('div');
  cardWrapper.classList.add('col-lg-3', 'col-md-4', 'mx-4', 'mb-2');

  const card = document.createElement('div');
  card.classList.add('card', 'h-100');

  const cardImage = document.createElement('img');
  cardImage.classList.add('card-img-top');
  cardImage.src = data.media[0]?.url;
  cardImage.alt = data.media[0]?.alt;

  const cardBody = document.createElement('div');
  cardBody.classList.add('card-body');

  const cardTitle = document.createElement('h5');
  cardTitle.classList.add('card-title');
  cardTitle.textContent = data.title;

  const cardTimeLeft = document.createElement('p');
  cardTimeLeft.classList.add('text-body-secondary');
  cardTimeLeft.textContent = `Time Left: ${data.endsAt}`;

  const cardText = document.createElement('p');
  cardText.classList.add('card-text');
  cardText.textContent = data.description;

  const bidButton = document.createElement('a');
  bidButton.classList.add('btn', 'btn-primary');
  bidButton.href = '#';
  bidButton.textContent = 'Bid Now';

  cardBody.append(cardTitle, cardTimeLeft, cardText, bidButton);

  card.append(cardImage, cardBody);

  cardWrapper.append(card);

  return cardWrapper;
}
