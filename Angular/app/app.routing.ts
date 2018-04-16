



import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { AboutComponent } from './about/about.component'
import { IndexComponent } from './index/index.component'
import { ContactComponent } from './contact/contact.component'



const routes: Routes = [
	{ path: '', redirectTo: 'home', pathMatch: 'full' },
	{ path: 'home', component: IndexComponent, data: { title: 'Home' } },
	{ path: 'about', component: AboutComponent, data: { title: 'About' } },
	{ path: 'contact', component: ContactComponent, data: { title: 'Contact' } }
]


@NgModule( {
	declarations: [
		IndexComponent,
		AboutComponent,
		ContactComponent
	],
	imports: [
		RouterModule.forRoot( routes )
	],
	exports: [ RouterModule ]
} )


export class RouteModule {  }


