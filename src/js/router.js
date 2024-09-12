// import { login } from './api/auth/login';
// import { register } from './api/auth/register';
import { getListings } from './api/listings/getListings';
import { loginFormListener } from './handlers/loginFormListener';
import { logout } from './handlers/logout';
import { registerFormListener } from './handlers/registerFormListener';
import { renderLimitListings } from './renders/renderLimitListings';
import { renderListings } from './renders/renderListings';
import { renderProfile } from './renders/renderProfile';
import { renderProfileListings } from './renders/renderProfileListings';
import { renderProfileWins } from './renders/renderProfileWins';

export default function router() {
  console.log('router.js');

  const path = location.pathname;

  if (path === '/' || path === '/index.html') {
    console.log('Home page');
    loginFormListener();
    renderLimitListings();
    registerFormListener();
    logout();
  } else if (path === '/profile/index.html' || path === '/profile/') {
    loginFormListener();
    registerFormListener();
    renderProfile();
    renderProfileListings();
    renderProfileWins();
    logout();
    console.log('Profile page');
  } else if (path === '/listings/index.html' || path === '/listings/') {
    console.log('Listings page');
    loginFormListener();
    getListings();
    renderListings();
    registerFormListener();
    logout();
  }
}
