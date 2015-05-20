$('a[href^="#reg_form"]').on('click', function(event) {
  var target = $( $(this).attr('href') );
  if (target.length) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: target.offset().top
    }, 1000);
  }
});

$('form').submit(function() {
  window.location.href = "/thank-you";
});

$('form #referral_form').submit(function() {
  console.log('Hello');
  $('button #thank').toggleClass('hidden');
  $('button #submit').addClass('hidden');
});

$(document).ready(function() {
  var popup = function() {
    $('#modal').modal('show');
  };
  setTimeout(popup, 20000);
});
