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

function ajaxify(d) {
  var form = $(d).serializeArray();
  var formData = {};
  $.each(form, function(i, v) {
    formData[v.name] = v.value;
  });

  $.ajax({
    url: 'http://localhost:3000/api/users',
    data: formData,
    type: 'POST',
    dataType: 'json',
    success: function() {
      window.location.href = "/thank-you";
    }
  });
};

// send ajax to API
$('form.js-reg-form').submit(function(e) {
  e.preventDefault();
  ajaxify(this);
});

$('form.js-modal-reg-form').submit(function(e) {
  e.preventDefault();
  ajaxify(this);
});

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

