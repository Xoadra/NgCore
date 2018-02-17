



const Webpack = require( 'webpack' )
const Html = require( 'html-webpack-plugin' )
const Clean = require( 'clean-webpack-plugin' )
const Extract = require( 'extract-text-webpack-plugin' )
const Uglify = require( 'uglifyjs-webpack-plugin' )

const path = require( 'path' )


module.exports = {
	devtool: 'inline-source-map',
	entry: {
		main: './Views/main.ts',
		polyfills: './Views/polyfills.ts',
		vendor: './Views/vendor.ts'
	},
	resolve: {
		extensions: [ '.ts', '.js' ]
	},
	module: {
		rules: [
			{
				test: /\.ts$/,
				loaders: [
					/* 'awesome-typescript-loader', */
					{
						loader: 'awesome-typescript-loader',
						options: { configFileName: path.resolve( __dirname, 'tsconfig.json' ) }, 
					},
					'angular2-template-loader'
				]
			},
			{ test: /\.(cshtml|html)$/, loader: 'html-loader' },
			{ test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/, loader: 'file-loader' },
			{ test: /\.css$/, use: [ 'style-loader', 'css-loader' ] },
			/* {
				test: /\.css$/,
				exclude: path.resolve( __dirname, 'app' ),
				loader: Extract.extract( { fallbackLoader: 'style-loader', loader: 'css-loader?sourceMap' } )
			}, */
			{
				test: /\.css$/,
				include: [
					path.resolve( __dirname, 'app' ),
					path.resolve( __dirname, 'css' ),
					path.resolve( __dirname, 'lib' ),
				],
				loader: 'raw-loader'
			}
		]
	},
	plugins: [
		new Clean( [ 'Root' ] ),
		new Html( { template: 'Views/Shared/_Layout.cshtml' } ),
		new Extract( '[name].css' ),
		new Uglify( { sourceMap: true } ),
		new Webpack.ContextReplacementPlugin(
			/angular(\\|\/)core(\\|\/)@angular/,
			/* path.resolve( './Views' ), */
			{  } // Map of the routes
		),
		new Webpack.optimize.CommonsChunkPlugin( {
			name: [ 'main', 'vendor', 'polyfills' ]
		} )
	],
	output: {
		/* path: helpers.root( 'Root' ), */
		path: path.resolve( __dirname, 'Root' ),
		publicPath: '/',
		filename: '[name].bundle.js',
		chunkFilename: '[id].chunk.js'
	},
}


