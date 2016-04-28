$(document).ready(function(){
	$('#fullpage').fullpage({

		sectionsColor : ['#555', '#fff', '#555', '#fff'],
		anchors: ['main', 'about', 'portfolio', 'contacts'],
		menu: '.top-menu',
		keyboardScrolling: true,
		verticalCentered: true,
		slidesNavigation: true,
		scrollOverflow: true,

		afterLoad: function(anchorLink, index){
			
				$('.an-left').addClass('animated fadeInLeft');
				$('.an-right').addClass('animated fadeInRight');
				$('.an-title').addClass('animated fadeInUp');
				$('.an-portfolio').addClass('animated rubberBand');
				if (anchorLink == 'portfolio') {
					$('#mixitup').mixItUp('sort','random');
				}
			
		},

		onLeave: function(index, nextIndex, direction){
			
				$('.an-left').removeClass('fadeInLeft');
				$('.an-right').removeClass('fadeInRight');
				$('.an-title').removeClass('fadeInUp');
				$('.an-portfolio').removeClass('animated rubberBand');
			
		}

	});

	$('#mixitup').mixItUp();

	$('.popup-content').magnificPopup({
		type:'inline',
		midClick: true,
		zoom: {
		enabled: true,
		duration: 300,
		easing: 'ease-in-out' }
	});

	$('.portfolio-menu ul li').click(function(){
		$('.portfolio-menu ul li').removeClass('active');
		$(this).addClass('active');
	});

	
});