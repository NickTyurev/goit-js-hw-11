import { fetchImages } from './js/pixabay-api';
import { renderGallery, showError } from './js/render-functions';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const searchForm = document.querySelector('#search-form');
const galleryContainer = document.querySelector('.gallery');
const loader = document.getElementById('loader'); 
let lightbox = new SimpleLightbox('.gallery a');

searchForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const query = searchForm.elements['searchQuery']?.value.trim();
    
    if (!query) {
        showError('Please enter a valid search query');
        return;
    }


    loader.style.display = 'block'; 

    try {
        const images = await fetchImages(query);
        
        if (images.length === 0) {
            iziToast.show({
                title: 'No results found',
                message: 'Try a different search term',
                color: 'red',
            });
        } else {
            renderGallery(images);
            lightbox.refresh();
        }
    } catch (error) {
        showError('An error occurred while fetching images. Please try again.');
    } finally {
        loader.style.display = 'none'; 
    }
    
    searchForm.reset(); 
});