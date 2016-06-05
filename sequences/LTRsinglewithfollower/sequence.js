// This is a left to right single sequence with a follower block
// It was built off of LTRfillsingle and adds a "follwer" block of a different color

var blockAmt = $('.sequenceblock').length;
var blockCounter = 0;

function resetColors() {
  setTimeout(function() {
    $('.sequenceblock').css('background-color', 'rgba(256, 0, 0, .2)');
  }, 300);
}

function sequence() {
    setTimeout(function () {
        $('.sequenceblock:eq('+blockCounter+')').css('background-color', '#ddf');
        if ( !(blockCounter === 0) ) {
          $('.sequenceblock:eq('+(blockCounter-1)+')').css('background-color', '#ff6');
        }
        $('.sequenceblock:eq('+(blockCounter-2)+')').css('background-color', 'rgba(256, 0, 0, .2)');//cleans sequence block before follower
        blockCounter++;
        console.log(blockCounter);
        if (blockCounter < blockAmt) {
          sequence();
        } else {
          blockCounter = 0;
          setTimeout(function() {
            $('.sequenceblock:eq('+(blockCounter-1)+')').css('background-color', '#ff6');
            $('.sequenceblock:eq('+(blockCounter-2)+')').css('background-color', 'rgba(256, 0, 0, .2)');//cleans leftover follower
            resetColors();
          }, 300);
        }
    }, 300);
}



$(document).ready(function() {
  $('.container').click(sequence);
});
