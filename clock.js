var secondHand = document.getElementById('second');
var hourHand = document.getElementById('hour');
var minuteHand = document.getElementById('minute');

var count = 0;
var count1 = 0;
var count2 = 0;

//this function should be called in a setInterval
 //need a variable that will count up;
 // var degrees = count;
function movingSecond () {
  count+=6;
  secondHand.style.transform = 'rotate(' + count + 'deg)'
}

function movingMinute () {
  count1+=6;
  minuteHand.style.transform = 'rotate(' + count1 + 'deg)'
}

function movingHour () {
  count2+=30;
  hourHand.style.transform = 'rotate(' + count2 + 'deg)'
}

setInterval(movingSecond, 1000);
setInterval(movingMinute, 1000*60);
setInterval(movingHour, 1000*60*60);
//setInterval(rotatMinutes, 1000*60);
