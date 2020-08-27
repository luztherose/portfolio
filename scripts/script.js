// Namespace
const portfolioApp = {};

// Document Ready
$(document).ready(function(){
    portfolioApp.init();
})

// Init
    portfolioApp.init = () => {
    portfolioApp.scrollToBottom();
    portfolioApp.scrollToTop();
    portfolioApp.scrollToTheAboutSection();
    portfolioApp.scrollToTheSkillsSection();
    portfolioApp.scrollToThePortfolioSection();
    portfolioApp.scrollToTheContactSection();
}

// Animation 
portfolioApp.scroll = function(element, time) {
	$('html').animate(
		{
            scrollTop: $(element).offset().top
		}, time
	);
};

// move to a sections
portfolioApp.scrollToTheAboutSection = () => {
    $('.aboutNav').on('click', function(event){
        event.preventDefault();
        portfolioApp.scroll('#aboutMe', 1500);
    });
}
portfolioApp.scrollToTheSkillsSection = () => {
    $('.skillsNav').on('click', function(event){
        event.preventDefault();
        portfolioApp.scroll('#skills', 1600);
    });
}
portfolioApp.scrollToThePortfolioSection = () => {
    $('.portfolioNav').on('click', function(event){
        event.preventDefault();
        portfolioApp.scroll('#portfolio', 1700);
    });
}
portfolioApp.scrollToTheContactSection = () => {
    $('.contactNav').on('click', function(event){
        event.preventDefault();
        portfolioApp.scroll('#contact', 2000);
    });
}

// scroll to the bottom
portfolioApp.scrollToBottom = () => {
    $('.goBottom').on('click', function(event){
        event.preventDefault();
        portfolioApp.scroll('#contact', 3000);
    });
}
// Back to the Top
portfolioApp.scrollToTop = () => {
    $('.goUp').on('click', function(event){
        event.preventDefault();
        portfolioApp.scroll('#header', 3000);
    });
}

