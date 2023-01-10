const path = require( 'path' );
module.exports = {
	mode: 'production',
	entry: [ './src/js/app.js', './src/sass/main.scss' ],
	output: {
		path: path.resolve( __dirname, 'dist' ),
	},
	module: {
		rules: [
			{
				test: /\.js$/i,
				include: path.resolve( __dirname, 'src' ),
				use: {
					loader: 'babel-loader',
					options: {
						presets: [ '@babel/preset-env' ],
					},
				},
			},
			{
				test: /\.css$/i,
				include: path.resolve( __dirname, 'src' ),
				use: [ 'style-loader', 'css-loader', 'postcss-loader' ],
			},
			{
				test: /\.scss$/,
				include: path.resolve( __dirname, 'src' ),
				exclude: /node_modules/,
				use: [
					{
						loader: 'file-loader',
						options: { outputPath: 'css/', name: '[name].min.css' },
					},
					'postcss-loader',
					'sass-loader',
				],
			},
		],
	},
	devServer: {
		static: 'dist',
		watchContentBase: true,
	},
};
