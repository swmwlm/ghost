var path= require('path'),config;
config = {
	production: {
		url: 'http://mytestblog.com',
		// mail: {},
		database: {
			client: 'mysql',
			connection: {
				host: '192.168.100.138',
				user: 'ghost',
				password: 'ghost',
				database: 'ghost',
				port: '13306',
				charset: 'utf8'
			}
			// ,debug: false
		},
		paths: {
			contentPath: path.join(process.env.GHOST_CONTENT, '/')
		},
		server: {
			host: '0.0.0.0',
			port: '2368'
		}
	}
};

module.exports = config;