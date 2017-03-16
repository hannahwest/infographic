var $rightpupil = document.querySelectorAll(".right-pupil");


TweenMax.to([".right-pupil"], .9, { 
	right: "-12px", 
	repeat: -1,
	yoyo: true,
	ease: Power3.easeInOut,
	rotation: 360, 
	transformOrigin: "5px 10px",
});

var $leftpupil = document.querySelectorAll(".left-pupil");

TweenMax.to([".left-pupil"], .9, { 
	left: "-47px", 
	repeat: -1,
	yoyo: true,
	ease: Power3.easeInOut,
	rotation: 360, 
	transformOrigin: "5px 5px",
});






TweenMax.to([".red"], 2, { 
	scale: 1.1,
	repeat: -1, 
});

TweenMax.to([".arrows-two"], 4, { 
	rotation: 360, 
	transformOrigin: "40px 40px",
	repeat: -1,
	ease: Back.easeOut,

});



TweenMax.to([".one"], .5, { 
	top: "20px",
	repeat: -1,
	yoyo: true,

});

TweenMax.to([".two"], .5, { 
	top: "-10px",
	repeat: -1,
	yoyo: true,
});