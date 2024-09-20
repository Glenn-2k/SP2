export function notLoggedInText(token) {
  if (!token) {
    const noText = document.querySelectorAll('.noText');
    noText.forEach((noText) => (noText.innerHTML = ''));

    const notLoggedIn = document.createElement('div');
    notLoggedIn.classList.add('container', 'mt-5', 'text-center');

    const notLoggedInRow = document.createElement('div');
    notLoggedInRow.classList.add('row', 'justify-content-center');

    const notLoggedInCol = document.createElement('div');
    notLoggedInCol.classList.add('col-md-4');

    const notLoggedInMessage = document.createElement('h4');
    notLoggedInMessage.classList.add('mt-5');
    notLoggedInMessage.textContent =
      'You are not logged in. Please log in to view this page.';

    const notLoggedInButton = document.createElement('button');
    notLoggedInButton.classList.add('btn', 'btn-primary', 'mt-4', 'mb-5');
    notLoggedInButton.textContent = 'Log in';
    notLoggedInButton.dataset.bsToggle = 'modal';
    notLoggedInButton.dataset.bsTarget = '#loginModalToggle';
    notLoggedInCol.append(notLoggedInMessage, notLoggedInButton);
    notLoggedInRow.append(notLoggedInCol);
    notLoggedIn.append(notLoggedInRow);

    document.body.appendChild(notLoggedIn);

    return false;
  }

  return true;
}

export function notLoggedInButton(token) {
  if (!token) {
    const newListingButton = document.getElementById('newListingButton');
    if (newListingButton) {
      newListingButton.classList.add('d-none');
    }
  }
}

export function notLoggedIn(token) {
  if (!token) {
    document.querySelectorAll('.hiddenNav').forEach((hiddenNav) => {
      hiddenNav.classList.add('d-none');
    });
  } else {
    document.querySelectorAll('.hiddenNav').forEach((hiddenNav) => {
      hiddenNav.classList.remove('d-none');
    });
  }
}
