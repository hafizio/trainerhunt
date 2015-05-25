// scroll animation
$('a[href^="#reg_form"]').on('click', function(event) {
  var target = $( $(this).attr('href') );
  if (target.length) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: target.offset().top
    }, 1000);
  }
});

// ajax form
//$('form #reg_form').submit(function(e) {
  //e.preventDefault();
  //$.ajax({
    //url: 'http://trainerhunt.us10.list-manage.com/subscribe/post',
    //data: e.formData,
    //type: 'POST',
    //success: function() {
      //window.location.href = "/thank-you";
    //}
  //});
//});

// button animation
$('form #referral_form').submit(function() {
  console.log('Hello');
  $('button #thank').toggleClass('hidden');
  $('button #submit').addClass('hidden');
});

// auto popup
$(document).ready(function() {
  var popup = function() {
    $('#modal').modal('show');
  };
  setTimeout(popup, 20000);
});

