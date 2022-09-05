// started
const $ = document;
function _log(value) {
  console.log(value);
}
// pics
let pics = [
  './images/0.jpg',
  './images/1.jpeg',
  './images/2.jpg',
  './images/3.jpg',
  './images/4.jpeg',
  './images/5.jpg',
  './images/6.jpg',
];
let targetPic = 0;

let sliderElem = $.getElementById('imageSlider');
let nextBtnElem = $.getElementById('nextbtn');
let previousBtnElem = $.getElementById('prevbtn');

function nextItems() {
  targetPic++;
  if (targetPic > pics.length - 1) {
    targetPic = 0;
  }
  sliderElem.src = pics[targetPic];
}
function prevItems() {
    targetPic--;
    if (targetPic === -1) {
      targetPic = pics.length - 1;
    }
    sliderElem.src = pics[targetPic];
}

setInterval(nextItems, 5000);
nextBtnElem.addEventListener('click', nextItems);
previousBtnElem.addEventListener('click', prevItems);
