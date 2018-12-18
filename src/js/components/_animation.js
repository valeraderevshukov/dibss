import {Elastic, Power0, Sine, TimelineMax} from 'gsap/all';

// let textNodes = $('[data-anim-type]');
const wordsRegExp = /\S+/g;
const STAGED_ANIMATION_SELECTOR = '[data-anim-type*=\'staged\']';
const WAVE_ANIMATION_SELECTOR = '[data-anim-type*=\'wave\']';

function splitOnSpanText(sceneItem) {
  let textNodes = sceneItem.find(WAVE_ANIMATION_SELECTOR);
  console.log(sceneItem);
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

function splitOnRows(sceneItem) {
  let textNodes = sceneItem.find('[data-anim-type*=\'wave\']');
  let rowsArray = [];
  textNodes.each(function() {
    let width = $(this).outerWidth();
    let wordsArray = $(this).find('.wave-anim__word');
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
  });
  return rowsArray;
}

function triggerWaveAnimation(scene) {
  splitOnSpanText(scene);
  let rows = splitOnRows(scene);

  $(rows).each(function(index) {
    let reverseCharArray = $(this.reverse());
    let stage = 0.5 / reverseCharArray.length;

    setTimeout(() => {
      new TimelineMax().staggerTo($(this), 1.5, {
        y: 0,
        ease: Elastic.easeOut.config(2.5, 0.9)
      }, stage);

      new TimelineMax().staggerTo($(this), 1.5, {
        opacity: 1,
        ease: Power0.easeNone
      }, stage);

    }, index * 100);
  });
}

function triggerStagedAnimation(scene) {
  let animationNodes = scene.find(STAGED_ANIMATION_SELECTOR);

  new TimelineMax().staggerTo(animationNodes, 1, {
    y: 0,
    opacity: 1,
    ease: Sine.easeOut
  }, 0.2);
}

/** SCENES */
function triggerMainSceneAnimation() {
  let mainScene = $('.main');
  triggerWaveAnimation(mainScene);
  triggerStagedAnimation(mainScene);

}

function triggerBenefitsSceneAnimation() {
  console.log('Benefits scene trigger');
}

function triggerHowWorkSceneAnimation() {
  console.log('HowWork scene trigger');
}

function triggerPortfolioSceneAnimation() {
  console.log('Portfolio scene trigger');
}

function triggerContactsSceneAnimation() {
  console.log('Contacts scene trigger');
}

export {
  triggerMainSceneAnimation,
  triggerBenefitsSceneAnimation,
  triggerHowWorkSceneAnimation,
  triggerPortfolioSceneAnimation,
  triggerContactsSceneAnimation
};

