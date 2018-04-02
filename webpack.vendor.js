



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
		
	}
	// Frontend config that generates bundles that are rendered after the initial page loads
	const view = amal( meta, {
		
	} )
	// Backend config where ouput bundles are first prerendered in Node for utilizing seo
	const rear = amal( meta, {
		
	} )
	// Returned configs for Webpack to interpret, build, and output the specified bundles
	return [ view, rear ]
}



