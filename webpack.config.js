



const Webpack = require( 'webpack' )
const Html = require( 'html-webpack-plugin' )
const Clean = require( 'clean-webpack-plugin' )
const Extract = require( 'extract-text-webpack-plugin' )
const Uglify = require( 'uglifyjs-webpack-plugin' )

const path = require( 'path' )


module.exports = {
	devtool: 'inline-source-map',
	entry: {
		main: './Angular/main.ts',
		polyfills: './Angular/polyfills.ts',
		vendor: './Angular/vendor.ts'
	},
	resolve: { extensions: [ '.ts', '.js' ] },
	module: {
		rules: [
			{
				test: /\.ts$/,
				loaders: [
					{
						loader: 'awesome-typescript-loader',
						options: { configFileName: path.resolve( __dirname, 'tsconfig.json' ) }, 
					},
					'angular2-template-loader'
				]
			},
			/* {
				test: /\.html$/,
				exclude: [
					path.resolve( __dirname, 'Views' ),
				],
				loader: 'html-loader'
			}, */
			{ test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/, loader: 'file-loader?name=images/[name].bundle.[ext]' },
			/* { test: /\.css$/, use: [ 'to-string-loader', 'style-loader', 'css-loader' ] }, */
			{
				test: /\.css$/,
				exclude: [ path.resolve( __dirname, 'app' ) ],
				loader: Extract.extract( { fallback: 'style-loader', use: [ 'css-loader?sourceMap' ] } )
			},
			{
				test: /\.css$/,
				include: [
					path.resolve( __dirname, 'app' )
				],
				loader: 'raw-loader'
			}
		]
	},
	plugins: [
		new Clean( [ 'Root' ] ),
		new Html( { filename: '_Layout.cshtml', template: 'Views/Shared/_WebLayout.cshtml' } ),
		new Extract( 'styles.bundle.css' ),
		new Uglify( { sourceMap: true } ),
		new Webpack.optimize.CommonsChunkPlugin( { name: [ 'main', 'vendor', 'polyfills' ] } ),
		new Webpack.ContextReplacementPlugin( /\@angular(\\|\/)core(\\|\/)esm5/, path.join( __dirname, 'app' ) )
	],
	node: {
		fs: 'empty'
	},
	output: {
		filename: '[name].bundle.js',
		chunkFilename: '[id].chunk.js',
		path: path.resolve( __dirname, 'Root' ),
		publicPath: '/'
	},
}



