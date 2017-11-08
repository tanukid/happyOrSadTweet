const sentiment = require('sentiment')

/**
 * param: Trump tweet
 * returns: 'happy' or 'sad'
 */
module.exports =  {
  happyOrSad(tweet) {
    return sentiment(tweet).score > 0 ? 'Happy!' : 'Sad!'
  }
}
