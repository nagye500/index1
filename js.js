function navSlide() {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");
    
    burger.addEventListener("click", () => {
        //Toggle Nav
        nav.classList.toggle("nav-active");
        
        //Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ""
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });
        //Burger Animation
        burger.classList.toggle("toggle");
    });
    
}

navSlide();

navSlide();
$(window).scroll(function() {
	var $height = $(window).scrollTop();
  if($height > 90) {
		$('#top-links').addClass('active');
	} else {
		$('#top-links').removeClass('active');
	}
});
navSlide();
$(window).scroll(function() {
	var $height = $(window).scrollTop();
  if($height > 90) {
		$('#right-side').addClass('active');
	} else {
		$('#right-side').removeClass('active');
	}
});
navSlide();
$(window).scroll(function() {
	var $height = $(window).scrollTop();
  if($height > 90) {
		$('#center').addClass('active');
	} else {
		$('#center').removeClass('active');
	}
});
navSlide();
$(window).scroll(function() {
	var $height = $(window).scrollTop();
  if($height > 90) {
		$('#left-side').addClass('active');
	} else {
		$('#left-side').removeClass('active');
	}
});