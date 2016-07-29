$(document).ready(function() {
	
	$('.header-nav-open').on('click',function(){
		$('.navigation-mobile').toggleClass('opened');
		$('.page-overlay').toggleClass('hidden');
	});

	$(".navigation-mobile").css("height", $(window).height());

	$(document).mouseup(function(e){
		if ($('.navigation-mobile,nav').has(e.target).length === 0){
			$('.navigation-mobile').hide();
			$('.navigation-mobile').removeClass('opened');
			$('.page-overlay').fadeOut('400');
		}
		else {
			$('.navigation-mobile').show();
			$('.page-overlay').fadeIn('400');
		}
	});

	$('.basket-total').click(function(){
		$(this).parent().children('.basket-content').toggle(200);
		$(this).parent().children('.arr').toggle(200);
		return false;
	});

	$(document).mouseup(function(e){
		if ($('.basket-img-a').has(e.target).length === 0){
			$('.basket-content,.arr').hide(200);
	 	}
	});


	$('.close-mini-basket-control').click(function(){
	    $(".basket-content,.arr").hide(200);
	});


/**********************************************************************************************/
    if($(window).width() > 768)
    {
    	/*start****************hide head > 500****************/
    	var wnd = $(window),
    		height = 500,

            block = $('#ha-header');

        wnd.scroll(function(){

            var top = wnd.scrollTop();
            console.log(top);
        $('#ha-header').css('top', -top);

        	if ( top > height) {
    			$('#ha-header').css('top', 0);
    		}

	    });
        /*end****************hide head > 500****************/

    	/*start*****3d fixed head******/
    	var $resizeHead = $('.resize-head'),
		$timeUp = 800,
		$timeDown = 0;

		$resizeHead.waypoint(function(){
			if ($('.banner').hasClass('padding-10') === !true) {
				$('.banner').addClass('padding-10');
			
				$(".img-logo").fadeIn($timeUp, function() {    //для картинок
					$(this).attr('src', 'img/icon-logo.png').slideDown($timeDown);
				});
			}
			else {
				$('.banner').removeClass('padding-10');
				
				$(".img-logo").slideUp($timeDown, function() {    //для картинок
					$(this).attr('src', 'img/logo.png').slideDown($timeDown);
				});
				
			}
		},{ offset: '-40%' });

		$resizeHead.waypoint(function(){
			if ($('#ha-header').hasClass('shadow-2') === true) {
				
				$('#ha-header').removeClass('shadow-2');

				
			}
			else {
				$('#ha-header').addClass('shadow-2');
				
			}
		},{ offset: '-80%' });



		/*end*****3d fixed head******/

    } else {

		$('.menu ul').each(function(i) { // Check each submenu:
		if ($.cookie('submenuMark-' + i)) {  // If index of submenu is marked in cookies:
			$(this).css({opacity: 1, visibility: 'visible', display: 'block'}).animate({opacity: 1}, 300).next().prev().find('.item').removeClass('collapsed').addClass('expanded-1'); // Show it (add apropriate classes)
		}else {
			$(this).css({opacity: 0, visibility: 'hidden',display: 'none'}).animate({opacity: 0}, 300).next().prev().find('.item').removeClass('expanded').addClass('collapsed-1'); // Hide it
		}
		$(this).prev().prepend('<span class="item"></span>').addClass('collapsible').click(function() { // Attach an event listener
			console.log('Click');
			var this_i = $('.menu ul').index($(this).next()); // The index of the submenu of the clicked link
			if ($(this).next().css('opacity') == '0') {
				console.log('if');
				$(this).next().css({opacity: 0, visibility: "visible", display: 'block'}).animate({opacity: 1}, 300);

					$(this).prev().find('.item').removeClass('collapsed').addClass('expanded');
					cookieSet(this_i);


			}else {
				console.log("else")
				$(this).next().css({opacity: 1, visibility: "hidden", display: 'none'}).animate({opacity: 0}, 300);

					function sayAfter(){  
					    $(this).prev().find('.item').removeClass('expanded').addClass('collapsed');
							cookieDel(this_i);
						$(this).find('ul').each(function() {
							$(this).css({opacity: 0, visibility: "hidden", display: 'none'}).animate({opacity: 0}, 300);
						});
				   	}

				sayAfter();

			}
			return false; // Prohibit the browser to follow the link address
		});
		});

		function cookieSet(index) {
		$.cookie('submenuMark-' + index, 'opened', {expires: null, path: '/'}); 
		}
		function cookieDel(index) {
		$.cookie('submenuMark-' + index, null, {expires: null, path: '/'}); 
		}
    }

/*start***************************3d fixed head******************************/

	var $head = $( '#ha-header' ),
		$el = $('.ha-waypoint'),
		$animClassDown = $el.data( 'animateDownScroll' ),
		$animClassUp = $el.data( 'animateUpScroll' );

	$el.waypoint( function( W__point ) {
		console.log('work');
		if( W__point === 'down' && $animClassDown ) {
			$head.attr('class', 'ha-header ' + $animClassDown);
			console.log($head.attr('class', 'ha-header ' + $animClassDown));
		}
		else if( W__point === 'up' && $animClassUp ){
			$head.attr('class', 'ha-header ' + $animClassUp);
			console.log($head.attr('class', 'ha-header ' + $animClassUp));
		}
	}, { offset: '-45%' } );


/*end***************************3d fixed head******************************/

	//Modernizr plugin if old browser like IE9 then run Jquery-Placeholdr
		if (!Modernizr.input.placeholder) {
			$('input,textarea').placeholder();
		}
	})

$(window).on('load', function() { 
    $(".loader-inner").fadeOut(); 
    $(".loader").delay(400).fadeOut("slow");
});