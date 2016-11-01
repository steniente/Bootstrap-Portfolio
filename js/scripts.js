(function() {
    "use strict";
    $('#loader').delay(700).fadeOut();
    $('#mask').delay(1200).fadeOut("slow");
	
	// Global DOM elements
	window.mapv 	   = {ele : {}};
	mapv.ele['win']    = $(window);
	mapv.ele['doc']    = $(document);
	
    if (document.getElementsByClassName("team-items").length){ 
		var eventFired = false,
		objectPositionTop = $('.team-items').offset().top;
	}	    	
	 mapv.ele['win'].on('scroll', function () {  
			// Counter On Scroll
            var currentPosition = mapv.ele['doc'].scrollTop();
            if (currentPosition > objectPositionTop && eventFired === false) {
                eventFired = true;
                $('.counter').each(function() {
                    $(this).prop('count', 100).animate({
                        count: $(this).text()
                    }, {
                        duration: 4000,
                        easing: 'swing',
                        step: function(now) {
                            $(this).text(Math.ceil(now));
                        }
                    });
                });
            }
		// Back to Top On Scroll
        if ($(this).scrollTop() > 100) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });
	
    $('#back-to-top').on('click', function() {
        $('html, body').animate({
            scrollTop: 0,
            easing: 'swing'
        }, 750);
        return false;
    });

	// Intro section Type
    $("#typed").typed({
        stringsElement: $('#typed-strings'),
        typeSpeed: 100,
        backDelay: 1000,
        loop: true,
        cursorChar: "|",
    });
	
	// Contact Form
   $('.contact-form').on('submit', function(e) {
        e.preventDefault();
        $.post('mail/send.php', $(this).serialize()).done(function(data) {
            $('.messageus').fadeOut('slow', function() {
                $('.messageus').fadeIn('slow').html(data);
            });
        }).fail(function() {
            alert('SOMETHING WENT WRONG! PLEASE TRY AGAIN.');
        });
    });
	
})();