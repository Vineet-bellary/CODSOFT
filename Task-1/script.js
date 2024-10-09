//This is for the gallery section.
document.addEventListener('DOMContentLoaded', function() {
    const galleryGrid = document.getElementById('gallery-grid');
    const images = Array.from(galleryGrid.getElementsByTagName('img'));
    // console.log(images);

    // Shuffle the array of images
    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    shuffle(images);

    // Clear the gallery grid and append shuffled images
    galleryGrid.innerHTML = '';
    images.forEach(image => {
        galleryGrid.appendChild(image);
    });
});

let slideIndex = 1; // Start from the first slide
showSlides(slideIndex); // Show the first slide

function plusSlides(n) {
    showSlides(slideIndex += n); // Change slide by n
}

function currentSlide(n) {
    showSlides(slideIndex = n); // Show specific slide
}

function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("mySlides");
    const captions = document.getElementsByClassName("caption");

    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // Hide all slides
        captions[i].style.display = "none"; // Hide all captions
    }

    slides[slideIndex - 1].style.display = "block"; // Show the current slide
    captions[slideIndex - 1].style.display = "block"; // Show the corresponding caption
}

// Call this function to start the slideshow (e.g., every 5 seconds)
setInterval(function() {
    plusSlides(1);
}, 5000); // Change slide every 5 seconds


function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active'); // Toggle the 'active' class
}

// Close the menu when a link is clicked
const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        const navMenu = document.querySelector('.nav-links');
        navMenu.classList.remove('active'); // Close the menu
    });
});

