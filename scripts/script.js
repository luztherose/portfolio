const portfolioApp = {};

// Animation 
portfolioApp.scroll = function(element) {
	$('html').animate(
		{
            scrollTop: $(element).offset().top
		}, 3000
	);
};

// scroll to the bottom
$('.goBottom').on('click', function(event){
    event.preventDefault();
    portfolioApp.scroll('#contact');
});

// Back to the header
$('.goUp').on('click', function(event){
    event.preventDefault();
    portfolioApp.scroll('#header');
});