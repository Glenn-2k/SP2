/**
 * Displays a message prompting the user to log in if they are not authenticated.
 *
 * If the provided token is falsy (i.e., the user is not logged in), the function clears all elements with the class 'noText'
 * and displays a message informing the user to log in to view the page. It also adds a 'Log in' button which opens a login modal.
 *
 * @param {string|null} token - The authentication token, if available. If null or undefined, the user is considered not logged in.
 * @returns {boolean} Returns false if the user is not logged in, otherwise returns true.
 *
 * @example
 * const token = load('token');
 * const isLoggedIn = notLoggedInText(token);
 * if (isLoggedIn) {
 *   // Proceed with page content
 * }
 */

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

/**
 * Hides the "New Listing" button if the user is not authenticated.
 *
 * If the provided token is falsy (i.e., the user is not logged in), the function hides the button
 * with the ID 'newListingButton' by adding the 'd-none' class to it.
 *
 * @param {string|null} token - The authentication token, if available. If null or undefined, the user is considered not logged in.
 * @returns {void}
 *
 * @example
 * const token = load('token');
 * notLoggedInButton(token);
 */

export function notLoggedInButton(token) {
  if (!token) {
    const newListingButton = document.getElementById('newListingButton');
    if (newListingButton) {
      newListingButton.classList.add('d-none');
    }
  }
}

/**
 * Toggles the visibility of navigation elements based on the user's authentication status.
 *
 * If the user is not logged in (token is falsy), all elements with the class 'hiddenNav' will be hidden by adding the 'd-none' class.
 * If the user is logged in (token is truthy), those elements will be shown by removing the 'd-none' class.
 *
 * @param {string|null} token - The authentication token, if available. If null or undefined, the user is considered not logged in.
 * @returns {void}
 *
 * @example
 * const token = load('token');
 * notLoggedIn(token);
 */

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
