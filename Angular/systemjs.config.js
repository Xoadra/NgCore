



//import { SystemJS } from 'systemjs'



//var SystemJS = require( 'systemjs' )


( function ( global ) {
	SystemJS.config( {
		/* baseURL: '/', */
		/* transpiler: 'typescript', */
		paths: {
			/* 'root:': 'Views/', */
			'npm:':
				'node_modules/'
		},
		map: {
			'app':
				'app',
			/* 'app':
				'main.bundle.js', */
			// Current Angular module partial route paths
			/* '@angular/animations': 'npm:@angular/animations/', */
			/* '@angular/animations/browser': 'npm:@angular/animations/', */
			/* '@angular/core': 'npm:@angular/core/', */
			/* '@angular/common': 'npm:@angular/common/', */
			/* '@angular/common/http': 'npm:@angular/common/http/', */
			/* '@angular/compiler': 'npm:@angular/compiler/', */
			/* '@angular/forms': 'npm:@angular/forms/', */
			/* '@angular/http': 'npm:@angular/http/', */
			/* '@angular/platform-browser': 'npm:@angular/platform-browser/', */
			/* '@angular/platform-browser/animations': 'npm:@angular/platform-browser/', */
			/* '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/', */
			/* '@angular/router': 'npm:@angular/router/', */
			// Previous Angular module full route paths
			'@angular/animations':
				'npm:@angular/animations/bundles/animations.umd.min.js',
			'@angular/animations/browser':
				'npm:@angular/animations/bundles/animations-browser.umd.js',
			'@angular/core':
				'npm:@angular/core/bundles/core.umd.js',
			'@angular/common':
				'npm:@angular/common/bundles/common.umd.js',
			'@angular/forms':
				'npm:@angular/forms/bundles/forms.umd.js',
			'@angular/compiler':
				'npm:@angular/compiler/bundles/compiler.umd.js',
			'@angular/http':
				'npm:@angular/http/bundles/http.umd.js',
			'@angular/platform-browser':
				'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
			'@angular/platform-browser/animations':
				'npm:@angular/platform-browser/bundles/platform-browser-animations.umd.js',
			'@angular/platform-browser-dynamic':
				'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
			'@angular/router':
				'npm:@angular/router/bundles/router.umd.js',
			'rxjs':
				'npm:rxjs',
		},
		packages: {
			app: {
				defaultExtension: 'js',
				meta: { './*.js': { loader: 'systemjs.loader.js' } }
			},
			rxjs: {
				defaultExtension: 'js'
			}
		}
	} )
} )( this )



/* SystemJS.import( 'main.bundle.js' )
	.catch( function ( err ) { console.error( err ) } )
	.then( function ( m ) { console.log( m ) } ) */


