import { searchFetch } from '../api/listings/searchFetch';
import { listingTemplate } from '../templates/listingTemplate';
// import { searchFunction } from '../handlers/searchFunction';

function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

export async function searchResults() {
  const searchQuery = getQueryParam('search');
  const searchResultsContainer = document.getElementById('listingsContainer');
  searchResultsContainer.innerHTML = '';

  if (!searchQuery) {
    return;
  }

  try {
    const searchResults = await searchFetch(searchQuery);

    // const listingsArray = searchResults;
    // console.log(searchResults);

    searchResults.forEach((searchQuery) => {
      const listingCard = listingTemplate(searchQuery);
      searchResultsContainer.append(listingCard);
    });
  } catch (error) {
    console.error(error);
  }
}
