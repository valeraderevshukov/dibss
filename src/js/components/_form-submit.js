import {BODY} from './../constants';
$(document).ready(function() {
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
        sentMessage.fadeIn(300);
      },
      error: function(jqXHR, ajaxSettings, thrownError) {
        var errorSent = $('.js-error');
        var errorBlock = errorSent.find('.js-error-block');
        form.get(0).reset();
        errorSent.fadeIn(300);
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
  
  // $('.js-message-sending').on('click', function(e) {
  //   var target = event.target;
  //   if ($(target).hasClass('js-close')) {
  //     $(target)
  //       .parents('.js-message-sending')
  //       .fadeOut(300);
  //   }
  // });
});
// BODY.on('click', e => {
//   if (!$(e.target).closest('.js-message-sending-inner').length ) {
//     $('.js-message-sending').fadeOut(300);
//   };
// });

