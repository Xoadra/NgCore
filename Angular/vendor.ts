



import '@angular/animations'
import '@angular/common'
import '@angular/compiler'
import '@angular/core'
import '@angular/forms'
import '@angular/http'
import '@angular/platform-browser'
import '@angular/platform-browser-dynamic'
import '@angular/router'

import 'rxjs'
import 'aspnet-prerendering'
/* import 'systemjs' */

/* import 'systemjs/dist/system.src' */


/* import '../Angular/systemjs.config'
import '../Angular/systemjs.loader' */

import '../Angular/lib/jquery/dist/jquery'
/* import '../Angular/lib/jquery-validation/dist/additional-methods' */
/* import '../Angular/lib/jquery-validation/dist/additional-methods.min' */
import '../Angular/lib/jquery-validation/dist/jquery.validate'
/* import '../Angular/lib/jquery-validation-unobtrusive/jquery.validate.unobtrusive' */

import '../Angular/lib/bootstrap/dist/js/bootstrap'
/* import '../Angular/lib/bootstrap/dist/js/npm' */
/* import '../Angular/lib/bootstrap/dist/fonts/glyphicons-halflings-regular.eot'
import '../Angular/lib/bootstrap/dist/fonts/glyphicons-halflings-regular.svg'
import '../Angular/lib/bootstrap/dist/fonts/glyphicons-halflings-regular.ttf'
import '../Angular/lib/bootstrap/dist/fonts/glyphicons-halflings-regular.woff'
import '../Angular/lib/bootstrap/dist/fonts/glyphicons-halflings-regular.woff2'
import '../Angular/lib/bootstrap/dist/css/bootstrap-theme'
import '../Angular/lib/bootstrap/dist/css/bootstrap' */


import '../Angular/js/site'

/* import '../Angular/css/site' */


/* import '../Angular/systemjs.config'
import '../Angular/systemjs.loader' */


/* import '/lib/bootstrap/dist/css/bootstrap.css'
import '/lib/bootstrap/dist/js/bootstrap.min.js'
import '/css/site.css'
import '/lib/bootstrap/dist/css/bootstrap.min.css'
import '/css/site.min.css'
import '/lib/jquery/dist/jquery.js'
import '/lib/bootstrap/dist/js/bootstrap.js'
import '/js/site.js'
import '/lib/jquery/dist/jquery.min.js'
import '/lib/bootstrap/dist/js/bootstrap.min.js'
import '/js/site.min.js' */



function getNodeModules( ) {
	const nodeModules: string[ ] = [
		'@angular/animations',
		'@angular/common',
		'@angular/compiler',
		'@angular/core',
		'@angular/forms',
		'@angular/http',
		'@angular/platform-browser',
		'@angular/platform-browser-dynamic',
		'@angular/router',
		'rxjs',
		/* 'aspnet-prerendering' */
	]
	return nodeModules
}

function getTotalPolyfills( ) {
	const totalPolyfills: string[ ] = [
		'core-js/es6/reflect',
		'core-js/es7/reflect',
		'zone.js/dist/zone',
		'event-source-polyfill'
	]
	return totalPolyfills
}

function getLocalLibraries( ) {
	const localLibraries: string[ ] = [
		'../Angular/lib/jquery/dist/jquery',
		'../Angular/lib/jquery-validation/dist/jquery.validate',
		'../Angular/lib/bootstrap/dist/js/bootstrap',
		'../Angular/js/site'
	]
	return localLibraries
}

function getAllVendors( ) {
	return getNodeModules( ).concat( getLocalLibraries( ) )
}



