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
