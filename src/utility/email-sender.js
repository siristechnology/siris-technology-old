const nodemailer = require('nodemailer')
const winston = require('winston')
const logger = require('../../config/logger')

require('dotenv').config({
	path: `.env.${process.env.NODE_ENV}`,
})

export default function sendEmail(emailMessage) {
	const transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: process.env.GMAIL_ACCOUNT,
			pass: process.env.GMAIL_PASSWORD,
		},
	})

	console.log('process.env.FEEDBACK_RECEIVER', process.env.FEEDBACK_RECEIVER)

	const mailOptions = {
		to: process.env.FEEDBACK_RECEIVER,
		subject: `Feedback through website from "${emailMessage.name}"`,
		text: `Email: ${emailMessage.email} \nMessage: ${emailMessage.message}`,
	}

	return new Promise((resolve, reject) => {
		transporter.sendMail(mailOptions, (error, info) => {
			if (error) {
				console.log(error)
				logger.error(winston.exceptions.getAllInfo(error))
				reject(error)
			} else {
				resolve(`Email sent: ${info.response}`)
				console.log(`Email sent: ${info.response}`)
			}
		})
	})
}
