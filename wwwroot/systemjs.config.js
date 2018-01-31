



//import { System } from 'systemjs'
//var SystemJS = require( 'systemjs' )


( function ( global ) {
	SystemJS.config( {
		//baseURL: '/',
		//transpiler: 'typescript',
		paths: {
			'root:': 'wwwroot/',
			'npm:': 'node_modules/'
		},
		map: {
			'app': 'root:app',
			'@angular/core': 'npm:@angular/core/',
			'@angular/common': 'npm:@angular/common/',
			'@angular/animations': 'npm:@angular/animations/',
			'@angular/animations/browser': 'npm:@angular/animations/',
			'@angular/platform-browser/animations': 'npm:@angular/platform-browser/',
			'@angular/compiler': 'npm:@angular/compiler/',
			'@angular/platform-browser': 'npm:@angular/platform-browser/',
			'@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/',
			'@angular/common/http': 'npm:@angular/common/http/',
			'@angular/http': 'npm:@angular/http/',
			'@angular/router': 'npm:@angular/router/',
			'@angular/forms': 'npm:@angular/forms/',
		},
		packages: {
			app: {
				defaultExtension: 'ts',
				//meta: { './*.js': { loader: 'systemjs-angular-loader.js' } }
			},
			rxjs: {
				defaultExtension: 'js'
			}
		}
	} )
} )( this )



