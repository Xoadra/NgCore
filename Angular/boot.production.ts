



// Polyfills, but not yet sure why it is necessary here
import './polyfills.ts'
import 'zone.js/dist/zone-node'
import 'zone.js'

import { enableProdMode } from '@angular/core'
import { createServerRenderer } from 'aspnet-prerendering'
// Allows server-side rendering of Angular content
import { ngAspnetCoreEngine, IEngineOptions, createTransferScript } from '@nguniversal/aspnetcore-engine'

// NgModule for using AoT compilation for production
const { BackModuleNgFactory } = require( './app/app.server.ngfactory' )



// Supposedly allows faster builds for server rendering
enableProdMode( )


// Configuration for use with platform-server provider
export default createServerRenderer( core => {
	const ops: IEngineOptions = {
		appSelector: '<app-root></app-root>',
		ngModule: BackModuleNgFactory,
		request: core,
		providers: [ ]
	}
	return ngAspnetCoreEngine( ops ).then( trans => {
		// Transfer data from the server to the frontend
		trans.globals.transferData = createTransferScript( {
			someData: 'Transfer this to the client on the window.TRANSFER_CACHE {} object',
			// Data accessed from the backend server
			fromDotnet: core.data.thisCameFromDotNET
		} )
		return ( { html: trans.html, globals: trans.globals } )
	} )
} )


