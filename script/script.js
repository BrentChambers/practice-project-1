/*jshint esversion: 6 */
(function(){
  "use strict";
  let userPref = {
    displaySeconds: false
  };

  if(userPref.displaySeconds){
    console.log('trueeee!');
  }

  function assemble(){

  }

  //Menu button
  let menuButton = document.querySelector('.menu-button');
  let menuScreen = document.querySelector('.menu');
  menuButton.addEventListener('click', function(){
    menuScreen.classList.toggle('displayFullScreen');
  });

  let monthArr = [
    'January','February','March','April',
    'May','June','July','August',
    'September','October','November','December'
  ];

  let dayArr = [
    'Sunday', 'Monday', 'Tuesday','Wednesday',
    'Thursday', 'Friday', 'Saturday'
  ];


  function getTime(){
    let timeDisplay = document.querySelector('#time');
    let dateDisplay = document.querySelector('#date');

    let d = new Date();
    let h = d.getHours();
    // let m = d.getMinutes();
    let m = d.getMinutes();
    let s = d.getSeconds();
    let amPm = h >= 12 ? 'PM' : 'AM';

    let day = d.getDay();
    let month = d.getMonth();
    let monthDate = d.getDate();
    let year = d.getFullYear();

    //Removing military time
    if(h > 12) h-= 12;

    //Midnight is 12 and not 0.
    if(h == 0) h = 12;

    //Padding minute number
    if(m < 10){
      m = String(m).padStart(2, 0);
    }

    //Padding second number
    if(s < 10){
      s = String(s).padStart(2, 0);
    }

    //Assemble time and date and display to the DOM
    timeDisplay.textContent = `${h}:${m}:${s} ${amPm}`;
    dateDisplay.textContent = `${dayArr[day]}, ${monthArr[month]} ${monthDate}, ${year}`;
  }

  getTime();
  setInterval(getTime, 1000);
})();
