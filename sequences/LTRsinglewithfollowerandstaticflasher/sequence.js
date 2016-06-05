// This is a left to right single sequence with a follower block
// It was built off of LTRfillsingle and adds a "follwer" block of a different color

var blockAmt = $('.sequenceblock').length;
var blockCounter = 0;

function resetColors() {
  setTimeout(function() {
    $('.sequenceblock').css('background-color', defaultColor);
    $('#flasher').toggleClass('hidden');//rest flasher at end
  }, 300);
}

function sequence() {
    setTimeout(function () {
        if ( (blockCounter % 2 === 0) && (blockCounter > 1) ) {
          $('#flasher').toggleClass('hidden');
        }
        $('.sequenceblock:eq('+blockCounter+')').css('background-color', singleColor);
        if ( !(blockCounter === 0) ) {
          $('.sequenceblock:eq('+(blockCounter-1)+')').css('background-color', followColor);
        }
        $('.sequenceblock:eq('+(blockCounter-2)+')').css('background-color', defaultColor);//cleans sequence block before follower
        blockCounter++;
        console.log(blockCounter);
        if (blockCounter < blockAmt) {
          sequence();
        } else {
          blockCounter = 0;
          setTimeout(function() {
            $('.sequenceblock:eq('+(blockCounter-1)+')').css('background-color', followColor);
            $('.sequenceblock:eq('+(blockCounter-2)+')').css('background-color', defaultColor);//cleans leftover follower
            resetColors();
          }, 300);
        }
    }, 300);
}



$(document).ready(function() {
  $('.container').click(sequence);
});
