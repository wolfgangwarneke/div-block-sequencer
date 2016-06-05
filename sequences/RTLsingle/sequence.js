// This is a left to right "single walking through" sequence
// It was built off of LTRfill and adds a feature to "clean up its track"

var blockAmt = $('.sequenceblock').length;
var blockCounter = 0;

function sequence() {
    setTimeout(function () {
        $('.sequenceblock:eq('+blockCounter+')').css('background-color', '#ddf');
        $('.sequenceblock:eq('+(blockCounter-1)+')').css('background-color', 'rgba(256, 0, 0, .2)');//cleans up the previous sequence block
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



$(document).ready(function() {
  $('.container').click(sequence);
});
