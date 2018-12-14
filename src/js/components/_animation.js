import {Elastic,Power0,Sine, TimelineMax} from 'gsap/all';

let textNodes = $('.js-main-text');
const wordsRegExp = /\S+/g;

function splitOnSpanText() {
  textNodes.each(function() {
    let textNode = $(this);
    let wordsArray = textNode.text().match(wordsRegExp);
    textNode.text('');

    for (let i = 0; i < wordsArray.length; i++) {
      wordsArray[i] += ' ';
      let charArray = [...wordsArray[i]];
      let wordNode = $('<span class=\'main__word\'></span>');
      for (let j = 0; j < charArray.length; j++) {
        wordNode.append($('<span class=\'main__letter\'></span>').text(charArray[j]));
      }
      $(this).append(wordNode);
    }
    textNode.css('opacity', '1');
  });
}

function splitOnRows() {
  let rowsArray = [];
  textNodes.each(function() {
    let width = $(this).outerWidth();
    let wordsArray = $(this).find('.main__word');
    let row = [];
    let currentRowWidth = 0;
    wordsArray.each(function(index) {
      let currentWord = $(this);
      if ((currentRowWidth + currentWord.outerWidth() < width)) {
        row.push(...currentWord.find('.main__letter'));
        currentRowWidth += currentWord.outerWidth();
        if (index + 1 === wordsArray.length) {
          rowsArray.push(row);
        }
      } else {
        rowsArray.push(row);
        row = [];
        row.push(...currentWord.find('.main__letter'));
        currentRowWidth = currentWord.outerWidth();
        if (index + 1 === wordsArray.length) {
          rowsArray.push(row);
        }
      }
    });
  });
  return rowsArray;
}

$(window).ready(() => {
  splitOnSpanText();

  let rows = splitOnRows();

  $(rows).each(function(index) {
    let reverseCharArray = $(this.reverse());
    let stage = 0.5 / reverseCharArray.length;

    setTimeout(() => {
      new TimelineMax().staggerFromTo($(this), 1.5, {
        y: 15,
      }, {
        y: 0,
        ease: Elastic.easeOut.config(2.5, 0.9)
      }, stage);

      new TimelineMax().staggerFromTo($(this), 1.5, {
        opacity: 0
      }, {
        opacity: 1,
        ease: Power0.easeNone
      }, stage);

    }, index * 100);

  });
});
//
// $(window).ready(() => {
//   new TimelineMax().staggerFromTo(textNodes, 1, {
//     y: 75,
//     opacity: 0
//   }, {
//     y: 0,
//     opacity: 1,
//     ease: Sine.easeOut
//   }, 0.2);
//
// });
