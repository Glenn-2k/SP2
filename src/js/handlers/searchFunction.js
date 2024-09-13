// function getQueryParam(param) {
//   const urlParams = new URLSearchParams(window.location.search);
//   return urlParams.get(param);
// }

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
