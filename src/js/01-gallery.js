import { galleryItems } from './gallery-items.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');

const galleryImages = galleryItems
  .map(
    ({ original, preview, description }) =>
      `<a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>`
  )
  .join(' ');

galleryEl.insertAdjacentHTML('beforeend', galleryImages);

const lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
});
