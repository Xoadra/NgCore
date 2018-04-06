



import { enableProdMode } from '@angular/core'
import { createServerRenderer } from 'aspnet-prerendering'
import { BackModule } from './app/app.server'
// Allows server-side rendering of Angular content
import { ngAspnetCoreEngine, IEngineOptions, createTransferScript } from '@nguniversal/aspnetcore-engine'

// Polyfills, but not yet sure why it is necessary here
import 'zone.js'



enableProdMode( )


// Configuration for use with platform-server provider
export default createServerRenderer( core => {
	const ops: IEngineOptions = {
		appSelector: '<app-root></app-root>',
		ngModule: BackModule,
		request: core,
		providers: [ ]
	}
	return ngAspnetCoreEngine( ops ).then( trans => {
		// Transfer data from the server to the frontend
		trans.globals.transferData = createTransferScript( {
			someData: 'Transfer this to the client on the window.TRANSFER_CACHE {  } object',
			// Data accessed from the backend server
			fromDotnet: core.data.thisCameFromDotNET
		} )
		return ( { html: trans.html, globals: trans.globals } )
	} )
} )


/* export { BackModule } from './app/app.server' */


