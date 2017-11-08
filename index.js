const sentiment = require('sentiment');

/**
 * param: Trump tweet
 * returns: 'happy' or 'sad'
 */
function happyOrSad(tweet) {
  return sentiment(tweet).score > 0 ? '😄 ' : '😢';
}

console.log(happyOrSad('Stock market hit yet another all-time record high yesterday. There is great confidence in the moves that my Administration....'))
