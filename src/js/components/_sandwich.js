import {WIN} from '../constants';
import {SCROLL_TO} from '../utils';

const sandwich = $('.js-sandwich');
const header = $('.js-header');
let link = $('.js-menu-link');

WIN.ready(() => {
  $('.toggle-menu').on('click', function() {
    sandwich.toggleClass('is-active');
    header.toggleClass('is-open-menu');
  });

  link.on('click', function(event) {
    event.preventDefault();
    let thisAttr = $(this).attr('href');
    let position = $(thisAttr).offset().top;
    sandwich.removeClass('is-active');
    header.removeClass('is-open-menu');
    SCROLL_TO(Math.floor(position));
  });
});
