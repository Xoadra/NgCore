



import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { RouteModule } from './app.routing'

import { AppComponent } from './app.component'



@NgModule( {
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		RouteModule
	],
	providers: [ ],
	bootstrap: [ AppComponent ]
} )


export class AppModule {  }


