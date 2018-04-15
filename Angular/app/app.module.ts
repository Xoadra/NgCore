



import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
// Unknown module presumably for some sort of caching, but will keep
/* import { TransferHttpCacheModule } from '@nguniversal/common' */

/* import { PrebootModule } from 'preboot' */

import { RouteModule } from './app.routing'

import { AppComponent } from './app.component'

/* import { Platform } from './tools/prerender' */

import { PreService } from './services/pre.service'



@NgModule( {
	declarations: [
		AppComponent
	],
	imports: [
		RouteModule,
		BrowserModule.withServerTransition( { appId: 'app' } ),
		// Keeping preboot settings commented out for potential later use
		/* PrebootModule.withConfig( { appRoot: 'app-root' } ) */
		/* TransferHttpCacheModule, */
	],
	providers: [
		PreService
	],
	bootstrap: [ AppComponent ]
} )


export class AppModule {  }



