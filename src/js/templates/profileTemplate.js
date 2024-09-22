/**
 * Creates a profile UI element with user data, including avatar, name, credits, and buttons for actions.
 *
 * This function generates a Bootstrap container with the user's profile information, including the avatar, name, credits,
 * and the number of listed items. It also provides buttons to change the avatar and create a new listing. If no avatar URL
 * is provided or the avatar URL matches the default placeholder, a fallback avatar is used.
 *
 * @param {Object} data - The data object containing user profile information.
 * @param {string} data.name - The user's name.
 * @param {Object} data.avatar - The user's avatar object containing the avatar URL.
 * @param {string} data.avatar.url - The URL of the user's avatar.
 * @param {number} data.credits - The user's available credits.
 * @param {Object} data._count - An object containing count information.
 * @param {number} data._count.listings - The number of items listed by the user.
 * @returns {HTMLElement} The generated profile UI element.
 *
 * @example
 * const profileData = {
 *   name: 'John Doe',
 *   avatar: { url: 'https://example.com/avatar.jpg' },
 *   credits: 100,
 *   _count: { listings: 10 }
 * };
 *
 * const profileElement = profileTemplate(profileData);
 * document.body.appendChild(profileElement);
 */

export async function profileTemplate(data) {
  console.log(data);
  const profileWrapper = document.createElement('div');
  profileWrapper.classList.add('container', 'mt-5', 'text-center');

  const profileRow = document.createElement('div');
  profileRow.classList.add('row', 'justify-content-center');

  const profileCol = document.createElement('div');
  profileCol.classList.add('col-md-4');

  const profileAvatar = document.createElement('img');
  profileAvatar.classList.add('rounded-circle', 'mb-4', 'profile-avatar');
  profileAvatar.src = data.avatar.url;
  if (
    data.avatar.url === null ||
    data.avatar.url === '' ||
    data.avatar.url === undefined ||
    data.avatar.url ===
      'https://images.unsplash.com/photo-1579547945413-497e1b99dac0?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=80&h=400&w=400'
  ) {
    profileAvatar.src = '../../images/avatar.png';
  }
  profileAvatar.alt = 'Profile Avatar';

  const changeAvatarButton = document.createElement('button');
  changeAvatarButton.textContent = 'Change Avatar';
  changeAvatarButton.dataset.bsToggle = 'modal';
  changeAvatarButton.dataset.bsTarget = '#avatarModal';
  changeAvatarButton.classList.add(
    'btn',
    'btn-primary',
    'd-block',
    'mt-4',
    'mx-auto',
  );

  const profileName = document.createElement('h4');
  profileName.classList.add('mt-5');
  profileName.textContent = data.name;

  const profileCreditsListed = document.createElement('p');
  profileCreditsListed.classList.add('text-body-secondary');
  profileCreditsListed.textContent = `Listed Credits: ${data.credits} | Listed items: ${data._count.listings}`;

  const newListingButton = document.createElement('button');
  newListingButton.classList.add('btn', 'btn-primary', 'mt-4', 'mb-5');
  newListingButton.textContent = '\u002B New Listing';
  newListingButton.dataset.bsToggle = 'modal';
  newListingButton.dataset.bsTarget = '#newListingModal';

  profileCol.append(
    profileAvatar,
    changeAvatarButton,
    profileName,
    profileCreditsListed,
    newListingButton,
  );
  profileRow.append(profileCol);
  profileWrapper.append(profileRow);

  return profileWrapper;
}
