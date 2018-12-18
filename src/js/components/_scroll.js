import ScrollMagic from 'scrollmagic';
import * as animations from './_animation';
import 'scrollmagic/scrollmagic/minified/plugins/debug.addIndicators.min';

var controller = new ScrollMagic.Controller();

$(window).ready(function() {

  var mainScene = new ScrollMagic.Scene({
    triggerElement: '.main'
  })
    .addIndicators({name: 'main Scene'})
    .addTo(controller)
    .on('enter', () => {
      animations.triggerMainSceneAnimation();
    });

  var benefitsScene = new ScrollMagic.Scene({
    triggerElement: '.benefits'
  })
    .addIndicators({name: 'benefits Scene'})
    .addTo(controller)
    .on('enter', () => {
      animations.triggerBenefitsSceneAnimation();
    });

  var howWorkScene = new ScrollMagic.Scene({
    triggerElement: '.how-work'
  })
    .addIndicators({name: 'how-work Scene'})
    .addTo(controller)
    .on('enter', () => {
      animations.triggerHowWorkSceneAnimation();
    });

  var portfolioScene = new ScrollMagic.Scene({
    triggerElement: '.portfolio'
  })
    .addIndicators({name: 'portfolio Scene'})
    .addTo(controller)
    .on('enter', () => {
      animations.triggerPortfolioSceneAnimation();
    });

  var contactsScene = new ScrollMagic.Scene({
    triggerElement: '.contacts'
  })
    .addIndicators({name: 'contacts Scene'})
    .addTo(controller)
    .on('enter', () => {
      animations.triggerContactsSceneAnimation();
    });

});


