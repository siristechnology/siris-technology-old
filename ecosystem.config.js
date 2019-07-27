module.exports = {
	apps: [
		{
			name: 'siris-technology',
			script: 'server.js',
			instances: 1,
			// instances: process.env.APP_INSTANCES || 'max',
			autorestart: true,
			watch: false,
			max_memory_restart: process.env.APP_MEMORY_LIMIT || '2G',
			env: {
				NODE_ENV: 'development',
			},
			env_production: {
				NODE_ENV: 'production',
			},
		},
	],
}
