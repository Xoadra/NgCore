



import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppModule } from './app.module'

import { AppComponent } from './app.component'
/* import { Platform } from './tools/prerender' */



@NgModule( {
	imports: [
		AppModule
	],
	providers: [ ],
	bootstrap: [ AppComponent ]
} )


export class FrontModule {  }



