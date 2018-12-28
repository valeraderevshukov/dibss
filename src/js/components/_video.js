import vide from 'vide';

$(document).ready(function() {
  setTimeout(() => {
    const container = $('.js-video video').get(0);
    if (container && container.paused) {
      container.play();
    }
    $(container).attr('playsinline','');

  }, 1000);
});
