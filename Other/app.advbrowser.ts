



import { NgModule } from '@angular/core'
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
/* import { BrowserPrebootModule } from 'preboot/browser' */

import { APP_BASE_HREF } from '@angular/common'
import { ORIGIN_URL, REQUEST } from '@nguniversal/aspnetcore-engine'

import { AppModuleShared } from './app.advmodule'
import { AppComponent } from './app.component'



export function getOriginUrl( ) {
	return window.location.origin
}

export function getRequest( ) {
	// the Request object only lives on the server
	return { cookie: document.cookie }
}


@NgModule( {
	imports: [
		/* BrowserPrebootModule.replayEvents( ), */
		BrowserAnimationsModule,
		// Our Common AppModule
		AppModuleShared
	],
	providers: [
		// We need this for our Http calls since they'll be using an ORIGIN_URL provided in main.server
		// (Also remember the Server requires Absolute URLs)
		{ provide: ORIGIN_URL, useFactory: ( getOriginUrl ) },
		// The server provides these in main.server
		{ provide: REQUEST, useFactory: ( getRequest ) }
	],
	bootstrap: [ AppComponent ]
} )


export class AppModule {  }



