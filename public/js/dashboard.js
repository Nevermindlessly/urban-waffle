document.addEventListener('DOMContentLoaded', () => {
  const albumTitles = document.querySelectorAll('.album-title');

  albumTitles.forEach((title) => {
    title.addEventListener('click', (e) => {
      e.preventDefault();
      const albumId = e.target.dataset.albumId;
      window.location.href = `/api/reviews/album/${albumId}`;
    });
  });
});
