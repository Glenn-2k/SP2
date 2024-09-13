import { searchResults } from '../renders/renderSearch';
import { renderListings } from '../renders/renderListings'; // Funksjon for å vise alle listings

function isSearchActive() {
  const urlParams = new URLSearchParams(window.location.search);
  const searchQuery = urlParams.get('search');
  return !!searchQuery; // Returnerer true hvis det finnes en søkestreng
}

export function initPage() {
  if (isSearchActive()) {
    searchResults();
  } else {
    renderListings();
  }
}
