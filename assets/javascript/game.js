var rotate = 360;
$(".intro a[href^='#']").on("click", function(e) {
    e.preventDefault();

    var hash = this.hash;
 
    $('html, body').animate({
        scrollTop: $(hash).offset().top
    }, 1000, function(){
 
    window.location.hash = hash;
    });
});

$(".titleNav").on("click", function() {
    $(".fa-arrow-down").css("transform", "rotate(" + rotate +"deg)");
    $(".fa-arrow-down").css("transition-duration", ".4s");
});

window.sr = ScrollReveal();
sr.reveal('.titleH3', {
    duration: 1000, 
    origin: 'bottom',
    distance: '500px',
});
sr.reveal('.titleName', {
    duration: 1000,
    delay: 250, 
    origin: 'bottom',
    distance: '500px'
});
sr.reveal('.titleProfession', {
    duration: 1000, 
    delay: 450,
    origin: 'bottom',
    distance: '500px'
});
sr.reveal('.scrollNav', {
    duration: 1000, 
    delay: 650,
    origin: 'bottom',
    distance: '500px'
});
sr.reveal('.social', {
    duration: 1250,
    delay: 650,
    origin: 'left',
    distance: '200px'
});
sr.reveal('.emailCont', {
    duration: 1250,
    delay: 650,
    origin: 'right',
    distance: '200px'
});

sr.reveal('.aboutMeHeader', {
    duration: 1000,
    origin: 'top',
    distance: '200px'
});
sr.reveal('.forProfileImg', {
    duration: 1000,
    origin: 'top',
    distance: '200px'
});
sr.reveal('.aboutMeText', {
    duration: 1000,
    origin: 'bottom',
    distance: '200px'
});
sr.reveal('.experience', {
    duration: 1000,
    origin: 'bottom',
    distance: '200px'
});


sr.reveal('.anchorImage', {
    duration: 1000,
    origin: 'bottom',
    distance: '200px'
});
sr.reveal('.textForGig', {
    duration: 1000,
    origin: 'bottom',
    distance: '200px'
});

sr.reveal('.hello', {
    duration: 1000,
    origin: 'top',
    distance: '200px'
});
sr.reveal('.collaborate', {
    duration: 1000,
    origin: 'top',
    distance: '200px'
});