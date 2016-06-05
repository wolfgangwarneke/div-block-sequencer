// This shows a random single block until it has occupied each space once

var blockAmt = $('.sequenceblock').length;
var iterationCounter = 0;

var blockArray = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
var randomBlockIndex;
var randomBlock;
var lastBlockArray = [];
var lastBlock;
var blocksLeft = 16;

function getRandomBlock() {
    randomBlockIndex = Math.floor(Math.random() * blocksLeft);
    randomBlock = blockArray[randomBlockIndex];
    blockArray.splice(randomBlockIndex, 1);
    lastBlockArray.push(randomBlock);
    lastBlock = lastBlockArray[(lastBlockArray.length)-2];
    blocksLeft = blockArray.length;
}

function sequence() {
    setTimeout(function () {
        getRandomBlock();
        $('.sequenceblock:eq('+randomBlock+')').css('background-color', singleColor);
        $('.sequenceblock:eq('+lastBlock+')').css('background-color', defaultColor);
        console.log('tic');
        if (blocksLeft !== 0) {
          sequence();
        } else {
          blockArray = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
          lastBlockArray = [];
          blocksLeft = 16;
          setTimeout(function() {
            $('.sequenceblock').css('background-color', defaultColor);
          }, 300);
        }
    }, 300);
}



$(document).ready(function() {
  $('.container').click(sequence);
});
