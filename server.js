const express = require('express')
const http = require('http')
const bodyParser = require('body-parser')

require('dotenv').config()

const app = express()
app.set('trust proxy', 1)

// Configure Express
app.set('port', process.env.PORT || 8080)
app.use(express.static(`${__dirname}/public`))

// app.use((req, res, next) => {
// 	res.header('Access-Control-Allow-Origin', '*')
// 	res.header(
// 		'Access-Control-Allow-Headers',
// 		'Origin, X-Requested-With, Content-Type, Accept'
// 	)
// 	next()
// })

app.use(bodyParser.json())
app.use(
	bodyParser.urlencoded({
		extended: true,
	})
)

require('./routes/routes.js').routes(app)

http.createServer(app).listen(app.get('port'), () => {
	console.log(`HTTP Listening on ${app.get('port')}...`)
	console.log('Press Ctrl + C to stop.')
})
