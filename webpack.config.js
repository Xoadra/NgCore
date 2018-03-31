



// Updated custom Webpack configuration for attempting server-side prerendering
const webpack = require( 'webpack' )
const path = require( 'path' )


module.exports = {
	// Options for what build information is displayed in the terminal while bundling
	stats: { modules: false },
	// Declare Webpack's absolute route where it looks for entry points and loaders
	context: __dirname,
	// Identifies environment the bundles run in, such as in the browser or via Node
	target: 'node',
	entry: {
		main: './Angular/main.ts',
		server: './Angular/server.ts'
	},
	resolve: { extensions: [ '.ts', '.js' ] },
	module: {
		rules: [
			
		]
	},
	plugins: [
		
	],
	devtool: 'cheap-eval-source-map',
	// Enables code designed for running in Node to operate in non-Node environments
	node: {
		fs: 'empty'
	},
	output: {
		// Not sure what this configuration does, but will investigate it soon
		/* libraryTarget: 'commonjs', */
		filename: '[name].bundle.js',
		path: path.join( __dirname, 'Root' ),
		publicPath: '/Root'
	}
}



