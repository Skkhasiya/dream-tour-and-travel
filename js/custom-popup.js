const galleryImages = document.querySelectorAll('.gallery img');
const popup = document.getElementById('popup');
const popupImg = document.getElementById('popupImg');
const caption = document.getElementById('caption');
const closeBtn = document.getElementById('closeBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const popupThumbnails = document.getElementById('popupThumbnails');

let currentIndex = 0;

// Create thumbnails inside popup
galleryImages.forEach((img, index) => {
	const thumb = document.createElement('img');
	thumb.src = img.src;
	thumb.dataset.index = index;
	popupThumbnails.appendChild(thumb);

	thumb.addEventListener('click', () => openPopup(index));
});

const popupThumbImages = popupThumbnails.querySelectorAll('img');

// Open popup
function openPopup(index) {
	currentIndex = index;
	popup.classList.add('active');
	updatePopup();
}

function updatePopup() {
	popupImg.src = galleryImages[currentIndex].src;
	caption.textContent = galleryImages[currentIndex].dataset.caption;

	// Highlight active thumbnail
	popupThumbImages.forEach(thumb => thumb.classList.remove('active'));
	popupThumbImages[currentIndex].classList.add('active');
}

// Event listeners for main gallery
galleryImages.forEach((img, index) => {
	img.addEventListener('click', () => openPopup(index));
});

// Close popup (ONLY with close button or ESC)
closeBtn.addEventListener('click', () => popup.classList.remove('active'));

// Navigation
prevBtn.addEventListener('click', () => {
	currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
	updatePopup();
});

nextBtn.addEventListener('click', () => {
	currentIndex = (currentIndex + 1) % galleryImages.length;
	updatePopup();
});

// Keyboard support
document.addEventListener('keydown', (e) => {
	if (!popup.classList.contains('active')) return;
	if (e.key === "ArrowRight") nextBtn.click();
	if (e.key === "ArrowLeft") prevBtn.click();
	if (e.key === "Escape") closeBtn.click();
});