



( function ( global ) {
	SystemJS.config( {
		baseURL: './wwwroot',
		defaultJSExtensions: true,
		// Default transpiler setup, which in this case is TypeScript
		transpiler: 'ts',
		// Paths to serve using an alias
		paths: {
			'npm:':
				'node_modules/',
			'jspm':
				'node_modules/jspm-packages/'
		},
		// Map tells the System loader where to look for things
		map: {
			// Identify the Angular app within the 'app' folder
			'app': 'app',
			// Angular bundles
			'@angular/core':
				'npm:@angular/core/bundles/core.umd.js',
			'@angular/common':
				'npm:@angular/common/bundles/common.umd.js',
			'@angular/compiler':
				'npm:@angular/compiler/bundles/compiler.umd.js',
			'@angular/platform-browser':
				'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
			'@angular/platform-browser-dynamic':
				'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
			'@angular/http':
				'npm:@angular/http/bundles/http.umd.js',
			'@angular/router':
				'npm:@angular/router/bundles/router.umd.js',
			'@angular/forms':
				'npm:@angular/forms/bundles/forms.umd.js',
			'angular-in-memory-web-api':
				'npm:angular-in-memory-web-api/bundles/in-memory-web-api.umd.js',
			// TypeScript compiler
			'ts':
				'jspm:github/frankwallis/plugin-typescript@9.0.0',
			'typescript':
				'npm:typescript',
			// Rxjs library
			'rxjs':
				'npm:rxjs'
		},
		// Packages tells the System loader how to load when no filename and/or no extension
		packages: {
			app: {
				main: './main.ts',
				defaultExtension: 'ts',
				/* meta: {
					'./*.js': {
						loader: 'systemjs-angular-loader.js'
					}
				} */
			},
			// Using the jspm TypeScript plugin to allow direct imports of TypeScript files 
			ts: {
				main: '/plugin.js'
			},
			// Find the 'typescript' module in 'node_modules' for transpiling
			typescript: {
				main: 'lib/typescript.js',
				meta: {
					'lib/typescript.js': {
						exports: 'ts'
					}
				}
			},
			// Set TypeScript settings
			typescriptOptions: {
				module: 'system',
				noImplicitAny: true,
				// Can also be set to a path
				tsconfig: true
			},
			// Optional settings for rxjs imports
			rxjs: {
				defaultExtension: 'js'
			}
		}
	} )
} )( this )


