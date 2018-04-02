



// Source code custom Webpack configuration for attempting server-side prerendering



const webpack = require( 'webpack' )
const amal = require( 'webpack-merge' )
const path = require( 'path' )


// Module exports converted from object to arrow function to use environment variables
module.exports = ( env ) => {
	// Environment identity, setting it to the returned boolean based upon the set environment
	const develop = !( env && env.prod )
	// Universal config for all source code bundles used for browser and server rendering
	const meta = {
		// Options for what build information is displayed in the terminal while bundling files
		stats: { modules: false },
		// Declare Webpack's absolute route where it looks for entry points and loaders
		context: __dirname,
		resolve: { extensions: [ '.ts', '.js' ] },
		devtool: 'cheap-eval-source-map',
		module: {
			rules: [
				
			]
		},
		// CheckerPlugin supposedly does async error reporting, presumably while bundling
		plugins: [ new CheckerPlugin( ), ],
		output: { filename: '[name].bundle.js', publicPath: '/Root' }
	}
	// Frontend config that generates bundles that are rendered after the initial page loads
	const view = amal( meta, {
		// Allows code designed for running in Node to operate in non-Node environments
		node: { fs: 'empty' },
		entry: { main: './Angular/main.ts' },
		output: { path: path.join( __dirname, 'Root' ) }
	} )
	// Backend config where ouput bundles are first prerendered in Node for utilizing seo
	const rear = amal( meta, {
		// Identifies the environment the bundles run in, such as in the browser or via Node
		target: 'node',
		entry: { server: './Angular/server.ts' },
		plugins: [
			// Patches critical dependencies warnings when compiling Angular vendor code
			new webpack.ContextReplacementPlugin( /(.+)?angular(\\|\/)core(.+)?/, path.join( __dirname, 'app' ), {  } ),
			new webpack.ContextReplacementPlugin( /(.+)?express(\\|\/)(.+)?/, path.join( __dirname, 'app' ), {  } )
		],
		// Not sure what the libraryTarget setting does, but will investigate it eventually
		output: { path: path.join( __dirname, 'Root' ), /* libraryTarget: 'commonjs' */ }
	} )
	// Returned configs for Webpack to interpret, build, and output the specified bundles
	return [ view, rear ]
}


