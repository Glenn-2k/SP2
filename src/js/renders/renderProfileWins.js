import { getProfileWins } from '../api/profileFetches/getProfileWins';
import { load } from '../storage';
import { listingTemplate } from '../templates/listingTemplate';

/**
 * Renders the user's winning auction listings in the UI.
 *
 * This function fetches and displays the user's auction wins in the container with the ID 'myWinsContainer'.
 * If no profile is found, the user is redirected to the homepage. If no wins are found, a message is displayed.
 *
 * @returns {void}
 *
 * @example
 * renderProfileWins();
 */

export async function renderProfileWins() {
  const myWinsContainer = document.getElementById('myWinsContainer');
  myWinsContainer.innerHTML = '';

  const storedProfile = load('profile');
  const storedProfileName = storedProfile.name;

  if (!storedProfileName) {
    window.location.href = '/';
    return;
  }

  try {
    const myWins = await getProfileWins(storedProfileName);

    console.log('myWins:', myWins);

    const winningsArray = myWins.data;

    if (winningsArray.length === 0) {
      myWinsContainer.innerHTML = '<h2>No wins yet.. 😔</h2>';
      return;
    }

    winningsArray.forEach((data) => {
      const listingCard = listingTemplate(data);
      myWinsContainer.append(listingCard);
      console.log(data);
    });
  } catch (error) {
    console.error(error);
  }
}
