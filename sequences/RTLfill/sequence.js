// This is a right to left fill sequence

var blockAmt = $('.sequenceblock').length;
var blockCounter = 0;

function sequence() {
    setTimeout(function () {
        $('.sequenceblock:eq('+(-blockCounter - 1)+')').css('background-color', singleColor);
        blockCounter++;
        console.log(blockCounter);
        if (blockCounter < blockAmt) {
          sequence();
        } else {
          blockCounter = 0;
          setTimeout(function() {
            $('.sequenceblock').css('background-color', defaultColor);
          }, 300);
        }
    }, 300);
}



$(document).ready(function() {
  $('.container').click(sequence);
});
