const express = require('express')
const nunjucks = require('nunjucks')
const https = require('https')
const { happyOrSad } = require('./happyOrSad')
const Twitter = require('twitter')

const app = express() // creates an instance of an express application
nunjucks.configure('views', { noCache: true })
app.engine('html', nunjucks.render)
app.set('view engine', 'html') // have res.render work with html files
app.use(express.static('public'))

var client = new Twitter({
  consumer_key: '',
  consumer_secret: '',
  access_token_key: '',
  access_token_secret: ''
})

app.get('/', function (req, res) {
  var params = { screen_name: 'potus' }
  client.get('statuses/user_timeline', params, (error, tweets, response) => {
    if (!error) {
      res.render('index',
        { tweet: tweets[0].text, happyOrSad: happyOrSad(tweets[0].text) }
      )
    }
  })
})

const port = 3000
const server = app.listen(port, () => console.log('listening to ' + port))

