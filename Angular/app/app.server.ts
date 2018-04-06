



import { NgModule } from '@angular/core'
// May not need BrowserModule here, but will stay for testing purposes
import { BrowserModule } from '@angular/platform-browser'
import { ServerModule } from '@angular/platform-server'
// Import the follwing to enable lazy loading with server-side rendering
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader'

import { AppModule } from './app.module'
import { AppComponent } from './app.component'



@NgModule( {
	imports: [
		AppModule,
		ServerModule,
		ModuleMapLoaderModule
	],
	bootstrap: [ AppComponent ]
} )


export class BackModule {  }


