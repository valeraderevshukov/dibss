import {WIN} from '../constants';
import 'simple-parallax-jquery';


let parallaxItem = $('.js-parallax-item');
let parallaxItemReverse = $('.js-parallax-item-reverse');

WIN.ready(() => {

  WIN.mousemove((e) => {
    const xPercentPos = +((e.clientX / WIN.outerWidth()) * 100).toFixed(1);
    const yPercentPos = +((e.clientY / WIN.outerHeight()) * 100).toFixed(1);
    const translateX = (10 * xPercentPos - 500) / -100;
    const translateY = (10 * yPercentPos - 500) / -100;

    parallaxItem.css('transform', `translateX(${translateX}px) translateY(${translateY}px)`);
    parallaxItemReverse.css('transform', `translateX(${-translateX}px) translateY(${-translateY}px)`);
  });

});
