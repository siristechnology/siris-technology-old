import SendEmail from '../email-sender'

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
