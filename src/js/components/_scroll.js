import ScrollMagic from 'scrollmagic';
import 'scrollmagic/scrollmagic/minified/plugins/debug.addIndicators.min';

var controller = new ScrollMagic.Controller();

$(window).ready(function() {

  var mainScene = new ScrollMagic.Scene({
    triggerElement: '.main',
    duration: $('.main').outerHeight()
  })
    .addIndicators({name: 'main Scene'})
    .addTo(controller);

  mainScene.triggerHook('onLeave');

  var benefitsScene = new ScrollMagic.Scene({
    triggerElement: '.benefits',
    duration: $('.benefits').outerHeight()
  })
    .addIndicators({name: 'benefits Scene'})
    .addTo(controller);

  var howWorkScene = new ScrollMagic.Scene({
    triggerElement: '.how-work',
    duration: $('.how-work').outerHeight()
  })
    .addIndicators({name: 'how-work Scene'})
    .addTo(controller);

  var portfolioScene = new ScrollMagic.Scene({
    triggerElement: '.portfolio',
    duration: $('.portfolio').outerHeight()
  })
    .addIndicators({name: 'portfolio Scene'})
    .addTo(controller);

  var contactsScene = new ScrollMagic.Scene({
    triggerElement: '.contacts',
    duration: $('.contacts').outerHeight()
  })
    .addIndicators({name: 'contacts Scene'})
    .addTo(controller);

});


