import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const gallery = document.querySelector('.gallery');

const galleryMarkup = [];

for (let i = 0; i < galleryItems.length; i += 1) {
  const galleryItem = `<a class="gallery__item" href="${galleryItems[i].original}">
			<img
				class="gallery__image"
				src="${galleryItems[i].preview}"
				alt="${galleryItems[i].description}"
			/>
		</a>`;

  galleryMarkup.push(galleryItem);
}

console.log(galleryItems);

gallery.insertAdjacentHTML('beforeend', galleryMarkup.join(''));

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
