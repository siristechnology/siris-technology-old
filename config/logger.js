const winston = require('winston')

const logger = winston.createLogger({
	transports: [
		new winston.transports.Console({
			handleExceptions: true,
			level: process.env.logLevel || 'info',
		}),
	],
})

logger.on('error', error => {
	console.log('Winston Logger crashed with error: ', error)
})

module.exports = logger
