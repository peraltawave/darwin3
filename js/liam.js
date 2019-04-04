//Liam's original Foundation 6 ajaxy modal fix
//this might need to go inside doucment ready.. it was inside initialize () on Captain6
$(function() {                                     // DOM has loaded
  var $modal = $('#f6_new');
  function loadContent(url){                    // Load new content into page
    $modal.load(url + ' #pageBody *').foundation('open');
  }

  $('[data-reveal-ajax]').on('click', function(e) {     // Click handler
    e.preventDefault();                         // Stop link loading new page
    var href = this.href;                       // Get href attribute of link
    var $this = $(this);                        // Store link in jQuery object
    loadContent(href);                          // Call function: loads content
  });
});


//Mike's additional foundation 6 ajaaxy modal fixes
$('[neurala-reveal]').on('click', function(e) {
  e.preventDefault();
  var url = this.href;
  var id = $(this).attr('data-reveal-id');

  $.ajax(url).done(function(content) {
     $('#' + id).html(content).foundation('open');
     $('.reveal').removeClass("hide");
  });

});

$('[neurala-close]').on('click', function(){
    var id = $(this).attr('data-reveal-id');
    $('#' + id).foundation('close');
});
function closeReveal(ref) {

    if (ref) {
        var id = ref.attr('data-reveal-id');
        $('#' + id).foundation('close');
    } else {
        $('.reveal').foundation('close');
    }
}