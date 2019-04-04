//home
$(document).ready(function(){
    //home hero slick
    $('.home-slick').slick({
        // setting-name: setting-value
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed:800,
        autoplaySpeed:8000,
        autoplay: true,
        arrows:false,
        dots:true,
        responsive: [
            {
                breakpoint: 700,
                settings: {
                    speed:900,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    speed:600,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    speed:500,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 450,
                settings: {
                    speed:400,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $("#contactForm").submit(function(e) {

    var url = "send.php"; // the script where you handle the form input.

    $.ajax({
           type: "POST",
           url: url,
           data: $("#contactForm").serialize(), // serializes the form's elements.
           success: function(data)
           {
               $("#form_success").show();

           }
         });

    e.preventDefault(); // avoid to execute the actual submit of the form.
});


});

//fastclick
$(function() {
    FastClick.attach(document.body);
});

//smooth scroll to anchor
$(document).on('click', 'a[href^="#"].scrollto', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});
/*
//
// Window Resize
$(window).resize(function() {
   //$("#height_child").css("opacity", "0.5");
  //alert($("#height_parent").height());
  $("#height_child").css("display", "none");
  setTimeout(fix_this_crap2, 1);

  function fix_this_crap2() {
    var magic;

    //16 x 9
    //magic = $("#height_parent").height() * 0.32; //0.32 is the number you get when you take the height of the scalable element we're accounting for and divide it by the height of the parent container at any resolution

    //widescreen hide the laurels

    magic = 0;//this no longer accounts for the laurel image

    magic = magic + 131;//account for the fixed position header and footer
    $("#height_child").css("height", $("#height_parent").height() - magic);
    $("#height_child").css("display", "block");
  }
});

$(document).ready(function(){

 $("#height_child").scrollator();

//$("#height_child").css("opacity", "0.5");
  //alert($("#height_parent").height());
  $("#height_child").css("display", "none");
  setTimeout(fix_this_crap, 1);

  function fix_this_crap() {
    var magic;
    magic = 0;//$("#height_parent").height() * 0.32;
    magic = magic + 131;
    $("#height_child").css("height", $("#height_parent").height() - magic);
    $("#height_child").css("display", "block");

  }



  //fliptron
  setTimeout(loadtron, 300);
  function loadtron() {
  	$(".home-delay1").show().css("height","6px");//this keeps header loading properly 100% of the time
  	$(".home-delay2").css("opacity","1.0");//using opacity instead of show keeps fliptron animation from cutting off overflow on flip
    $(".epic-nav-container").show();
  }
  setTimeout(fliptron, 1000);//flip all tiles on page load
  function fliptron() {
    $("#home_1").flip(true);
    $("#home_2").flip(true);
    $("#home_3").flip(true);
    $("#home_4").flip(true);
    $("#home_5").flip(true);
    $("#home_6").flip(true);
    $("#home_7").flip(true);
    $("#home_8").flip(true);
  }
  //delay the about text so it doesn't show before flip
  setTimeout(abouttron, 1190);
  function abouttron () {
    $("#about_home").fadeIn('slow');
  }

  if($(document ).width() >= 768) {
    //tooltipster
    $('.tooltip2').tooltipster({
      side: 'right',
      interactive: 'true',
      distance:-10,
      delay:200
    });

     $('.tooltip_header').tooltipster({
      side: 'bottom',
      interactive: 'true',
      distance:-1
    });
  }


  //film page moible nav update text on selection
  $(".display_wtw").click(function() { //hides the dropdown when user makes a selection
    $("#display_container").html("WHERE TO WATCH");
    $('html, body').animate({
            scrollTop: $("#scroll_to_destination").offset().top
        }, 500);
  });
  $(".display_fd").click(function() { //hides the dropdown when user makes a selection
    $("#display_container").html("FILM DETAILS");
    $('html, body').animate({
            scrollTop: $("#scroll_to_destination").offset().top
        }, 500);
  });

  $(".display_i").click(function() { //hides the dropdown when user makes a selection
    $("#display_container").html("IMAGES");
    $('html, body').animate({
            scrollTop: $("#scroll_to_destination").offset().top
        }, 500);
  });

  $(".display_v").click(function() { //hides the dropdown when user makes a selection
    $("#display_container").html("VIDEOS");
    $('html, body').animate({
            scrollTop: $("#scroll_to_destination").offset().top
        }, 500);
  });

  $(".display_n").click(function() { //hides the dropdown when user makes a selection
    $("#display_container").html("NEWS");
    $('html, body').animate({
            scrollTop: $("#scroll_to_destination").offset().top
        }, 500);
  });

  $(".display_s").click(function() { //hides the dropdown when user makes a selection
    $("#display_container").html("SHOP");
    $('html, body').animate({
            scrollTop: $("#scroll_to_destination").offset().top
        }, 500);
  });

  $(".display_rt").click(function() { //hides the dropdown when user makes a selection
    $("#display_container").html("RELATED TITLES");
    $('html, body').animate({
            scrollTop: $("#scroll_to_destination").offset().top
        }, 500);
  });



  //trailertron
  $("#trailer_tron").click(function() { //hides still & expands container from 42% to 56.25% for 16:9
    $(".still-cover").hide();
    $(".trailer").addClass("film_display_padding");
  });


//  $( ".show-sign-up" ).on( "click", function() {
//  console.log('clicked');
//	});




  //header search functonality tablet
  $("#expand_search").click(function() {
    $("#collapse_search").fadeIn();
    $("#input_search").addClass('expand').focus();
    $("#expand_search").hide();
  });
  $("#collapse_search").click(function() {
    $("#expand_search").fadeIn();
    $("#input_search").removeClass('expand');
    $("#collapse_search").hide();
  });
  //search page mobile nav search
  $("#search_page_expand").click(function() {
    //window.scrollTo(0,0);
    setTimeout( function(){
      window.scrollTo(0,0);
    //  $("#search_page_mobile").focus();
    }  , 500 );
  });


  //owl carousel

  var owl = $("#owl-merch");
  owl.owlCarousel({

    // Most important owl features
    items : 4,
    itemsDesktop : [1024,3],
    itemsDesktopSmall : [768,3],
    itemsTablet: [768,3],
    itemsTabletSmall: false,
    itemsMobile : [479,2],

    //Basic Speeds
    slideSpeed : 500,
    paginationSpeed : 800,
    rewindSpeed : 1000,

    //Autoplay
    autoPlay : false,
    stopOnHover : false

  })

  var owl = $("#owl-vids");
  owl.owlCarousel({

    // Most important owl features
    items : 4,
    itemsDesktop : [1024,3],
    itemsDesktopSmall : [970,2],
    itemsTablet: [768,2],
    itemsTabletSmall: [600,1],
    itemsMobile : [400,1],

    //Basic Speeds
    slideSpeed : 500,
    paginationSpeed : 800,
    rewindSpeed : 1000,

    //Autoplay
    autoPlay : false,
    stopOnHover : false

  })

  var owl = $("#owl-news");
  owl.owlCarousel({

    // Most important owl features
    items : 5,
    itemsDesktop : [1024,4],
    itemsDesktopSmall : [970,3],
    itemsTablet: [768,3],
    itemsTabletSmall: [700,2],
    itemsMobile : [390,1],

    //Basic Speeds
    slideSpeed : 500,
    paginationSpeed : 800,
    rewindSpeed : 1000,

    //Autoplay
    autoPlay : false,
    stopOnHover : false

  })

  var owl = $("#owl-shop");
  owl.owlCarousel({

    // Most important owl features
    items : 6,

    itemsDesktop : [1024,4],
    itemsDesktopSmall : [970,3],
    itemsTablet: [768,3],
    itemsTabletSmall: false,
    itemsMobile : [479,2],

    //Basic Speeds
    slideSpeed : 500,
    paginationSpeed : 800,
    rewindSpeed : 1000,

    //Autoplay
    autoPlay : false,
    stopOnHover : false

  })


  var owl = $("#owl-stills");
  owl.owlCarousel({

    // Most important owl features
    items : 4,
    itemsDesktop : [1024,3],
    itemsDesktopSmall : [970,2],
    itemsTablet: [768,2],
    itemsTabletSmall: [600,1],
    itemsMobile : [400,1],

    //Basic Speeds
    slideSpeed : 500,
    paginationSpeed : 800,
    rewindSpeed : 1000,

    //Autoplay
    autoPlay : false,
    stopOnHover : false

  })

  var owl = $("#owl-related");
  owl.owlCarousel({

    // Most important owl features
    items : 6,
    itemsDesktop : [1024,4],
    itemsDesktopSmall : [970,4],
    itemsTablet: [768,4],
    itemsTabletSmall: [700,3],
    itemsMobile : [479,2],

    //Basic Speeds
    slideSpeed : 500,
    paginationSpeed : 800,
    rewindSpeed : 1000,

    //Autoplay
    autoPlay : false,
    stopOnHover : false

  })

  $(".owl-sys-next").click(function(){
    owl.trigger('owl.next');
  })
  $(".owl-sys-prev").click(function(){
    owl.trigger('owl.prev');
  })



  var owl = $("#owl-home");
  owl.owlCarousel({

    // Most important owl features
    items : 1,
    itemsDesktop : [1024,1],
    itemsDesktopSmall : [768,1],
    itemsTablet: [768,1],
    itemsTabletSmall: false,
    itemsMobile : [479,1],

    //Basic Speeds
    slideSpeed : 300,
    paginationSpeed : 300,
    rewindSpeed : 1000,

    //loop
    loop:true,

    //Autoplay
    autoPlay : true,
    stopOnHover : false

  });


});

//smooth scroll to anchor
$(function() {
  $('a[href*=#].scrollto:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
       $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
    }
    }
  });
});
//jquery simple scroll to anchor
//function scrollToAnchor(aid){
//    var aTag = $("a[name='"+ aid +"']");
//    $('html,body').animate({scrollTop: aTag.offset().top},'slow');
//}


// Admin JS

$('#sort-bios').click(function(){
   $(this).addClass("hide");
   $('#sort-bios-done').removeClass("hide");
   $('#bios').sortable();
});

$('#sort-bios-done').click(function(){
   $(this).addClass("hide");
   $('#sort-bios').removeClass("hide");

   var order = $('#bios').sortable("toArray");

   $('#bios').sortable('destroy');

   $.ajax({
       type: "POST",
       url: "/admin/orderBios",
       data: { ids: order }
   }).done(function(res){
       console.log(res);
   });
});

$('#sort-merch').click(function(){
   $(this).addClass("hide");
   $('#sort-merch-done').removeClass("hide");
   $('#merch').sortable();
});

$('#sort-merch-done').click(function(){
   $(this).addClass("hide");
   $('#sort-merch').removeClass("hide");

   var order = $('#merch').sortable("toArray");

   $('#merch').sortable('destroy');

   $.ajax({
       type: "POST",
       url: "/admin/orderMerchandise",
       data: { ids: order }
   }).done(function(res){
       console.log(res);
   });
});

$('.confirmDelete').on('click', function(e){
   var doDelete = confirm('Are you sure you want to delete this? This cannot be undone!');

   if (!doDelete) {
       e.preventDefault();
       return false;
   }
});


$("input[name='dashboard']").change(function() {
		var show_statuses = $(this).data('show-statuses');
		if (show_statuses === 'all') {
			$('#search_by_status').children('option').show(); //show all
		} else {
			$('#search_by_status').children('option').hide(); //hide evertyhing first
			$.each(show_statuses.split(",").slice(0,-1), function(index, item) {
	  		$('#search_by_status').children("option[value^=" + item + "]").show() //show only relevant options
			});
		}
});

$( document ).ready(function() {
	$('#images_second_doneOrdering').hide();

	$('#images_second_order').click(function(){
	    $('#images_second_doneOrdering').show();
	    $('#images_second_order').hide();
	    $('.sortable').sortable();
	});

	$('#images_second_doneOrdering').click(function(){
	   $('#images_second_doneOrdering').hide();
	   $('#images_second_order').show();
	   var imagesSecondOrder = $('.sortable').sortable("toArray");
	   $('#order_second').val(imagesSecondOrder);
	   $('.sortable').sortable('destroy');
	});

	$('#videos_doneOrdering').hide();

	$('#videos_order').click(function(){
	    $('#videos_doneOrdering').show();
	    $('#videos_order').hide();
	    $('.sortable-videos').sortable();
	});

	$('#videos_doneOrdering').click(function(){
	   $('#videos_doneOrdering').hide();
	   $('#videos_order').show();
	   var videosOrder = $('.sortable-videos').sortable("toArray");
	   $('#order_videos').val(videosOrder);
	   $('.sortable').sortable('destroy');
	});

	var VimeoPlayer = new Vimeo.Player($('iframe'));
	$("#play_primary_trailer").click(function() {
        $('#film_slideshow').fadeOut(500);
        $("#play_primary_trailer").hide();
        $("#pause_primary_trailer").css("opacity","1.0");
        $("#film_video").css("padding-bottom","56.25%");
    		VimeoPlayer.play();
        setTimeout(
            function()
            {
                $("#film_headline").fadeOut(1000);
                $(".left-fade").fadeOut(4000);
            }, 1000);
    	});
    	$("#pause_primary_trailer").click(function() {
    		VimeoPlayer.pause();
        $("#play_primary_trailer").show();
        $("#pause_primary_trailer").css("opacity","0.0");
	});


	$("#slideshow > div:gt(0)").hide();

	setInterval(function() {
	  $('#slideshow > div:first')
	    .fadeOut(1000)
	    .next()
	    .fadeIn(1000)
	    .end()
	    .appendTo('#slideshow');
	},  6000);

});


//fixme1
var fixmeTop = $('.fixme').offset().top;       // get initial position of the element
$(window).scroll(function() {                 // assign scroll event listener
    var currentScroll = $(window).scrollTop(); // get current position
    if (currentScroll >= fixmeTop) {           // apply position: fixed if you
        $('.fixme').css({                      // scroll to that element or below it
            position: 'fixed',
            top: '50px',
            left: '0',
            padding: '0 15px',
            'z-index': '75'
            //display: 'block'
        });
    } else {                                   // apply position: static
        $('.fixme').css({                      // if you scroll above it
            position: 'relative',
            padding: '0 15px',
            'z-index' : '10',
            top: '0px'
            //display: 'none'
        });
    }
});



*/
