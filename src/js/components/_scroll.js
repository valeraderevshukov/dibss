import ScrollMagic from 'scrollmagic';
import * as animations from './_animation';
import 'scrollmagic/scrollmagic/minified/plugins/debug.addIndicators.min';

var controller = new ScrollMagic.Controller();

$(window).ready(function() {

  var headerScene = new ScrollMagic.Scene({
    triggerElement: '.header'
  })
    .addIndicators({name: 'headeer Scene'})
    .addTo(controller)
    .on('enter', () => {
      animations.triggerHeaderSceneAnimation();
    });

  var mainScene = new ScrollMagic.Scene({
    triggerElement: '.main',
    reverse: false
  })
    .addIndicators({name: 'main Scene'})
    .addTo(controller)
    .on('enter', () => {
      animations.triggerMainSceneAnimation();
    });

  var benefitsScene = new ScrollMagic.Scene({
    triggerElement: '.benefits',
    reverse: false
  })
    .addIndicators({name: 'benefits Scene'})
    .addTo(controller)
    .on('enter', () => {
      animations.triggerBenefitsSceneAnimation();
    });

  var howWorkScene = new ScrollMagic.Scene({
    triggerElement: '.how-work',
    reverse: false
  })
    .addIndicators({name: 'how-work Scene'})
    .addTo(controller)
    .on('enter', () => {
      animations.triggerHowWorkSceneAnimation();
    });

  var portfolioScene = new ScrollMagic.Scene({
    triggerElement: '.portfolio',
    reverse: false
  })
    .addIndicators({name: 'portfolio Scene'})
    .addTo(controller)
    .on('enter', () => {
      animations.triggerPortfolioSceneAnimation();
    });

  var contactsScene = new ScrollMagic.Scene({
    triggerElement: '.contacts',
    reverse: false
  })
    .addIndicators({name: 'contacts Scene'})
    .addTo(controller)
    .on('enter', () => {
      animations.triggerContactsSceneAnimation();
    });

});


