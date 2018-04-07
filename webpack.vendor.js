



// Vendor library custom Webpack configuration for optimized bundling speed and chunks



const webpack = require( 'webpack' )
const amal = require( 'webpack-merge' )
const path = require( 'path' )

const ExtractTextPlugin = require( 'extract-text-webpack-plugin' )
const CleanWebpackPlugin = require( 'clean-webpack-plugin' )


// Module exports converted from object to arrow function to use environment variables
module.exports = ( env ) => {
	
	// Environment identity, setting it to the returned boolean based upon the set environment
	const develop = !( env && env.prod )
	// Temporarily placed vendor code library lists for testing entry points using the DllPlugin
	const nodeModules = [
		'@angular/animations',
		'@angular/common',
		'@angular/compiler',
		'@angular/core',
		'@angular/forms',
		'@angular/http',
		'@angular/platform-browser',
		'@angular/platform-browser-dynamic',
		'@angular/router',
		'rxjs'
	]
	const totalPolyfills = [
		'core-js/es6/reflect',
		'core-js/es7/reflect',
		'zone.js/dist/zone',
		'event-source-polyfill'
	]
	const localLibraries = [
		'./Angular/lib/jquery/dist/jquery',
		'./Angular/lib/jquery-validation/dist/jquery.validate',
		'./Angular/lib/bootstrap/dist/js/bootstrap',
		'./Angular/js/site'
	]
	
	
	// Universal config for all vendor code bundles used for browser and server rendering
	const meta = {
		// Options for what build information is displayed in the terminal while bundling files
		stats: { modules: false },
		resolve: { extensions: [ '.ts', '.js' ] },
		module: {
			rules: [
				{ test: /\.(png|woff|woff2|eot|ttf|svg)(\?|$)/, use: 'url-loader?limit=100000' }
			]
		},
		plugins: [
			new CleanWebpackPlugin( [ 'Root/build', 'Angular/build' ] ),
			// Helps fix critical dependencies warnings when compiling Angular vendor code
			new webpack.ContextReplacementPlugin( /\@angular\b.*\b(bundles|linker)/, path.join( __dirname, 'app' ) ),
			new webpack.ContextReplacementPlugin( /(.+)?angular(\\|\/)core(.+)?/, path.join( __dirname, 'app' ) ),
			// Workaround using an unknown plugin for resolving a particular foreign issue 
			new webpack.IgnorePlugin( /^vertx$/ )
		],
		// Library setting is unknown and necessitates further investigation into its use
		output: { filename: '[name].bundle.js', publicPath: 'build/', library: '[name]_[hash]' }
	}
	
	
	// Frontend config that generates bundles that are rendered after the initial page loads
	const view = amal( meta, {
		/* entry: { vendor: './Angular/vendor.ts', polyfills: './Angular/polyfills.ts' }, */
		/* entry: { vendor: develop ? getAllVendors( ) : undefined, polyfills: getTotalPolyfills( ) }, */
		entry: { vendor: develop ? nodeModules.concat( localLibraries ) : undefined, polyfills: totalPolyfills },
		/* entry: { vendor: develop ? nodeModules.concat( localLibraries ) : totalPolyfills }, */
		module: {
			rules: [
				{ test: /\.css(\?|$)/, use: ExtractTextPlugin.extract( { use: develop ? 'css-loader' : 'css-loader?minimize' } ) }
			]
		},
		plugins: [
			new ExtractTextPlugin( 'vendor.bundle.css' ),
			// Name the vendor manifest json file being generated and verify the name setting
			new webpack.DllPlugin( {
				path: path.join( __dirname, 'Root', 'build', '[name].bundle.json' ),
				name: '[name]_[hash]'
			} )
		// Development-specific plugins for configuring and building the final bundled output
		// Production-specific plugins for configuring and building the final bundled output
		].concat( develop ? [ ] : [ new webpack.optimize.UglifyJsPlugin( ) ] ),
		output: { path: path.join( __dirname, 'Root', 'build' ) }
	} )
	
	
	// Backend config where ouput bundles are first prerendered in Node for utilizing seo
	const rear = amal( meta, {
		// Identifies the environment the bundles run in, such as in the browser or via Node
		target: 'node',
		// Search for information on the resolve option's mainFields attribute functionality
		resolve: { mainFields: [ 'main' ] },
		/* entry: { vendor: './Angular/vendor.ts', polyfills: './Angular/polyfills.ts' }, */
		/* entry: { vendor: getAllVendors( ).concat( [ 'aspnet-prerendering' ] ), polyfills: getTotalPolyfills( ) }, */
		entry: { vendor: nodeModules.concat( localLibraries ).concat( [ 'aspnet-prerendering' ] ), polyfills: totalPolyfills },
		/*
			entry: { vendor: nodeModules.concat( localLibraries ).concat( totalPolyfills ).concat( [ 'aspnet-prerendering' ] ) },
		*/
		module: {
			rules: [
				{ test: /\.css(\?|$)/, use: [ 'to-string-loader', develop ? 'css-loader' : 'css-loader?minimize' ] }
			]
		},
		plugins: [
			// Name the vendor manifest json file being generated and verify the name setting
			new webpack.DllPlugin( {
				path: path.join( __dirname, 'Angular', 'build', '[name].bundle.json' ),
				name: '[name]_[hash]'
			} )
		// Development-specific plugins for configuring and building the final bundled output
		// Production-specific plugins for configuring and building the final bundled output
		].concat( develop ? [ ] : [ new webpack.optimize.UglifyJsPlugin( ) ] ),
		output: { path: path.join( __dirname, 'Angular', 'build' ), libraryTarget: 'commonjs2' }
	} )
	
	
	// Returned configs for Webpack to interpret, build, and output the specified bundles
	return [ view, rear ]
	
}



