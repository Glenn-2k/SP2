import { createListing } from '../api/listings/createListingFetch';

export async function createListingsHandler() {
  const newListingForm = document.querySelector('.newListingForm');
  newListingForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    let title = event.target.itemName.value.trim();
    let description = event.target.description.value.trim();
    let mediaUrl = event.target.imageGallery.value.trim();
    let endsAt = event.target.deadline.value.trim();

    console.log('listingform:', newListingForm);

    if (title && description && mediaUrl && endsAt) {
      try {
        const response = await createListing({
          title,
          description,
          media: [{ url: mediaUrl, alt: title }],
          endsAt,
        });
        console.log(response);

        if (!response) {
          console.error('Failed to create listing');
        }
        window.location.reload();
      } catch (error) {
        console.error('Failed to create listing:', error);
      }
    }
  });
}
