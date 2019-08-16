import sendEmail from './email-sender'

exports.handler = async event => {
	if (event.httpMethod !== 'POST') {
		return { statusCode: 405, body: 'Method Not Allowed' }
	}

	console.log('printing event.body', event.body)
	const emailMessage = JSON.parse(event.body)

	if (emailMessage && emailMessage.message) {
		sendEmail(emailMessage)
		return { statusCode: 200, body: 'Feedback Sent successful.' }
	}
	return { statusCode: 500, body: "Feedback didn't get sent." }
}
