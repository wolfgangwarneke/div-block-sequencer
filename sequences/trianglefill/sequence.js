// This sequence fills in the perimeter clockwise

var blockAmt = $('.sequenceblock').length;
var blockCounter = 0;






function sequence() {
    setTimeout(function () {
        $('.sequenceblock:eq('+blockCounter+')').css('background-color', '#ddf');
        console.log(blockCounter);
        if (blockCounter < 4) {
          blockCounter++;
          sequence();
        } else if (blockCounter === 4) {
          blockCounter += 3;//get first left
          sequence();
        } else if (false) {
          //get right side
        } else if (false) {
          //get bottom row
          console.log('BOTTOM row')
        } else {
          blockCounter = 0;
          setTimeout(function() {
            $('.sequenceblock').css('background-color', 'rgba(256, 0, 0, .2)');
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
