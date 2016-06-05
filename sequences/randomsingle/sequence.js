// This is a right to left single block travelling sequence

var blockAmt = $('.sequenceblock').length;
var blockCounter = 0;

function sequence() {
    setTimeout(function () {
        $('.sequenceblock:eq('+(-blockCounter - 1)+')').css('background-color', singleColor);
        $('.sequenceblock:eq('+(-blockCounter)+')').css('background-color', defaultColor);//cleans up the previous sequence block
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
