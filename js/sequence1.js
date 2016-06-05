// This is a left to right fill sequence

var blockAmt = $('.sequenceblock').length;
var blockCounter = 0;

function sequence() {
    setTimeout(function () {
        $('.sequenceblock:eq('+blockCounter+')').css('background-color', '#ddf');
        blockCounter++;
        console.log(blockCounter);
        if (blockCounter < blockAmt) {
          sequence();
        } else {
          blockCounter = 0;
          setTimeout(function() {
            $('.sequenceblock').css('background-color', 'rgba(256, 0, 0, .2)');
          }, 300);
        }
    }, 300);
}

function manytimes(howmanytimes) {
  for (i = 0; i < howmanytimes; i++) {
    var timing = 300;
    setTimeout(sequence, timing);
    timing += 300 * 16;
}
}

$(document).ready(function() {
  // var thismany = parseInt(prompt('How many times would you like to run this sequence?'));
  // $('.container').click(manytimes(thismany));
  $('.container').click(sequence);
});
