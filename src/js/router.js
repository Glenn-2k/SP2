import { getListings } from './api/listings/getListings';
import { renderListings } from './renders/renderListings';

export default function router() {
  console.log('router.js');

  const path = location.pathname;

  if (path === '/' || path === '/index.html') {
    console.log('Home page');
  } else if (path === '/profile/index.html' || path === '/profile/') {
    console.log('Profile page');
  } else if (path === '/listings/index.html' || path === '/listings/') {
    console.log('Listings page');
    getListings();
    renderListings();
  }
}
