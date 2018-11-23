import components from './components';
import { DOC, BODY, NO_TOUCH, LOADED } from './constants';
import { isTouch, SCROLL_TO } from './utils';
import svg4everybody from 'svg4everybody';


const scrollTo = $('.js-btn-scroll');
scrollTo.on('click', function() {
  let id = $(this).attr('href');
  let position = $(id).offset().top;
  SCROLL_TO(position);
});

svg4everybody();

DOC.ready(components);

if (!isTouch()) BODY.addClass(NO_TOUCH);
BODY.addClass(LOADED);
