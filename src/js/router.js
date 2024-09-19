import { getListings } from './api/listings/getListings';
import { createListingsHandler } from './handlers/createListings';
import { loginFormListener } from './handlers/loginFormListener';
import { logout } from './handlers/logout';
import { registerFormListener } from './handlers/registerFormListener';
import { searchFunction } from './handlers/searchFunction';
import { updateAvatarHandler } from './handlers/updateAvatarListener';
import { initPage } from './helpers/isSearchActive';
import { notLoggedIn } from './helpers/notLoggedIn';
import { renderLimitListings } from './renders/renderLimitListings';
import { renderProfile } from './renders/renderProfile';
import { renderProfileListings } from './renders/renderProfileListings';
import { renderProfileWins } from './renders/renderProfileWins';
import { load } from './storage';

const token = load('token');

export default function router() {
  console.log('router.js');

  const path = location.pathname;

  if (path === '/' || path === '/index.html') {
    console.log('Home page');
    loginFormListener();
    renderLimitListings();
    registerFormListener();
    searchFunction();
    createListingsHandler();
    logout();
  } else if (path === '/profile/index.html' || path === '/profile/') {
    if (!notLoggedIn(token)) {
      return;
    }
    loginFormListener();
    registerFormListener();
    renderProfile();
    renderProfileListings();
    renderProfileWins();
    updateAvatarHandler();
    createListingsHandler();
    logout();
    console.log('Profile page');
  } else if (path === '/listings/index.html' || path === '/listings/') {
    console.log('Listings page');
    loginFormListener();
    getListings();
    createListingsHandler();
    registerFormListener();
    initPage();
    logout();
  }
}
