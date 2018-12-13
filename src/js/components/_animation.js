import {TweenMax, Elastic} from 'gsap/all';

let textNodes = $('.js-main-text');
const wordsRegExp = /\S+/g;

function splitOnSpanText() {
  textNodes.each(function() {
    let textNode = $(this);
    let wordsArray = textNode.text().match(wordsRegExp);
    textNode.text('');

    for (let i = 0; i < wordsArray.length; i++) {
      wordsArray[i] += ' ';
      let chars = [...wordsArray[i]];
      let wordNode = $('<span class=\'main__word\'></span>');
      for (let j = 0; j < chars.length; j++) {
        wordNode.append($('<span class=\'main__letter\'></span>').text(chars[j]));
      }
      $(this).append(wordNode);
    }
  });
}

$(window).ready(() => {
  splitOnSpanText();

  TweenMax.staggerFrom('.main__letter', 2, {
    top: 50,
    opacity: 0,
    ease: Elastic.easeOut,
  }, 0.05);
});
