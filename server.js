const express = require('express')
const http = require('http')
const bodyParser = require('body-parser')

require('dotenv').config()

const app = express()
app.set('trust proxy', 1)

app.set('port', process.env.PORT || 8080)
app.use(express.static(`${__dirname}/public`))

app.use(bodyParser.json())
app.use(
	bodyParser.urlencoded({
		extended: true,
	}),
)

http.createServer(app).listen(app.get('port'), () => {
	console.log(`HTTP Listening on ${app.get('port')}...`)
	console.log('Press Ctrl + C to stop.')
})
