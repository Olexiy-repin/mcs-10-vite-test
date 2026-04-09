import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

console.log(SimpleLightbox);

new SimpleLightbox('.js-gallery-link', {
  captionsData: 'alt',
  captionDelay: 500,
});
