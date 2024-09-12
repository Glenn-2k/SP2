import { getProfileWins } from '../api/profileFetches/getProfileWins';
import { load } from '../storage';
import { listingTemplate } from '../templates/listingTemplate';

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
