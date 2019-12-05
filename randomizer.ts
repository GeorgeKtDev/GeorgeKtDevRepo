/**
 * This method will return a random number between zero and @param to
 * @param to upper limit (defaults to 10)
 */
export function getRandomNumber(to = 10) {
    return Math.floor((Math.random() * to) + 1);
}

export function FisherYatesShuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }