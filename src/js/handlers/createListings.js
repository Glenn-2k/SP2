import { createListing } from '../api/listings/createListingFetch';

/**
 * Handles the submission of new listing forms and creates a new listing.
 *
 * Adds a submit event listener to each form with the class 'newListingForm'.
 * On form submission, it retrieves the title, description, media URL, and end date from the form.
 * If all fields are filled, it sends a request to create a new listing using the provided data.
 *
 * @returns {void}
 *
 * @example
 * createListingsHandler();
 */

export async function createListingsHandler() {
  const newListingForm = document.querySelectorAll('.newListingForm');
  newListingForm.forEach((newListingForm) => {
    newListingForm.addEventListener('submit', async (event) => {
      event.preventDefault();

      let title = event.target.itemName.value.trim();
      let description = event.target.description.value.trim();
      let mediaUrl = event.target.imageGallery.value.trim();
      let endsAt = event.target.deadline.value.trim();

      if (title && description && mediaUrl && endsAt) {
        try {
          const response = await createListing({
            title,
            description,
            media: [{ url: mediaUrl, alt: title }],
            endsAt,
          });

          if (!response) {
            console.error('Failed to create listing');
          }
          window.location.reload();
        } catch (error) {
          console.error('Failed to create listing:', error);
        }
      }
    });
  });
}
