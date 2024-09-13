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
    profileAvatar.src = '../images/placeholderProfile.svg';
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
