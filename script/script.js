/*jshint esversion: 6 */
console.log('running...');

setInterval(function(){
  let timeDisplay = document.querySelector('h1');

  let d = new Date();
  let h = d.getHours();
  let m = d.getMinutes();
  let s = d.getSeconds();
  let amPm = h >= 12 ? 'PM' : 'AM';

  if(h > 12) h-= 12;
  if(h == 0) h = 12;


  timeDisplay.textContent = `${h}:${m}:${s} ${amPm}`;
}, 1000);
