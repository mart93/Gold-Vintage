$(document).ready(function() {

	$('.header-nav-open').on('click',function(){
		$('.navigation-mobile').toggleClass('opened');
	});

	$(document).mouseup(function(e){
		if ($('.navigation-mobile,nav').has(e.target).length === 0){
			$('.navigation-mobile').hide();
			$('.navigation-mobile').removeClass('opened');
		}
		else {
			$('.navigation-mobile').show();
		}
	});

	//$('.page-overlay').hide();

	// $('.page-overlay').on('click',function(){
	// 	$('.navigation-mobile').removeClass('opened');
	// });

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
    	console.log('> 767');

    } else {

    	//$('nav').after('<div class="page-overlay"></div>');

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
		$.cookie('submenuMark-' + index, 'opened', {expires: null, path: '/'}); // Set mark to cookie (submenu is shown):
		}
		function cookieDel(index) {
		$.cookie('submenuMark-' + index, null, {expires: null, path: '/'}); // Delete mark from cookie (submenu is hidden):
		}
    }

/**********************************************************************************************/


	//Modernizr plugin if old browser like IE9 then run Jquery-Placeholdr
		if (!Modernizr.input.placeholder) {
			$('input,textarea').placeholder();
		}
	})

$(window).on('load', function() { 
    $(".loader-inner").fadeOut(); 
    $(".loader").delay(400).fadeOut("slow");
});

