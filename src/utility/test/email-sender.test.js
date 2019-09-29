import SendEmail from '../email-sender'

process.env.NODE_ENV = 'development'

require('dotenv').config({
	path: `.env.${process.env.NODE_ENV}`,
})

describe('email-sender', () => {
	it('sendEmail should send email', async () => {
		const emailMessage = {
			name: 'suraj',
			message: 'test message',
			email: 'test@jest.com',
		}

		const result = await SendEmail(emailMessage)
		expect(result).toBeTruthy()
	})
})
