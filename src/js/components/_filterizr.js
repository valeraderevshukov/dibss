import filterizr from '../../../node_modules/filterizr/dist/jquery.filterizr.min.js';
import {ACTIVE} from '../constants';
setTimeout(() => {
  var filterizd = $('.filtr-container').filterizr();
  
}, 100);

const filterControl = $('.js-filter-item');
$(filterControl[0]).addClass(ACTIVE);
filterControl.on('click', function() {
  console.log(filterControl);
  filterControl.removeClass(ACTIVE);
  $(this).addClass(ACTIVE);
});
