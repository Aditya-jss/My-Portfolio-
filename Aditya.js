// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// Section reveal on scroll
const sections = document.querySelectorAll('.section');

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY + window.innerHeight;

    sections.forEach(section => {
        if (scrollPosition > section.offsetTop + 100) {
            section.classList.add('active');
        }
    });
});
// Function to hide the loader and show the content once the page is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Simulate a loading delay for demonstration purposes
    setTimeout(function() {
        document.body.classList.remove("loading");
        document.body.classList.add("loaded");
    }, 800); // Adjust the time as needed
});
// Get the button
let scrollToTopBtn = document.getElementById("scrollToTopBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
scrollToTopBtn.addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
// JavaScript for automatic horizontal scroll
document.addEventListener("DOMContentLoaded", function () {
    const skillsContainer = document.querySelector(".skills-container");
    let scrollSpeed = 1; // Adjust this for faster/slower scrolling

    function autoScroll() {
        skillsContainer.scrollLeft += scrollSpeed;
        if (skillsContainer.scrollLeft >= skillsContainer.scrollWidth - skillsContainer.clientWidth) {
            skillsContainer.scrollLeft = 0; // Loop the scroll
        }
    }

    setInterval(autoScroll, 30); // Adjust the interval for smoother scrolling
});
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.carousel-button');
    const slides = document.querySelectorAll('.carousel-slide');
    
    buttons.forEach((button, index) => {
        button.addEventListener('click', () => {
            // Remove active class from all slides
            slides.forEach(slide => slide.classList.remove('active'));
            
            // Add active class to the clicked slide
            slides[index].classList.add('active');
            
            // Scroll to the active slide
            document.querySelector('.carousel-slides').style.transform = `translateX(-${index * 100}%)`;
        });
    });
    
    // Set the initial slide
    slides[0].classList.add('active');
});


