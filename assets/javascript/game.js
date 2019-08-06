var rotate = 360;
$(".intro a[href^='#']").on("click", function(e) {

    // prevent default anchor click behavior
    e.preventDefault();
 
    // store hash
    var hash = this.hash;
 
    // animate
    $('html, body').animate({
        scrollTop: $(hash).offset().top
    }, 1000, function(){
 
    // when done, add hash to url
    // (default click behaviour)
    window.location.hash = hash;
    });
});

$(".titleNav").on("click", function() {
    $(".fa-arrow-down").css("transform", "rotate(" + rotate +"deg)");
    $(".fa-arrow-down").css("transition-duration", ".4s");
});


{/* <div class="footer1">
<p class="footerP">Designed & Created by Wesley Berry</p>
<p class="footerP2">
    <a href="https://github.com/wesleyberry" target="_blank">
        <i class="fab fa-github-square foot"></i>
    </a>
    <a href="https://www.linkedin.com/in/wesley-berry-89742317a" target="_blank">
        <i class="fab fa-linkedin foot"></i>
    </a>
</p>
</div> */}