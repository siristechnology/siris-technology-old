import querystring from 'querystring'
import sendEmail from '../src/utility/email-sender'

exports.handler = async event => {
	if (event.httpMethod !== 'POST') {
		return { statusCode: 405, body: 'Method Not Allowed' }
	}

	console.log('printing event.body', event.body)
	const emailMessage = querystring.parse(event.body)

	if (emailMessage && emailMessage.message && emailMessage['g-recaptcha-response']) {
		try {
			await sendEmail(emailMessage)
			return { statusCode: 200, body: 'Feedback Sent successful.' }
		} catch (error) {
			return {
				statusCode: 500,
				body: 'Feedback Send Failed.',
			}
		}
	}
	return { statusCode: 500, body: "Feedback didn't get sent." }
}
