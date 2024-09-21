/**
 * Attaches a submit event listener to the search form, capturing the user's search query and redirecting to the listings page.
 *
 * On form submission, the function prevents the default form behavior and redirects the user to the listings page
 * with the search query included in the URL as a query parameter.
 *
 * @returns {HTMLFormElement} The search form element.
 *
 * @example
 * searchFunction();
 */

export function searchFunction() {
  const searchForm = document.getElementById('searchForm');
  const searchInput = document.getElementById('searchBar');

  searchForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const searchQuery = searchInput.value;

    const url = `/listings/index.html?search=${searchQuery}`;

    window.location.href = url;
  });

  return searchForm;
}
