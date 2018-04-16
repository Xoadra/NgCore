



// Polyfills, but not yet sure why it is necessary here
import './polyfills.ts'
import 'zone.js/dist/zone'

import { enableProdMode } from '@angular/core'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
/* import { environment } from './environments/environment' */

import { FrontModule } from './app/app.browser'



// Start up hot module replacement or production mode
/* if ( module[ 'hot' ] ) {
	module[ 'hot' ].accept( )
	module[ 'hot' ].dispose( ( ) => {
		hotmod.then( mod => mod.destroy( ) )
	} )
}
else {
	enableProdMode( )
} */


/* enableProdMode( ) */


/* if ( environment.production ) { enableProdMode( ) } */

/* platformBrowserDynamic( ).bootstrapModule( FrontModule )
	.then( ( success: any ) => console.log( 'It\'s aliiiive!!!' ) )
	.catch( ( err: any ) => console.error( err ) ) */


/* const hotmod = platformBrowserDynamic( ).bootstrapModule( FrontModule ) */
platformBrowserDynamic( ).bootstrapModule( FrontModule )



