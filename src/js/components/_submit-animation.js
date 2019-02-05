import { TimelineLite } from 'gsap';

let submitButton = $('.js-submit-button');
let submitProgress = $('.js-submit-progress');
let submitCheckmark = $('.js-submit-checkmark');
let submitSvg = submitCheckmark.find('svg');


let tl = new TimelineLite();

function triggerSubmitAnimation() {
  tl.to(submitButton, 0, {
    color: 'transparent'
  }).to(submitButton, 1, {
    height: 10,
    width: 300,
    backgroundImage: 'none',
    backgroundColor: '#171c34',
    borderRadius: 100,
    padding: 0,
    ease: Elastic.easeOut.config(1, 0.25)
  })
    .to(submitProgress, 2, {
      width: 300,
      ease: Power0.ease
    })
    .to(submitButton, 0, {
      width: 0
    })
    .to(submitProgress, 0.8, {
      width: 80,
      height: 80,
      borderRadius: 80,
      ease: Elastic.easeOut.config(1, 0.3),
      delay: 0.5
    })
    .to(submitSvg, 0.2, {
      strokeDashoffset: 0
    });
}
export default triggerSubmitAnimation;
// $(window).ready(() => {

//   $('.js-form').on('submit',() => {
//     submitButton.css('pointer-events','none');
//     triggerSubmitAnimation();
//   });
// });
