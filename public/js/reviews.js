const reviewFormHandler = async (event) => {
  event.preventDefault();
  console.log('please work');
  // Get the values of the form inputs
  const albumId = document.querySelector('#album-id').value;
  const rating = document.querySelector('#rating').value;
  const review_text = document.querySelector('#review-text').value;
  if (albumId && rating && review_text) {
    // Send a POST request to the API endpoint
    const response = await fetch(`/album/${albumId}/reviews`, {
      method: 'POST',
      body: JSON.stringify({ albumId, rating, review_text }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace(`/album/${albumId}`);
    } else {
      alert(response.statusText);
    }
  }
};
document.querySelector('#review-form').addEventListener('submit', reviewFormHandler);
