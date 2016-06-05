// This shows a random single block until it has occupied each space once

var blockAmt = $('.sequenceblock').length;
var iterationCounter = 0;

var blockArray = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
var randomBlockIndex;
var randomBlock;
var blocksLeft;

function getRandomBlock() {
//changing the placement of the next line made it necessary to change the conditional on line 23 to blocksLeft !== 1 instead of 0 as in 'randomsingle'//
    blocksLeft = blockArray.length;
    randomBlockIndex = Math.floor(Math.random() * blocksLeft);
    randomBlock = blockArray[randomBlockIndex];
    blockArray.splice(randomBlockIndex, 1);
}

function sequence() {
    setTimeout(function () {
        getRandomBlock();
        $('.sequenceblock:eq('+randomBlock+')').css('background-color', singleColor);
        if (blocksLeft !== 1) {
          sequence();
        } else {
          blockArray = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
          setTimeout(function() {
            $('.sequenceblock').css('background-color', defaultColor);
          }, 300);
        }
    }, 300);
}



$(document).ready(function() {
  $('.container').click(sequence);
});
