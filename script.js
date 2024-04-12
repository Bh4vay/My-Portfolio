ScrollReveal({
    reset:true,
    distance:'70px',
    duration:3500,
    delay:500
});

ScrollReveal().reveal('.home-content , .education , .heading , form',{origin:'top'});
ScrollReveal().reveal('.education-content , .achievement-list , .home-img',{origin:'down'});
ScrollReveal().reveal('.about-img, .project-container',{origin:'left'});
ScrollReveal().reveal('.about-content , .skill-container',{origin:'right'});


function toggleMenu() {
    var navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active'); // Toggle the active class on the navbar
    navbar.classList.toggle('show'); // Add show class for smooth transition
}

// Show/hide hamburger icon based on screen size
function toggleHamburger() {
    var hamburger = document.querySelector('.hamburger');
    if (window.innerWidth <= 768) { // Adjust breakpoint as needed
        hamburger.style.display = 'block'; // Show hamburger icon on small screens
    } else {
        hamburger.style.display = 'none'; // Hide hamburger icon on larger screens
    }
}

window.onload = toggleHamburger;
window.onresize = toggleHamburger;

// Close menu when clicking outside
window.addEventListener('click', function(event) {
    var navbar = document.querySelector('.navbar');
    var hamburger = document.querySelector('.hamburger');
    if (!navbar.contains(event.target) && !hamburger.contains(event.target)) {
        navbar.classList.remove('active');
        navbar.classList.remove('show'); // Remove show class for smooth transition
    }
});
