



import { enableProdMode } from '@angular/core'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
import { environment } from './environments/environment'

import { FrontModule } from './app/app.browser'

// Polyfills, but not yet sure why it is necessary here
import './polyfills.ts'
import 'zone.js/dist/zone'
import 'reflect-metadata'



enableProdMode( )


/* if ( environment.production ) { enableProdMode( ) } */

/* platformBrowserDynamic( ).bootstrapModule( FrontModule )
	.then( ( success: any ) => console.log( 'It\'s aliiiive!!!' ) )
	.catch( ( err: any ) => console.error( err ) ) */


/* const module = platformBrowserDynamic( ).bootstrapModule( FrontModule ) */
platformBrowserDynamic( ).bootstrapModule( FrontModule )

