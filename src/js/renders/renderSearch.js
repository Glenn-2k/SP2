import { searchFetch } from '../api/listings/searchFetch';
import { listingTemplate } from '../templates/listingTemplate';

/**
 * Retrieves the value of a specified query parameter from the current URL.
 *
 * This function uses the `URLSearchParams` API to extract the value of the provided query parameter from the URL's query string.
 * If the parameter is not present, it returns `null`.
 *
 * @param {string} param - The name of the query parameter to retrieve.
 * @returns {string|null} The value of the query parameter, or null if it doesn't exist.
 *
 * @example
 * const searchQuery = getQueryParam('search');
 * console.log(searchQuery);  // Output: value of 'search' parameter or null
 */

function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

/**
 * Fetches and displays search results based on the user's query.
 *
 * This function retrieves the search query from the URL, fetches the relevant listings using the `searchFetch` function,
 * and renders the results in the container with the ID 'listingsContainer'.
 * If no search query is found, the function returns early without rendering any results.
 *
 * @returns {void}
 *
 * @example
 * searchResults();
 */

export async function searchResults() {
  const searchQuery = getQueryParam('search');
  const searchResultsContainer = document.getElementById('listingsContainer');
  searchResultsContainer.innerHTML = '';

  if (!searchQuery) {
    return;
  }

  try {
    const searchResults = await searchFetch(searchQuery);
    const loader = document.getElementById('loader');
    loader.style.display = 'none';

    searchResults.forEach((searchQuery) => {
      const listingCard = listingTemplate(searchQuery);
      searchResultsContainer.append(listingCard);
    });
  } catch (error) {
    console.error(error);
  }
}
