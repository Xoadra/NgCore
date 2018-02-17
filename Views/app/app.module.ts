



import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { RouteModule } from './app.routing'

import { AppComponent } from './app.component'
import { AboutComponent } from './about/about.component'
import { ContactComponent } from './contact/contact.component'
import { IndexComponent } from './index/index.component'



@NgModule( {
	declarations: [
		AppComponent,
		AboutComponent,
		ContactComponent,
		IndexComponent
	],
	imports: [
		BrowserModule
	],
	providers: [ ],
	bootstrap: [ AppComponent ]
} )


export class AppModule {  }



