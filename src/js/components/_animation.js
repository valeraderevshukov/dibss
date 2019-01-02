import {Elastic, Power0, Sine, TimelineMax, TweenMax} from 'gsap/all';

// let textNodes = $('[data-anim-type]');
const wordsRegExp = /\S+/g;
const STAGED_ANIMATION_SELECTOR = '[data-anim-type*=\'staged\']';
const WAVE_ANIMATION_SELECTOR = '[data-anim-type*=\'wave\']';
const DELAY_ANIMATION_ATTRIBUTE = 'data-anim-delay';
const DURATION_ANIMATION_ATTRIBUTE = 'data-anim-duration';

function splitOnSpanText(textNodes) {
  textNodes.each(function() {
    let textNode = $(this);
    let wordsArray = textNode.text().match(wordsRegExp);
    textNode.text('');

    for (let i = 0; i < wordsArray.length; i++) {
      wordsArray[i] += ' ';
      let charArray = [...wordsArray[i]];
      let wordNode = $('<span class=\'wave-anim__word\'></span>');
      for (let j = 0; j < charArray.length; j++) {
        wordNode.append($('<span class=\'wave-anim__letter\'></span>').text(charArray[j]));
      }
      $(this).append(wordNode);
    }
    textNode.css('opacity', '1');
  });
}

function splitOnRows(textNode) {
  let rowsArray = [];
  let width = textNode.outerWidth();
  let wordsArray = textNode.find('.wave-anim__word');
  let row = [];
  let currentRowWidth = 0;
  wordsArray.each(function(index) {
    let currentWord = $(this);
    if ((currentRowWidth + currentWord.outerWidth() < width)) {
      row.push(...currentWord.find('.wave-anim__letter'));
      currentRowWidth += currentWord.outerWidth();
      if (index + 1 === wordsArray.length) {
        rowsArray.push(row);
      }
    } else {
      rowsArray.push(row);
      row = [];
      row.push(...currentWord.find('.wave-anim__letter'));
      currentRowWidth = currentWord.outerWidth();
      if (index + 1 === wordsArray.length) {
        rowsArray.push(row);
      }
    }
  });
  return rowsArray;
}

function triggerWaveAnimation(scene) {
  let textNodes = scene.find(WAVE_ANIMATION_SELECTOR);
  splitOnSpanText(textNodes);
  textNodes.each(function() {
    let rows = splitOnRows($(this));
    let delay = +$(this).attr(DELAY_ANIMATION_ATTRIBUTE) || 0;
    let duration = +$(this).attr(DURATION_ANIMATION_ATTRIBUTE) || 1;

    setTimeout(() => {
      $(rows).each(function(index) {
        let letters = $(this.reverse());
        let stage = duration / letters.length;
        setTimeout(() => {
          new TimelineMax().staggerTo(letters, duration, {
            y: 0,
            x: 0,
            ease: Elastic.easeOut.config(2.5, 0.9)
          }, stage);

          new TimelineMax().staggerTo(letters, duration, {
            opacity: 1,
            ease: Power0.easeNone
          }, stage);

        }, index * 100);
      });
    }, delay * 1000);
  });


  // $(rows).each(function(index) {
  //   let reverseCharArray = $(this.reverse());
  //   let stage = 0.5 / reverseCharArray.length;
  //
  //   setTimeout(() => {
  //     new TimelineMax().staggerTo($(this), 1.5, {
  //       y: 0,
  //       x: 0,
  //       ease: Elastic.easeOut.config(2.5, 0.9)
  //     }, stage);
  //
  //     new TimelineMax().staggerTo($(this), 1.5, {
  //       opacity: 1,
  //       ease: Power0.easeNone
  //     }, stage);
  //
  //   }, index * 100);
  // });
}

function triggerStagedAnimation(scene) {
  let animationNodes = scene.find(STAGED_ANIMATION_SELECTOR);

  animationNodes.each(function() {
    let delay = +$(this).attr(DELAY_ANIMATION_ATTRIBUTE) || 0;
    let duration = +$(this).attr(DURATION_ANIMATION_ATTRIBUTE) || 1;

    new TweenMax.to($(this), duration, {
      x: 0,
      y: 0,
      opacity: 1,
      ease: Sine.easeOut
    }).delay(delay);
  });
}

/** SCENES */
function triggerHeaderSceneAnimation() {
  /** partial animation*/
  let partialItems = $('[data-anim-type*=\'partial\']');

  partialItems.each(function() {
    let item = $(this);
    let delay = +item.attr(DELAY_ANIMATION_ATTRIBUTE) || 0;
    let duration = +item.attr(DURATION_ANIMATION_ATTRIBUTE) || 1;

    new TweenMax.to(item, duration, {
      x: 0,
      y: 0,
      rotation: 0,
      opacity: 1,
      ease: Sine.easeOut
    }).delay(delay);
  });

  triggerStagedAnimation($('.header'));
}

function triggerMainSceneAnimation() {
  let mainScene = $('.main');
  triggerWaveAnimation(mainScene);
  triggerStagedAnimation(mainScene);
}

function triggerBenefitsSceneAnimation() {
  let benefitsScene = $('.benefits');
  triggerWaveAnimation(benefitsScene);
  triggerStagedAnimation(benefitsScene);
}

function triggerHowWorkSceneAnimation() {
  let howWorkScene = $('.how-work');
  triggerWaveAnimation(howWorkScene);
  triggerStagedAnimation(howWorkScene);
}

function triggerPortfolioSceneAnimation() {
  let portfolioScene = $('.portfolio');
  triggerWaveAnimation(portfolioScene);
  triggerStagedAnimation(portfolioScene);
}

function triggerContactsSceneAnimation() {
  let contactsScene = $('.contacts');
  triggerWaveAnimation(contactsScene);
  triggerStagedAnimation(contactsScene);
}

export {
  triggerHeaderSceneAnimation,
  triggerMainSceneAnimation,
  triggerBenefitsSceneAnimation,
  triggerHowWorkSceneAnimation,
  triggerPortfolioSceneAnimation,
  triggerContactsSceneAnimation
};

