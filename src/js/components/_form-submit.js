import {BODY} from './../constants';
import validate from 'jquery-validation';
import triggerSubmitAnimation from './_submit-animation';

$(document).ready(function() {
  // $.validator.messages.required = 'It is necessary to fill the specified field';

  $.validator.setDefaults({
    debug: true
  });

  var form = $('.js-form');
  var modal = $('[data-modal]');

  form.each((i, el) => {
    $(el).validate({
      rules: {
        'name': {
          required: true
        },
        'email': {
          required: true
        },
        'message': {
          required: true
        }
      },
      messages: {
        name: 'Enter your name',
        email: {
          required: 'Enter the correct email address',
          email: 'The email address must be in the format name@domain.com'
        },
        message: ''
      }
    });
  });

  var formSubmit = $('.js-submit-button');

  formSubmit.each((i, submit) => {
    $(submit).on('click', function(e) {
      var form = $(submit).parents('.js-form');
      form.valid();
      if (!form.valid()) {
        e.preventDefault();
      }
      // else {
      //   setTimeout(() => {
      //     modal.removeClass('is-open');
      //   }, 3000);
      // }
    });
  });
  $('.js-form').on('submit', e => {
    e.preventDefault();
  
    var form = $(e.currentTarget);
    var input = $(form).find('input');
  
    var urlPhpFile = 'form.php';
  
    $.ajax({
      url: urlPhpFile,
      type: 'POST',
      dataType: 'html',
      data: $(e.currentTarget).serialize(),
      success() {
        form.get(0).reset();
        var sentMessage = $('.js-success');
        formSubmit.css('pointer-events','none');
        triggerSubmitAnimation();
        setTimeout(() => {
          sentMessage.fadeIn(300);
        },3500);
      },
      error: function(jqXHR, ajaxSettings, thrownError) {
        var errorSent = $('.js-error');
        var errorBlock = errorSent.find('.js-error-block');
        form.get(0).reset();
        errorSent.fadeIn(100);
        setTimeout(() => {
          errorSent.fadeOut(500);
        },4000);
        // var closeBtn =
        //     '<button class="message-sending__x js-close">&#10006;</button>';
  
        if (jqXHR.status === 0) {
          errorBlock.html('Not connect.\n Verify Network.');
        } else if (jqXHR.status === 404) {
          errorBlock.html('Requested page not found. 404');
        } else if (jqXHR.status === 500) {
          errorBlock.html('Internal Server Error 500.');
        } else if (exception === 'parsererror') {
          errorBlock.html('Requested JSON parse failed.');
        } else if (exception === 'timeout') {
          errorBlock.html('Превышено время отправки сообщения');
        } else if (exception === 'abort') {
          errorBlock.html('Ajax request aborted.');
        } else {
          errorBlock.html('Uncaught Error.\n' + jqXHR.responseText);
        }
      }
    });
  });


});

