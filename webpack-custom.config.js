const path = require( 'path' );
const glob = require('glob');

const bundles = {'app.js': './src/js/app.js', 'main.scss': './src/sass/main.scss'};

const Allfiles = toObject(glob.sync('./src/images/*.*'));

console.log(Allfiles);
module.exports = {
	mode: 'production',
	entry: Allfiles,
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
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				use: [
					{
						loader: 'file-loader',
						options: { outputPath: 'images/', name: '[name].[ext]' },
					},
				],
			}
		],
	},
	devServer: {
		static: './dist',
		watchContentBase: true,
	},
};


function toObject(paths) {
	var ret = bundles;
  
	paths.forEach(function(path) {
	  // you can define entry names mapped to [name] here
	  ret[path.split('/').slice(-1)[0]] = path;
	});
  
	return ret;
  }