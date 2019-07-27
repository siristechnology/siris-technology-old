const nodemailer = require('nodemailer')
const winston = require('winston')
const logger = require('../config/logger')

require('dotenv').config({
	path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
	routes(app) {
		app.post('/submit-feedback', (req, res) => {
			console.log('printing req.body', req.body)

			const transporter = nodemailer.createTransport({
				service: 'gmail',
				auth: {
					user: process.env.GMAIL_ACCOUNT,
					pass: process.env.GMAIL_PASSWORD,
				},
			})

			const mailOptions = {
				to: process.env.FEEDBACK_RECEIVER,
				subject: `Feedback through website from "${req.body.name}"`,
				text: `Email: ${req.body.email} \nMessage: ${req.body.message}`,
			}

			transporter.sendMail(mailOptions, (error, info) => {
				if (error) {
					logger.error(winston.exceptions.getAllInfo(error))
					console.log(error)
				} else {
					console.log(`Email sent: ${info.response}`)
				}
			})

			res.status(200).send({ message: 'Feedback Sent successful' })
		})
	},
}
