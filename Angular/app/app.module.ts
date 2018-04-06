



import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { CommonModule } from '@angular/common'

import { RouteModule } from './app.routing'

import { AppComponent } from './app.component'



@NgModule( {
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule.withServerTransition( { appId: 'app' } ),
		CommonModule,
		RouteModule
	],
	providers: [ ],
	bootstrap: [ AppComponent ]
} )


export class AppModule {  }


