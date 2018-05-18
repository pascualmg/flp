var numbers = [4,10,0,27,42, 17, 15,-6,58];
var faves = [];
var magicNumber = 0;

pickFavoriteNumbers();
calculateMagicNumber();
outputMsg();

//*******************************************
function pickFavoriteNumbers() {
  for (let num of numbers) {
    if ( num >= 10 && num <= 20 ) {
      faves.push(num)
    }
  }
}
function calculateMagicNumber() {
  for ( let fave of faves) {
    magicNumber = magicNumber + fave;
  }
}
function outputMsg() {
  var msg = `The magic number is ${magicNumber}`;
  console.log( msg );
}