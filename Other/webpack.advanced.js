



// Advanced Webpack options for server-side prerendering and up-to-date settings



const path = require( 'path' )
const webpack = require( 'webpack' )
const merge = require( 'webpack-merge' )
const AngularCompilerPlugin = require( '@ngtools/webpack' ).AngularCompilerPlugin
const CheckerPlugin = require( 'awesome-typescript-loader' ).CheckerPlugin
const BundleAnalyzerPlugin = require( 'webpack-bundle-analyzer' ).BundleAnalyzerPlugin

const { sharedModuleRules } = require( './webpack.additions' )


module.exports = ( env ) => {
	// Configuration in common to both client-side and server-side bundles
	const isDevBuild = !( env && env.prod )
	const sharedConfig = {
		stats: { modules: false },
		context: __dirname,
		resolve: { extensions: [ '.js', '.ts' ] },
		output: {
			filename: '[name].js',
			// Webpack dev middleware, if enabled, handles requests for this URL prefix
			publicPath: 'dist/'
		},
		module: {
			rules: [
				{
					test: /\.ts$/,
					use: isDevBuild ? [
						'awesome-typescript-loader?silent=true',
						'angular2-template-loader', 'angular2-router-loader'
					] : '@ngtools/webpack'
				},
				{
					test: /\.html$/,
					use: 'html-loader?minimize=false'
				},
				{
					test: /\.css$/,
					use: [
						'to-string-loader',
						isDevBuild ? 'css-loader' : 'css-loader?minimize'
					]
				},
				{
					test: /\.(png|jpg|jpeg|gif|svg)$/,
					use: 'url-loader?limit=25000'
				},
				...sharedModuleRules
			]
		},
		plugins: [ new CheckerPlugin( ) ]
	}
	
	// Configuration for client-side bundle suitable for running in browsers
	const clientBundleOutputDir = './wwwroot/dist'
	const clientBundleConfig = merge( sharedConfig, {
		entry: { 'main-client': './ClientApp/boot.browser.ts' },
		output: { path: path.join( __dirname, clientBundleOutputDir ) },
		plugins: [
			new webpack.DllReferencePlugin( {
				context: __dirname,
				manifest: require( './wwwroot/dist/vendor-manifest.json' )
			} )
		].concat( isDevBuild ? [
			// Plugins that apply in development builds only
			new webpack.SourceMapDevToolPlugin( {
				// Remove this line if you prefer inline source maps
				filename: '[file].map',
				// Point sourcemap entries to the original file locations on disk
				moduleFilenameTemplate: path.relative( clientBundleOutputDir, '[resourcePath]' )
			} )
		] : [
			// new BundleAnalyzerPlugin( ),
			// Plugins that apply in production builds only
			new AngularCompilerPlugin( {
				mainPath: path.join( __dirname, 'ClientApp/boot.browser.ts' ),
				tsConfigPath: './tsconfig.json',
				entryModule: path.join( __dirname, 'ClientApp/app/app.module.browser#AppModule' ),
				exclude: [ './**/*.server.ts' ]
			} ),
			new webpack.optimize.UglifyJsPlugin( { output: { ascii_only: true, } } ),
		] ),
		devtool: isDevBuild ? 'cheap-eval-source-map' : false,
		node: { fs: 'empty' }
	} )
	
	// Configuration for server-side prerendering bundle suitable for running in Node
	const serverBundleConfig = merge( sharedConfig, {
		// resolve: { mainFields: ['main'] },
		entry: { 'main-server': isDevBuild ? './ClientApp/boot.server.ts' : './ClientApp/boot.server.PRODUCTION.ts' },
		plugins: [
			new webpack.DllReferencePlugin( {
				context: __dirname,
				manifest: require( './ClientApp/dist/vendor-manifest.json' ),
				sourceType: 'commonjs2',
				name: './vendor'
			} )
		].concat( isDevBuild ? [
			// fixes WARNING Critical dependency: the request of a dependency is an expression
			new webpack.ContextReplacementPlugin( /(.+)?angular(\\|\/)core(.+)?/, path.join( __dirname, 'src' ), {  } ),
			// fixes WARNING Critical dependency: the request of a dependency is an expression
			new webpack.ContextReplacementPlugin( /(.+)?express(\\|\/)(.+)?/, path.join( __dirname, 'src' ), {  } )
		] : [
			new webpack.optimize.UglifyJsPlugin( { mangle: false, compress: false, output: { ascii_only: true, } } ),
			// Plugins that apply in production builds only
			new AngularCompilerPlugin( {
				mainPath: path.join( __dirname, 'ClientApp/boot.server.PRODUCTION.ts' ),
				tsConfigPath: './tsconfig.json',
				entryModule: path.join( __dirname, 'ClientApp/app/app.module.server#AppModule' ),
				exclude: [ './**/*.browser.ts' ]
			} )
		] ),
		output: { libraryTarget: 'commonjs', path: path.join( __dirname, './ClientApp/dist' ) },
		target: 'node',
		// switch to "inline-source-map" if you want to debug the TS during SSR
		devtool: isDevBuild ? 'cheap-eval-source-map' : false
	} )
	return [ clientBundleConfig, serverBundleConfig ]
}



