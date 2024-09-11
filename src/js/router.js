// import { login } from './api/auth/login';
// import { login } from './api/auth/login';
// import { register } from './api/auth/register';
import { getListings } from './api/listings/getListings';
import { loginFormListener } from './handlers/loginFormListener';
import { registerFormListener } from './handlers/registerFormListener';
import { renderLimitListings } from './renders/renderLimitListings';
import { renderListings } from './renders/renderListings';

export default function router() {
  console.log('router.js');

  const path = location.pathname;

  if (path === '/' || path === '/index.html') {
    console.log('Home page');
    renderLimitListings();
    registerFormListener();
    loginFormListener();
  } else if (path === '/profile/index.html' || path === '/profile/') {
    loginFormListener();
    console.log('Profile page');
  } else if (path === '/listings/index.html' || path === '/listings/') {
    console.log('Listings page');
    loginFormListener();
    getListings();
    renderListings();
  }
}
