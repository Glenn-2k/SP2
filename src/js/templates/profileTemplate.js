export async function profileTemplate() {
  const profileWrapper = document.createElement('div');
  profileWrapper.classList.add('container', 'mt-5', 'text-center');

  const profileRow = document.createElement('div');
  profileRow.classList.add('row', 'justify-content-center');

  const profileCol = document.createElement('div');
  profileCol.classList.add('col-md-4');

  const profileAvatar = document.createElement('img');
  profileAvatar.classList.add('rounded-circle', 'mb-4', 'profile-avatar');
  profileAvatar.src = 'https://placehold.co/150x150';
  profileAvatar.alt = 'Profile Avatar';

  const changeAvatarButton = document.createElement('button');
  changeAvatarButton.classList.add(
    'btn',
    'btn-primary',
    'd-block',
    'mt-4',
    'mx-auto',
  );

  const profileName = document.createElement('h3');
  profileName.classList.add('mt-3');
  profileName.textContent = 'John Doe';

  const profileCreditsListed = document.createElement('p');
  profileCreditsListed.classList.add('text-body-secondary');

  const newListingButton = document.createElement('button');
  newListingButton.classList.add('btn', 'btn-primary', 'mt-4', 'mb-5');
  newListingButton.textContent = 'New Listing';
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
