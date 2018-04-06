



// Source code custom Webpack configuration for attempting server-side prerendering



const webpack = require( 'webpack' )
const amal = require( 'webpack-merge' )
const path = require( 'path' )

const AngularCompilerPlugin = require( '@ngtools/webpack' ).AngularCompilerPlugin
const CheckerPlugin = require( 'awesome-typescript-loader' ).CheckerPlugin


// Module exports converted from object to arrow function to use environment variables
module.exports = ( env ) => {
	
	// Environment identity, setting it to the returned boolean based upon the set environment
	const develop = !( env && env.prod )
	
	
	// Universal config for all source code bundles used for browser and server rendering
	const meta = {
		// Options for what build information is displayed in the terminal while bundling files
		stats: { modules: false },
		// Webpack's absolute route where it looks for any config entry points and loaders
		context: __dirname,
		resolve: { extensions: [ '.ts', '.js' ] },
		devtool: develop ? 'cheap-eval-source-map' : false,
		module: {
			rules: [
				{
					test: /\.ts$/,
					use: develop ? [
						'awesome-typescript-loader?silent=true',
						'angular2-template-loader', 'angular2-router-loader'
					] : '@ngtools/webpack'
				},
				{
					test: /\.(html|cshtml)$/,
					include: [
						path.resolve( __dirname, 'Views' ),
						path.resolve( __dirname, 'Angular' ),
					],
					use: 'html-loader?minimize=false'
				},
				{ test: /\.css$/, use: [ 'to-string-loader', develop ? 'css-loader' : 'css-loader?minimize' ] },
				/* {
					test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/, loader: 'file-loader?name=images/[name].bundle.[ext]'
				}, */
				{ test: /\.(png|jpg|jpeg|gif|svg)$/, use: 'url-loader?limit=25000' }
			]
		},
		// CheckerPlugin supposedly does async error reporting, presumably while bundling
		plugins: [ new CheckerPlugin( ) ],
		output: { filename: '[name].bundle.js', publicPath: 'build/' }
	}
	
	
	// Frontend config that generates bundles that are rendered after the initial page loads
	const view = amal( meta, {
		// Allows code designed for running in Node to operate in non-Node environments
		node: { fs: 'empty' },
		entry: { main: './Angular/main.ts' },
		plugins: [
			// Name the vendor manifest json file and look up the remaining unknown settings
			new webpack.DllReferencePlugin( {
				context: __dirname,
				manifest: require( './Root/build/vendor.bundle.json' )
			} )
		// Development-specific plugins for configuring and building the final bundled output
		].concat( develop ? [
			// Just create inline source maps instead by removing the filename option below
			new webpack.SourceMapDevToolPlugin( {
				filename: '[file].map',
				moduleFilenameTemplate: path.relative( 'Root/build', '[resourcePath]' ) 
			} )
		// Production-specific plugins for configuring and building the final bundled output
		] : [
			// Verify the functionality of the UglifyJsPlugin and AngularCompilerPlugin settings
			new AngularCompilerPlugin( {
				mainPath: path.join( __dirname, 'Angular/main.ts' ),
				tsConfigPath: './tsconfig.json',
				// Tentatively using the main app module to see if browser-specific one is needed
				entryModule: path.join( __dirname, 'Angular/app/app.module#AppModule' ),
				exclude: [ './**/dotnet.module.ts' ]
			} ),
			new webpack.optimize.UglifyJsPlugin( { output: { ascii_only: true, } } ),
		] ),
		output: { path: path.join( __dirname, 'Root/build' ) }
	} )
	
	
	// Backend config where ouput bundles are first prerendered in Node for utilizing seo
	const rear = amal( meta, {
		// Identifies the environment the bundles run in, such as in the browser or via Node
		target: 'node',
		entry: { server: './Angular/server.ts' },
		plugins: [
			// Name the vendor manifest json file and look up the remaining unknown settings
			new webpack.DllReferencePlugin( {
				context: __dirname,
				manifest: require( './Angular/build/vendor.bundle.json' ),
				sourceType: 'commonjs2',
				name: './vendor.bundle'
			} )
		// Development-specific plugins for configuring and building the final bundled output
		].concat( develop ? [
			// Helps fix critical dependencies warnings when compiling Angular vendor code
			new webpack.ContextReplacementPlugin( /(.+)?angular(\\|\/)core(.+)?/, path.join( __dirname, 'app' ), {  } ),
			new webpack.ContextReplacementPlugin( /(.+)?express(\\|\/)(.+)?/, path.join( __dirname, 'app' ), {  } )
		// Production-specific plugins for configuring and building the final bundled output
		] : [
			// Verify the functionality of the UglifyJsPlugin and AngularCompilerPlugin settings
			new webpack.optimize.UglifyJsPlugin( { mangle: false, compress: false, output: { ascii_only: true, } } ),
			new AngularCompilerPlugin( {
				mainPath: path.join( __dirname, 'Angular/server.ts' ),
				tsConfigPath: './tsconfig.json',
				// Questionable outcome with this module without an existing browser-specific one
				entryModule: path.join( __dirname, 'Angular/app/dotnet.module#DotNetModule' ),
				exclude: [ './**/app.module.ts' ]
			} )
		] ),
		// LibraryTarget setting is unknown and necessitates further investigation into its use
		output: { path: path.join( __dirname, 'Angular/build' ), libraryTarget: 'commonjs' }
	} )
	
	
	// Returned configs for Webpack to interpret, build, and output the specified bundles
	return [ view, rear ]
	
}



