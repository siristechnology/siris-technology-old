const mailgun = require('mailgun-js')
const winston = require('winston')
const logger = require('../../config/logger')

process.env.NODE_ENV = 'development'

require('dotenv').config({
	path: `.env.${process.env.NODE_ENV}`,
})

export default function sendEmail(emailMessage) {
	const mg = mailgun({ apiKey: process.env.MAILGUN_API_KEY, domain: process.env.EMAIL_DOMAIN })
	const data = {
		from: `${emailMessage.name} <${emailMessage.email}>`,
		to: process.env.FEEDBACK_RECEIVER,
		subject: `Feedback through website from "${emailMessage.name}"`,
		text: `Email: ${emailMessage.email} \nMessage: ${emailMessage.message}`,
	}

	return mg.messages().send(data)
}
