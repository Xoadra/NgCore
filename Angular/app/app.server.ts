



import { NgModule } from '@angular/core'
import { ServerModule } from '@angular/platform-server'
// Import the follwing to enable lazy loading with server-side rendering
/* import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader' */

import { AppModule } from './app.module'

import { AppComponent } from './app.component'
/* import { Platform } from './tools/prerender' */



@NgModule( {
	imports: [
		AppModule,
		ServerModule
		/* ModuleMapLoaderModule */
	],
	providers: [ ],
	bootstrap: [ AppComponent ]
} )


export class BackModule {  }



