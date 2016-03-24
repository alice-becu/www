$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 700);
        return false;
      }
    }
  });
});

$(document).ready(function() {
    $('[id^="scale"]').each( function(i){
        $(this).transition({
            animation  : 'scale',
            duration   : '0'
        });
        $(this).visibility({
            onBottomVisible: function(){
                $(this).transition({
                    animation : 'scale',
                    duration : '800ms'
                });
            }
        });

    });
});

$(document).ready(function() {
    $('[id^="fly"]').each( function(i){
		$(this).transition({
			animation  : 'fly left',
			duration   : '0'
		});

    	$(this).visibility({
    		onBottomVisible: function(){
    			$(this).transition({
    				animation : 'fly left',
    				duration : '800ms'
    			});
    		}
    	});
    });
});
   

$(document).ready(function() {
    $('[id^="pulse"]').each( function(i){
        $(this).transition({
            animation  : 'pulse',
            duration   : '0'
        });

        $(this).visibility({
            onBottomVisible: function(){
                $(this).transition({
                    animation : 'pulse',
                    duration : '800ms'
                });
            }
        });
    });
});

$(document).ready(function() {
    $('[id^="fade"]').each( function(i){
        $(this).transition({
            animation  : 'fade',
            duration   : '0'
        });

        $(this).visibility({
            onBottomVisible: function(){
                $(this).transition({
                    animation : 'fade up',
                    duration : '800ms'
                });
            }
        });
    });
});