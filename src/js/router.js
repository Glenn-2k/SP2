import { getListings } from './api/listings/getListings';
import { createListingsHandler } from './handlers/createListings';
import { loginFormListener } from './handlers/loginFormListener';
import { logout } from './handlers/logout';
import { registerFormListener } from './handlers/registerFormListener';
import { searchFunction } from './handlers/searchFunction';
import { updateAvatarHandler } from './handlers/updateAvatarListener';
import { initPage } from './helpers/isSearchActive';
import {
  notLoggedIn,
  notLoggedInButton,
  notLoggedInText,
} from './helpers/notLoggedIn';
import { renderLimitListings } from './renders/renderLimitListings';
import { renderProfile } from './renders/renderProfile';
import { renderProfileListings } from './renders/renderProfileListings';
import { renderProfileWins } from './renders/renderProfileWins';
import { load } from './storage';

const token = load('token');

/**
 * A simple router function that handles navigation and rendering for different pages based on the current path.
 *
 * This function listens to the `location.pathname` to determine the current page and triggers specific functions
 * for rendering content, managing login, logout, and form listeners. The routing logic covers the home, profile,
 * and listings pages, and provides conditional checks for logged-in users.
 *
 * @returns {void}
 *
 * @example
 * router();
 */

export default function router() {
  console.log('router.js');

  const path = location.pathname;

  if (path === '/' || path === '/index.html') {
    console.log('Home page');
    notLoggedIn(token);
    loginFormListener();
    renderLimitListings();
    registerFormListener();
    searchFunction();
    createListingsHandler();
    logout();
  } else if (path === '/profile/index.html' || path === '/profile/') {
    if (!notLoggedInText(token)) {
      return;
    }
    notLoggedIn(token);
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
    if (notLoggedInButton(token)) {
      return;
    }
    console.log('Listings page');
    notLoggedIn(token);
    loginFormListener();
    getListings();
    createListingsHandler();
    registerFormListener();
    initPage();
    logout();
  }
}
