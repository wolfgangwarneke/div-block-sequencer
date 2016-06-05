// This sequence fills in the perimeter clockwise

var blockAmt = $('.sequenceblock').length;
var blockCounter = 0;

var proceed = true;
var proceed2 = true;
var proceed3 = true;
var proceed4 = true;




function sequence() {
    setTimeout(function () {
        $('.sequenceblock:eq('+blockCounter+')').css('background-color', '#ddf');
        console.log(blockCounter);
        if (blockCounter < 3) {
          blockCounter++;
          sequence();
        } else if (proceed) {
          proceed = false;
          blockCounter += 4;//get 2nd row right
          sequence();
        } else if (proceed2) {
          proceed2 = false;
          blockCounter += 4;//get 3rd row right
          sequence();
        } else {
          blockCounter = 0;
          reverseSequence();//leave this sequence
        }
    }, 300);
}

function reverseSequence() {
    setTimeout(function () {
        $('.sequenceblock:eq('+(-blockCounter - 1)+')').css('background-color', singleColor);
        blockCounter++;
        console.log(blockCounter);
        if (blockCounter < 4) {
          reverseSequence();
        } else if (proceed3) {
          proceed3 = false;
          blockCounter += 3;
          console.log(-blockCounter - 1);
          reverseSequence();
        } else if (proceed4) {
          proceed4 = false;
          blockCounter += 3;
          console.log(-blockCounter - 1);
          reverseSequence();
        } else {
          blockCounter = 0;
          proceed = proceed2 = proceed3 = proceed4 = true;
          setTimeout(function() {
            $('.sequenceblock').css('background-color', defaultColor);
          }, 300);
        }
    }, 300);
}



// function manytimes(howmanytimes) {
//   for (i = 0; i < howmanytimes; i++) {
//     var timing = 300;
//     setTimeout(sequence, timing);
//     timing += 300 * 16;
// }
// }

$(document).ready(function() {
  // var thismany = parseInt(prompt('How many times would you like to run this sequence?'));
  // $('.container').click(manytimes(thismany));
  $('.container').click(sequence);
});
