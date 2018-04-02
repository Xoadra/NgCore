



// Vendor library custom Webpack configuration for optimized bundling speed and chunks



const webpack = require( 'webpack' )
const amal = require( 'webpack-merge' )
const path = require( 'path' )


// Module exports converted from object to arrow function to use environment variables
module.exports = ( env ) => {
	
	// Environment identity, setting it to the returned boolean based upon the set environment
	const develop = !( env && env.prod )
	
	
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
			// Helps fix critical dependencies warnings when compiling Angular vendor code
			new webpack.ContextReplacementPlugin( /\@angular\b.*\b(bundles|linker)/, path.join( __dirname, 'app' ) ),
			new webpack.ContextReplacementPlugin( /(.+)?angular(\\|\/)core(.+)?/, path.join( __dirname, 'app' ) ),
			// Workaround using an unknown plugin for resolving a particular foreign issue 
			new webpack.IgnorePlugin( /^vertx$/ )
		],
		// Library setting is unknown and necessitates further investigation into its use
		output: { filename: '[name].bundle.js', publicPath: 'build/', /* library: '[name]_[hash]' */ }
	}
	
	
	// Frontend config that generates bundles that are rendered after the initial page loads
	const view = amal( meta, {
		plugins: [
			
		// Development-specific plugins for configuring and building the final bundled output
		].concat( develop ? [
			
		// Production-specific plugins for configuring and building the final bundled output
		] : [
			
		] )
	} )
	
	
	// Backend config where ouput bundles are first prerendered in Node for utilizing seo
	const rear = amal( meta, {
		plugins: [
			
		// Development-specific plugins for configuring and building the final bundled output
		].concat( develop ? [
			
		// Production-specific plugins for configuring and building the final bundled output
		] : [
			
		] )
	} )
	
	
	// Returned configs for Webpack to interpret, build, and output the specified bundles
	return [ view, rear ]
	
}



