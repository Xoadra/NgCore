



import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { BrowserModule } from '@angular/platform-browser'
// Unknown module presumably for some sort of caching, but will keep
/* import { TransferHttpCacheModule } from '@nguniversal/common' */

/* import { PrebootModule } from 'preboot' */

import { RouteModule } from './app.routing'

import { AppComponent } from './app.component'



@NgModule( {
	declarations: [
		AppComponent
	],
	imports: [
		RouteModule,
		CommonModule,
		BrowserModule.withServerTransition( { appId: 'app' } ),
		// Keeping preboot settings commented out for potential later use
		/* PrebootModule.withConfig( { appRoot: 'app-root' } ) */
		/* TransferHttpCacheModule, */
	],
	providers: [ ],
	bootstrap: [ AppComponent ]
} )


export class AppModule {  }



