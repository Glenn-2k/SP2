// Import our custom CSS
import '../scss/styles.scss';

// Import all of Bootstrap's JS
// eslint-disable-next-line no-unused-vars
import * as bootstrap from 'bootstrap';

// Import custom JS

import router from './router';
import { getListings } from './api/listings/getListings.js';
import { renderListings } from './renders/renderListings.js';
// import { getListing } from './api/listings/getListing.js';

router();

getListings();
renderListings();
// getListing();
