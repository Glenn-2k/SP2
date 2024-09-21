import { searchResults } from '../renders/renderSearch';
import { renderListings } from '../renders/renderListings';

/**
 * Checks if a search query is present in the URL and returns a boolean indicating whether a search is active.
 *
 * This function parses the URL's query parameters and checks for the presence of a 'search' parameter.
 * If a 'search' parameter exists, the function returns true, indicating that a search is active.
 *
 * @returns {boolean} True if a search query is present in the URL, otherwise false.
 *
 * @example
 * if (isSearchActive()) {
 *   console.log('Search is active');
 * } else {
 *   console.log('No search is active');
 * }
 */

function isSearchActive() {
  const urlParams = new URLSearchParams(window.location.search);
  const searchQuery = urlParams.get('search');
  return !!searchQuery;
}

/**
 * Initializes the page by checking if a search query is active and rendering the appropriate content.
 *
 * If a search is active (determined by `isSearchActive()`), it calls `searchResults()` to render the search results.
 * Otherwise, it calls `renderListings()` to display the default listings.
 *
 * @returns {void}
 *
 * @example
 * initPage();
 */

export function initPage() {
  if (isSearchActive()) {
    searchResults();
  } else {
    renderListings();
  }
}
