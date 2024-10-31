export function renderGallery(images) {
    const galleryContainer = document.querySelector('.gallery');
    galleryContainer.innerHTML = images.map(image => `
        <div class="image-card">
            <a href="${image.largeImageURL}">
                <img src="${image.webformatURL}" alt="${image.tags}" loading="lazy" />
            </a>
            <div class="image-info">
                <span>👍 ${image.likes}</span>
                <span>💬 ${image.comments}</span>
                <span>👁 ${image.views}</span>
                <span>⬇ ${image.downloads}</span>
            </div>
        </div>
    `).join('');
}


export function showError(message) {
    iziToast.error({
        title: 'Error',
        message: message,
        position: 'topRight',
        color: 'red',
    });
}



