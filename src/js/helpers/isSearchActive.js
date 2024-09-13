import { searchResults } from '../renders/renderSearch';
import { renderListings } from '../renders/renderListings';

function isSearchActive() {
  const urlParams = new URLSearchParams(window.location.search);
  const searchQuery = urlParams.get('search');
  return !!searchQuery;
}

export function initPage() {
  if (isSearchActive()) {
    searchResults();
  } else {
    renderListings();
  }
}
